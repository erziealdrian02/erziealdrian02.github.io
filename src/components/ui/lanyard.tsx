/* eslint-disable react/no-unknown-property */
'use client';

// Based on https://reactbits.dev/components/lanyard - customised with a round
// two-sided badge (portrait front, DCI logo back), a blue strap, procedural
// metal clip (no .glb download) and render/physics paused while off-screen.

import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
  events as createPointerEvents,
  type ThreeElement,
} from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  type RapierRigidBody,
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>;
    meshLineMaterial: Partial<ThreeElement<typeof MeshLineMaterial>>;
  }
}

const BADGE_RADIUS = 1;
const BADGE_DEPTH = 0.06;
const STRAP_BLUE = '#1d4ed8';

interface LanyardProps {
  frontImage?: string;
  backImage?: string;
  name?: string;
  role?: string;
  company?: string;
  gravity?: [number, number, number];
  /** Pauses rendering + physics (e.g. while scrolled off-screen) */
  paused?: boolean;
  className?: string;
}

type DragOffset = THREE.Vector3 | false;
type JointBody = RapierRigidBody & { lerped?: THREE.Vector3 };

export default function Lanyard({
  frontImage = '/images/profiles/me_ilustration.png',
  backImage = '/images/company/dci.png',
  name = 'MUHAMAD ERZIE ALDRIAN NUGRAHA',
  role = 'FULLSTACK DEVELOPER',
  company = 'PT DCI INDONESIA',
  gravity = [0, -40, 0],
  paused = false,
  className,
}: LanyardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hitAreaRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      <Canvas
        // Events are read from the wrapper so the touch hit-area overlay
        // (touch-action: none) can forward drags to the scene while the rest
        // of the canvas still lets the page scroll on phones.
        eventSource={wrapperRef as React.RefObject<HTMLElement>}
        events={(store) => ({
          ...createPointerEvents(store),
          compute(event, state) {
            const rect = state.gl.domElement.getBoundingClientRect();
            state.pointer.set(
              ((event.clientX - rect.left) / rect.width) * 2 - 1,
              -((event.clientY - rect.top) / rect.height) * 2 + 1
            );
            state.raycaster.setFromCamera(state.pointer, state.camera);
          },
        })}
        camera={{ position: [0, 0, isMobile ? 17 : 19], fov: 20 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        frameloop={paused ? 'never' : 'always'}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), 0)}
        style={{ position: 'absolute', inset: 0 }}
      >
        <ambientLight intensity={Math.PI} />
        <Suspense fallback={null}>
          <Physics gravity={gravity} timeStep={1 / 60} paused={paused}>
            <Band
              frontImage={frontImage}
              backImage={backImage}
              name={name}
              role={role}
              company={company}
              isMobile={isMobile}
              hitAreaRef={hitAreaRef}
            />
          </Physics>
          <Environment blur={0.75} resolution={isMobile ? 64 : 256}>
            <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </Suspense>
      </Canvas>
      {/* Follows the badge every frame; blocks page scroll only on the badge */}
      <div
        ref={hitAreaRef}
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          borderRadius: '9999px',
          touchAction: 'none',
          willChange: 'transform',
        }}
      />
    </div>
  );
}

/* ───────────────────────── Textures ───────────────────────── */

