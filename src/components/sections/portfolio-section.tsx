'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, Figma, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

type Project = {
  id: string;
  title: string;
  description: string;
  category: 'ui_ux' | 'documentation' | 'web_developer' | 'mobile';
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  figma?: string;
  gallery: string[];
  platform: string;
};

type FilterKey = 'all' | 'ui_ux' | 'documentation' | 'web_developer' | 'mobile';

const CATEGORY_COLORS: Record<string, string> = {
  ui_ux: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  web_developer: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  mobile: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  documentation: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
};

const CATEGORY_DOT: Record<string, string> = {
  ui_ux: 'bg-purple-400',
  web_developer: 'bg-blue-400',
  mobile: 'bg-emerald-400',
  documentation: 'bg-amber-400',
};

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'ERP Reimbursement System',
      description:
        'HCIS-KPN is a module of ERP system for managing HR aspects — Business Trip, Cash Advanced, Medical Reimbursement, and more.',
      category: 'web_developer',
      image: '/images/portofolio/webdevelopment/reimburse/bg-wallpaper.png',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'Tailwind CSS', 'PHPUnit'],
      link: 'https://erpreimburse.neutracode.my.id/',
      gallery: [
        '/images/portofolio/webdevelopment/reimburse/login.png',
        '/images/portofolio/webdevelopment/reimburse/listca.png',
        '/images/portofolio/webdevelopment/reimburse/listbtadmin.png',
        '/images/portofolio/webdevelopment/reimburse/formdoc.png',
      ],
      platform: 'web',
    },
    {
      id: 'project-2',
      title: 'Fleet Management System',
      description:
        'ERP module to manage vehicle fleets — maintenance scheduling, location tracking, and driver management.',
      category: 'web_developer',
      image: '/images/portofolio/webdevelopment/fleetmanagement/bg-wallpaper.jpg',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'Tailwind CSS', 'Vite'],
      link: 'https://fleetmanagementsystem.neutracode.my.id/',
      gallery: [
        '/images/portofolio/webdevelopment/fleetmanagement/listtrips.png',
        '/images/portofolio/webdevelopment/fleetmanagement/gpsform.png',
        '/images/portofolio/webdevelopment/fleetmanagement/listpart.png',
        '/images/portofolio/webdevelopment/fleetmanagement/forminput.png',
      ],
      platform: 'web',
    },
    {
      id: 'project-3',
      title: 'Weather With Us',
      description:
        'Interactive weather app based on Indonesian administrative regions — province, district, village level data.',
      category: 'web_developer',
      image: '/images/portofolio/webdevelopment/weather/bg-wallpaper.png',
      technologies: ['PHP', 'Tailwind CSS', 'JavaScript', 'OpenWeatherMap API'],
      link: 'https://weatherwithus.neutracode.my.id/',
      gallery: [
        '/images/portofolio/webdevelopment/weather/weather_detail.png',
        '/images/portofolio/webdevelopment/weather/weather_maps.png',
        '/images/portofolio/webdevelopment/weather/weather_province.png',
        '/images/portofolio/webdevelopment/weather/weather_index.png',
      ],
      platform: 'web',
    },
    {
      id: 'project-4',
      title: 'Dev on Demand',
      description:
        'Web-based ERP for outsourcing service management — clients, projects, assignments, and audit logs.',
      category: 'web_developer',
      image: '/images/portofolio/webdevelopment/devondemands/bg-wallpaper.png',
      technologies: ['Laravel', 'Inertia.js', 'Vue.js', 'Tailwind CSS'],
      github: 'https://github.com/erziealdrian02/DevOnDemand-System',
      gallery: [
        '/images/portofolio/webdevelopment/devondemands/dashboardpage.png',
        '/images/portofolio/webdevelopment/devondemands/clientpage.png',
        '/images/portofolio/webdevelopment/devondemands/skillpage.png',
        '/images/portofolio/webdevelopment/devondemands/loginpage.png',
      ],
      platform: 'web',
    },
    {
      id: 'project-5',
      title: 'WeNime',
      description:
        'Anime streaming web app — browse, search, and watch various anime titles with a responsive interface.',
      category: 'web_developer',
      image: '/images/portofolio/webdevelopment/wenime/bg-wallpaper.png',
      technologies: ['React.js', 'Tailwind CSS', 'Vite', 'TypeScript'],
      link: 'http://wenimewatch.vercel.app/',
      gallery: [
        '/images/portofolio/webdevelopment/wenime/homepage.png',
        '/images/portofolio/webdevelopment/wenime/DetailAnime.png',
        '/images/portofolio/webdevelopment/wenime/animeList.png',
      ],
      platform: 'web',
    },
    {
      id: 'project-6',
      title: 'Healthcare App Design',
      description:
        'Mobile UI/UX for healthcare — hospital search, doctor consultation, messaging, notifications, and booking.',
      category: 'ui_ux',
      image: '/images/portofolio/uiux/healthcare/bg-wallpaper.png',
      technologies: ['Figma'],
      figma:
        'https://www.figma.com/design/1ZFCzFOG7TcQPh5knh4Cha/Health-Care-Design-App?node-id=0-1&p=f&t=iazweqrCOarjeTeQ-0',
      gallery: [
        '/images/portofolio/uiux/healthcare/Beranda.png',
        '/images/portofolio/uiux/healthcare/Hospitals.png',
        '/images/portofolio/uiux/healthcare/profile.png',
      ],
      platform: 'mobile',
    },
    {
      id: 'project-7',
      title: 'Sayuranku App Design',
      description:
        'Mobile e-commerce UI for fresh produce — product catalog, cart, checkout, order tracking, and profile.',
      category: 'ui_ux',
      image: '/images/portofolio/uiux/sayuranku/bg-wallpaper.jpg',
      technologies: ['Figma'],
      figma:
        'https://www.figma.com/design/wtbsVIpntuViOUJ2xJNI3I/Untitled?node-id=0-1&p=f&t=u1ztWLLxrjWFL27F-0',
      gallery: [
        '/images/portofolio/uiux/sayuranku/detail_pesanan_page.png',
        '/images/portofolio/uiux/sayuranku/detail_page.png',
        '/images/portofolio/uiux/sayuranku/product_page.png',
      ],
      platform: 'mobile',
    },
    {
      id: 'project-8',
      title: 'Petstore App Design',
      description:
        'Nekostore — pet supply e-commerce with product catalog, cart, checkout, order history, and user profile.',
      category: 'ui_ux',
      image: '/images/portofolio/uiux/petshop/bg-wallpaper.png',
      technologies: ['Figma'],
      figma:
        'https://www.figma.com/design/ozqlWPX4Crh7iYv2cIyAwd/Remedial_Yusnita?node-id=0-1&p=f&t=4OqGNc3EBD1Q2QDv-0',
      gallery: [
        '/images/portofolio/uiux/petshop/detail_page.png',
        '/images/portofolio/uiux/petshop/landing_page.png',
        '/images/portofolio/uiux/petshop/order_page.png',
      ],
      platform: 'mobile',
    },
  ];

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: t('portfolio.filters.all') },
    { key: 'web_developer', label: t('portfolio.filters.web_developer') },
    { key: 'ui_ux', label: t('portfolio.filters.ui_ux') },
    { key: 'mobile', label: t('portfolio.filters.mobile') },
    { key: 'documentation', label: t('portfolio.filters.documentation') },
  ];

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <section id="portfolio" ref={ref} className="relative w-full py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            {t('portfolio.title')}
          </h2>
          <p className="text-muted-foreground">{t('portfolio.subtitle')}</p>
        </motion.div>

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={cn(
                'relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 border',
                activeFilter === f.key
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                  : 'border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground bg-background/60 backdrop-blur-sm'
              )}
            >
              {activeFilter === f.key && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  style={{ zIndex: -1 }}
                  transition={{ type: 'spring', duration: 0.4 }}
                />
              )}
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <BentoGrid
              projects={filtered}
              onOpenProject={handleOpenProject}
              t={t}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal — unchanged */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 grid gap-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.image || '/placeholder.svg'}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid gap-2">
                  <h3 className="text-lg font-semibold">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  <h3 className="text-lg font-semibold">Gallery</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {selectedProject.gallery.map((img, index) => (
                      <div
                        key={index}
                        className="relative aspect-video w-full overflow-hidden rounded-lg"
                      >
                        <Image
                          src={img || '/placeholder.svg'}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          fill
                          className={
                            selectedProject.platform === 'mobile'
                              ? 'object-contain'
                              : 'object-cover'
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {selectedProject.link && (
                    <Button asChild>
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t('portfolio.visit_site')}
                      </a>
                    </Button>
                  )}
                  {selectedProject.github && (
                    <Button variant="outline" asChild>
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        {t('portfolio.view_code')}
                      </a>
                    </Button>
                  )}
                  {selectedProject.figma && (
                    <Button
                      variant="ghost"
                      className="bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] text-white hover:opacity-90 transition-all"
                      asChild
                    >
                      <a
                        href={selectedProject.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Figma className="mr-2 h-4 w-4" />
                        {t('portfolio.view_design')}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Bento Grid
───────────────────────────────────────────── */

interface BentoGridProps {
  projects: Project[];
  onOpenProject: (p: Project) => void;
  t: (key: string) => string;
}

function BentoGrid({ projects, onOpenProject, t }: BentoGridProps) {
  if (projects.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center text-muted-foreground">
        No projects in this category yet.
      </div>
    );
  }

  // Determine card sizes:
  // index 0 → featured (large), indexes 1-2 → medium, rest → compact
  const getSize = (index: number): 'large' | 'medium' | 'compact' => {
    if (index === 0) return 'large';
    if (index <= 2) return 'medium';
    return 'compact';
  };

  return (
    <>
      {/* Desktop: Bento Grid */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[180px]">
        {projects.map((project, index) => {
          const size = getSize(index);
          return (
            <BentoCard
              key={project.id}
              project={project}
              size={size}
              index={index}
              onOpen={onOpenProject}
              t={t}
            />
          );
        })}
      </div>

      {/* Mobile: Horizontal snap scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="flex-shrink-0 w-[78vw] snap-start"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <MobileCard project={project} onOpen={onOpenProject} t={t} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   Bento Card (Desktop)
───────────────────────────────────────────── */

interface BentoCardProps {
  project: Project;
  size: 'large' | 'medium' | 'compact';
  index: number;
  onOpen: (p: Project) => void;
  t: (key: string) => string;
}

function BentoCard({ project, size, index, onOpen, t }: BentoCardProps) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const colSpan = size === 'large' ? 'md:col-span-2 lg:col-span-2' : 'col-span-1';
  const rowSpan =
    size === 'large'
      ? 'row-span-2'
      : size === 'medium'
      ? 'row-span-2'
      : 'row-span-1';

  return (
    <motion.div
      ref={ref}
      className={cn(colSpan, rowSpan, 'relative group cursor-pointer')}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(project)}
      whileHover={{ scale: 1.012 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Card */}
      <div
        className={cn(
          'relative h-full w-full overflow-hidden rounded-2xl border transition-all duration-400',
          'border-white/8 bg-card/60 backdrop-blur-sm',
          hovered
            ? 'border-primary/50 shadow-xl shadow-primary/15'
            : 'border-border/30 shadow-md shadow-black/10'
        )}
      >
        {/* Gradient border glow on hover */}
        {hovered && (
          <div className="absolute inset-0 rounded-2xl pointer-events-none z-0">
            <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-primary/40 via-purple-500/20 to-transparent opacity-60" />
          </div>
        )}

        {/* Image — fills entire card */}
        <div className="absolute inset-0">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={cn(
              'object-cover transition-transform duration-500',
              hovered ? 'scale-105' : 'scale-100'
            )}
            loading="lazy"
          />
        </div>

        {/* Always-visible bottom gradient + info */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 pt-8 pb-4">
            {/* Category tag */}
            <div className="mb-1.5">
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm',
                  CATEGORY_COLORS[project.category] ?? 'bg-white/10 text-white border-white/20'
                )}
              >
                <span className={cn('h-1.5 w-1.5 rounded-full', CATEGORY_DOT[project.category])} />
                {t(`portfolio.filters.${project.category}`)}
              </span>
            </div>

            {/* Title */}
            <h3
              className={cn(
                'font-bold text-white leading-tight',
                size === 'large' ? 'text-xl' : size === 'medium' ? 'text-base' : 'text-sm'
              )}
            >
              {project.title}
            </h3>

            {/* Description — 1 line, truncated (hidden in compact) */}
            <p className="mt-0.5 text-xs text-white/70 line-clamp-1">
              {project.description}
            </p>
          </div>
        </div>

        {/* Hover overlay — "View Project" button */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
          <div className="relative z-10">
            <button
              className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition-transform hover:scale-105"
            >
              <ArrowUpRight className="h-4 w-4" />
              {t('portfolio.view_project')}
            </button>
          </div>
        </motion.div>

        {/* Tech stack pills — visible on hover, large/medium only */}
        {size !== 'compact' && hovered && (
          <motion.div
            className="absolute top-3 right-3 z-20 flex flex-wrap justify-end gap-1 max-w-[60%]"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-black/60 border border-white/10 px-2 py-0.5 text-[10px] text-white/80 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Mobile Card (Horizontal scroll)
───────────────────────────────────────────── */

interface MobileCardProps {
  project: Project;
  onOpen: (p: Project) => void;
  t: (key: string) => string;
}

function MobileCard({ project, onOpen, t }: MobileCardProps) {
  return (
    <div
      className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-border/30 cursor-pointer active:scale-95 transition-transform"
      onClick={() => onOpen(project)}
    >
      <Image
        src={project.image || '/placeholder.svg'}
        alt={project.title}
        fill
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 pt-8 pb-4">
        <span
          className={cn(
            'mb-1.5 inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm',
            CATEGORY_COLORS[project.category] ?? 'bg-white/10 text-white border-white/20'
          )}
        >
          <span className={cn('h-1.5 w-1.5 rounded-full', CATEGORY_DOT[project.category])} />
          {t(`portfolio.filters.${project.category}`)}
        </span>
        <h3 className="text-sm font-bold text-white leading-tight">{project.title}</h3>
        <p className="mt-0.5 text-xs text-white/60 line-clamp-1">{project.description}</p>
      </div>
    </div>
  );
}
