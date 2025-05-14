export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
  slug: string;
};

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding",
    date: "2024",
    image: "/images/certificates/MachineLearning.png",
    link: "https://www.dicoding.com/certificates/GRX5OJGOVP0M",
    slug: "machine-learning-untuk-pemula",
  },
  {
    id: "cert-2",
    title: "Menjadi Front-End Web Developer Expert",
    issuer: "Dicoding",
    date: "2023",
    image: "/images/certificates/MachineLearning.png",
    link: "https://www.dicoding.com/certificates/N9ZO69L68XG5",
    slug: "front-end-web-developer-expert",
  },
  {
    id: "cert-3",
    title: "Belajar Dasar Git dan GitHub",
    issuer: "Dicoding",
    date: "2023",
    image: "/images/certificates/GitHub.png",
    link: "https://www.dicoding.com/certificates/MRZMQYOKLPYQ",
    slug: "git-and-github",
  },
  {
    id: "cert-4",
    title: "Merancang Ui/UX Website bagi Desainer Pemula",
    issuer: "Kartu Prakerja",
    date: "2024",
    image: "/images/certificates/UIUX.png",
    // link: "/certificates/mobile-app-development",
    link: "https://app.karier.mu/sertifikat/cHJvZ3JhbV91c2VyLTEyNDIxNjY0?prakerja",
    slug: "ui-ux",
  },
  {
    id: "cert-5",
    title: "Mempelajari Taktik Komunikasi untuk Berbicara Publik",
    issuer: "Kartu Prakerja",
    date: "2024",
    image: "/images/certificates/Hubungan.png",
    link: "https://app.karier.mu/sertifikat/cHJvZ3JhbV91c2VyLTEyMTI5NDIx?prakerja",
    slug: "taktik-komunikasi",
  },
  {
    id: "cert-6",
    title: "Belajar Pengembangan Aplikasi Flutter untuk Intermediate",
    issuer: "Dicoding",
    date: "2023",
    image: "/images/certificates/FlutterIntermediate.png",
    link: "https://www.dicoding.com/certificates/4EXGKY72DZRL",
    slug: "flutter-intermediate",
  },
];

export function getCertificateBySlug(slug: string): Certificate | undefined {
  return certificates.find((cert) => cert.slug === slug);
}