function drawArcText(
  ctx: CanvasRenderingContext2D,
  text: string,
  cx: number,
  cy: number,
  radius: number,
  centerAngle: number,
  bottom: boolean
) {
  const chars = [...text];
  const widths = chars.map((c) => ctx.measureText(c).width);
  const spacing = ctx.measureText(' ').width * 0.15;
  const total = widths.reduce((s, w) => s + w + spacing, -spacing);
  const dir = bottom ? -1 : 1;
  let angle = centerAngle - (dir * total) / 2 / radius;

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  chars.forEach((c, i) => {
    const half = widths[i] / 2 / radius;
    angle += dir * half;
    ctx.save();
    ctx.translate(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
    ctx.rotate(angle + (bottom ? -Math.PI / 2 : Math.PI / 2));
    ctx.fillText(c, 0, 0);
    ctx.restore();
    angle += dir * (half + spacing / radius);
  });
}

function makeBadgeTexture(
  image: HTMLImageElement,
  topText: string,
  bottomText: string,
  variant: 'front' | 'back'
) {
  const size = 1024;
  const c = size / 2;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  // Outer blue ring
  const ring = ctx.createLinearGradient(0, 0, size, size);
  ring.addColorStop(0, '#2563eb');
  ring.addColorStop(0.5, STRAP_BLUE);
  ring.addColorStop(1, '#1e3a8a');
  ctx.fillStyle = ring;
  ctx.beginPath();
  ctx.arc(c, c, c, 0, Math.PI * 2);
  ctx.fill();

  // Inner disc with the artwork
  const inner = c * 0.79;
  ctx.save();
  ctx.beginPath();
  ctx.arc(c, c, inner, 0, Math.PI * 2);
  ctx.clip();
  if (variant === 'front') {
    const bg = ctx.createRadialGradient(c, c * 0.8, 0, c, c, inner);
    bg.addColorStop(0, '#ffffff');
    bg.addColorStop(1, '#dbeafe');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, size, size);
    const s = inner * 2.1;
    ctx.drawImage(image, c - s / 2, c - s * 0.44, s, s);
  } else {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);
    const s = inner * 2.35;
    ctx.drawImage(image, c - s / 2, c - s / 2, s, s);
  }
  ctx.restore();

  // Thin white separators
  ctx.strokeStyle = 'rgba(255,255,255,0.9)';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(c, c, inner + 3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(255,255,255,0.45)';
  ctx.beginPath();
  ctx.arc(c, c, c - 14, 0, Math.PI * 2);
  ctx.stroke();

  // Curved labels on the ring
  const textRadius = (inner + c - 14) / 2;
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 54px Inter, "Segoe UI", Arial, sans-serif';
  const fit = (text: string, maxArc: number) => {
    let px = 54;
    while (px > 30 && ctx.measureText(text).width > maxArc) {
      px -= 2;
      ctx.font = `700 ${px}px Inter, "Segoe UI", Arial, sans-serif`;
    }
  };
  fit(topText, textRadius * Math.PI * 0.82);
  drawArcText(ctx, topText, c, c, textRadius, -Math.PI / 2, false);
  ctx.font = '600 46px Inter, "Segoe UI", Arial, sans-serif';
  fit(bottomText, textRadius * Math.PI * 0.6);
  drawArcText(ctx, bottomText, c, c, textRadius, Math.PI / 2, true);

  // Side stars
  ctx.font = '700 44px Arial, sans-serif';
  [Math.PI * 0.08, Math.PI * 0.92].forEach((a) => {
    ctx.save();
    ctx.translate(c + Math.cos(a) * textRadius, c + Math.sin(a) * textRadius);
    ctx.fillText('★', 0, 0);
    ctx.restore();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function makeStrapTexture() {
  const w = 1024;
  const h = 128;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;

  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#1e3a8a');
  g.addColorStop(0.18, STRAP_BLUE);
  g.addColorStop(0.5, '#2563eb');
  g.addColorStop(0.82, STRAP_BLUE);
  g.addColorStop(1, '#1e3a8a');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  // Stitched edges
  ctx.strokeStyle = 'rgba(255,255,255,0.55)';
  ctx.lineWidth = 3;
  ctx.setLineDash([14, 10]);
  [14, h - 14].forEach((y) => {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  });
  ctx.setLineDash([]);

  ctx.fillStyle = '#ffffff';
  ctx.font = '800 52px Inter, "Segoe UI", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('DCI  INDONESIA', w / 2, h / 2 + 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 8;
  return texture;
}

/* ───────────────────────── Scene ───────────────────────── */

interface BandProps {
  frontImage: string;
  backImage: string;
  name: string;
  role: string;
  company: string;
  isMobile: boolean;
  hitAreaRef: React.RefObject<HTMLDivElement | null>;
  maxSpeed?: number;
  minSpeed?: number;
}

function Band({
  frontImage,
  backImage,
  name,
  role,
  company,
  isMobile,
  hitAreaRef,
  maxSpeed = 50,
  minSpeed = 0,
}: BandProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const band = useRef<any>(null);
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<JointBody>(null!);
  const j2 = useRef<JointBody>(null!);
  const j3 = useRef<JointBody>(null!);
  const card = useRef<RapierRigidBody>(null!);

  const { camera, size } = useThree();
  const tmp = useMemo(
    () => ({
      vec: new THREE.Vector3(),
      ang: new THREE.Vector3(),
      dir: new THREE.Vector3(),
      quat: new THREE.Quaternion(),
      proj: new THREE.Vector3(),
    }),
    []
  );

  const segmentProps = {
    type: 'dynamic' as const,
    canSleep: true,
    colliders: false as const,
    angularDamping: 4,
    linearDamping: 4,
  };

  const [frontImg, backImg] = useLoader(THREE.ImageLoader, [frontImage, backImage]);
  const frontTexture = useMemo(
    () => makeBadgeTexture(frontImg, name, role, 'front'),
    [frontImg, name, role]
  );
  const backTexture = useMemo(
    () => makeBadgeTexture(backImg, company, role, 'back'),
    [backImg, company, role]
  );
  const strapTexture = useMemo(() => makeStrapTexture(), []);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  curve.curveType = 'chordal';

  const [dragged, drag] = useState<DragOffset>(false);
  const [hovered, hover] = useState(false);
  const flipped = useRef(false);
  const pressInfo = useRef({ x: 0, y: 0, t: 0, active: false });

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0],
  ]);

  useEffect(() => {
    if (!hovered) return;
    document.body.style.cursor = dragged ? 'grabbing' : 'grab';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered, dragged]);

  useFrame((state, rawDelta) => {
    // Clamp: after a pause the first delta can be seconds long and would make
    // the strap lerp overshoot wildly.
    const delta = Math.min(rawDelta, 1 / 30);
    const { vec, dir, ang, quat, proj } = tmp;
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (!fixed.current || !j1.current || !j2.current || !j3.current || !card.current) return;

    [j1, j2].forEach((ref) => {
      const body = ref.current!;
      if (!body.lerped) body.lerped = new THREE.Vector3().copy(body.translation());
      const clampedDistance = Math.max(
        0.1,
        Math.min(1, body.lerped.distanceTo(body.translation()))
      );
      body.lerped.lerp(
        body.translation(),
        delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
      );
    });
    curve.points[0].copy(j3.current.translation());
    curve.points[1].copy(j2.current.lerped!);
    curve.points[2].copy(j1.current.lerped!);
    curve.points[3].copy(fixed.current.translation());
    band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));

    // Spring the badge towards facing front (or back after a tap-to-flip).
    const r = card.current.rotation();
    quat.set(r.x, r.y, r.z, r.w);
    const yaw = 2 * Math.atan2(quat.y, quat.w);
    const target = flipped.current ? Math.PI : 0;
    const diff = Math.atan2(Math.sin(target - yaw), Math.cos(target - yaw));
    ang.copy(card.current.angvel());
    card.current.setAngvel({ x: ang.x, y: ang.y + diff * 0.2, z: ang.z }, true);

    // Keep the touch hit-area on top of the badge.
    const el = hitAreaRef.current;
    if (el) {
      const t = card.current.translation();
      proj.set(t.x, t.y, t.z).project(camera);
      const px = ((proj.x + 1) / 2) * size.width;
      const py = ((1 - proj.y) / 2) * size.height;
      const dist = camera.position.z - t.z;
      const persp = camera as THREE.PerspectiveCamera;
      const unit = size.height / (2 * dist * Math.tan(THREE.MathUtils.degToRad(persp.fov / 2)));
      const d = BADGE_RADIUS * 2.2 * unit;
      el.style.width = `${d}px`;
      el.style.height = `${d}px`;
      el.style.transform = `translate3d(${px - d / 2}px, ${py - d / 2}px, 0)`;
    }
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[BADGE_RADIUS * 0.8, BADGE_RADIUS * 0.8, 0.02]} />
          <group
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => {
              try {
                (e.target as Element).releasePointerCapture(e.pointerId);
              } catch {}
              drag(false);
              const p = pressInfo.current;
              // R3F can deliver pointerup twice (capture + hit); handle once.
              if (!p.active) return;
              p.active = false;
              const moved = Math.hypot(e.clientX - p.x, e.clientY - p.y);
              // A quick tap (not a drag) flips the badge around.
              if (moved < 6 && performance.now() - p.t < 350) {
                flipped.current = !flipped.current;
                card.current?.applyTorqueImpulse({ x: 0, y: flipped.current ? 0.35 : -0.35, z: 0 }, true);
              }
            }}
            onPointerDown={(e) => {
              pressInfo.current = { x: e.clientX, y: e.clientY, t: performance.now(), active: true };
              try {
                (e.target as Element).setPointerCapture(e.pointerId);
              } catch {}
              const t = card.current!.translation();
              drag(new THREE.Vector3().copy(e.point).sub(tmp.vec.set(t.x, t.y, t.z)));
            }}
          >
            {/* Front */}
            <mesh position={[0, 0, BADGE_DEPTH / 2 + 0.001]}>
              <circleGeometry args={[BADGE_RADIUS, 96]} />
              <meshPhysicalMaterial
                map={frontTexture}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.55}
                metalness={0.15}
              />
            </mesh>
            {/* Back */}
            <mesh position={[0, 0, -BADGE_DEPTH / 2 - 0.001]} rotation={[0, Math.PI, 0]}>
              <circleGeometry args={[BADGE_RADIUS, 96]} />
              <meshPhysicalMaterial
                map={backTexture}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.55}
                metalness={0.15}
              />
            </mesh>
            {/* Rim */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[BADGE_RADIUS, BADGE_RADIUS, BADGE_DEPTH, 96, 1, true]} />
              <meshStandardMaterial color="#c7d2fe" metalness={0.9} roughness={0.3} />
            </mesh>
            <Clip />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap={1}
          map={strapTexture}
          repeat={[-3, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}

/** Eyelet + lobster-style clasp connecting the badge (top at y=R) to the strap (y=1.5). */
function Clip() {
  return (
    <group>
      <mesh position={[0, BADGE_RADIUS + 0.04, 0]}>
        <torusGeometry args={[0.09, 0.028, 16, 40]} />
        <meshStandardMaterial color="#e4e4e7" metalness={1} roughness={0.22} />
      </mesh>
      <mesh position={[0, BADGE_RADIUS + 0.24, 0]}>
        <capsuleGeometry args={[0.05, 0.22, 8, 16]} />
        <meshStandardMaterial color="#d4d4d8" metalness={1} roughness={0.25} />
      </mesh>
      <mesh position={[0, 1.45, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.07, 0.022, 16, 40]} />
        <meshStandardMaterial color="#e4e4e7" metalness={1} roughness={0.22} />
      </mesh>
    </group>
  );
}
