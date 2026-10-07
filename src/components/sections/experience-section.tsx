'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { ParallaxOrb } from '@/components/ui/parallax';

type Experience = {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'education';
  logo: string;
  details: string;
  images?: string[];
};

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const [open, setOpen] = useState(false);

  const experiences: Experience[] = [
    {
      id: 'exp-0',
      title: 'Fullstack Developer',
      organization: 'PT DCI Indonesia',
      period: '2025 - Present',
      description:
        'Building and maintaining internal web platforms that support data center operations - admin dashboards, a visitor management system, an HSE portal, and API services - from database and REST APIs to polished, responsive UI.',
      type: 'work',
      logo: '/images/company/dci.png',
      details:
        'As a Fullstack Developer at PT DCI Indonesia, I build and maintain internal web applications that support the company’s data center operations. I work across the whole stack - designing database schemas and REST APIs, building responsive admin interfaces, and shipping features end-to-end together with the team.\n\nProjects I have worked on:\n- FUSI Admin - an internal admin dashboard together with its backend API service.\n- New VMS - a revamped Visitor Management System with a refreshed, consistent theme.\n- Portal HSE - a Health, Safety & Environment portal, including a UI revamp aligned with the new VMS theme.\n- API Management - a service for organizing and managing internal APIs.\n- Customer database and company page UI templates.\n\nKey Responsibilities:\n- Develop features end-to-end, from database design and REST APIs to the frontend UI.\n- Build reusable UI components and keep a unified design system across internal applications.\n- Revamp legacy interfaces into modern, responsive layouts.\n- Collaborate through Git-based workflows, code reviews, and feedback sessions with users.\n- Debug, optimize, and maintain applications running in production.',
      images: [
        '/images/company/photo-dci/dci1.webp',
      ],
    },
    {
      id: 'exp-1',
      title: 'Automation Tester',
      organization: 'PT Bank Mandiri (Persero) Tbk.',
      period: '2025 - Present',
      description:
        'Performed API performance testing using Apache JMeter on Livin by Mandiri application. Collaborated with QA teams to execute and analyze test results, generate reports, and contribute to system stability under load conditions.',
      type: 'work',
      logo: '/images/company/mandiri.png',
      details:
        'As a Junior Automation Tester at PT Bank Mandiri, I was assigned to the QA team for the Livin by Mandiri application. My primary responsibility was to execute automated performance and functional testing for API endpoints using Apache JMeter.\n\nI created and maintained test scripts to simulate user traffic under various load scenarios, including stress and endurance testing. I also collaborated closely with backend engineers and DevOps to integrate test cases into the CI/CD pipeline and ensure consistent application behavior under production-like conditions.\n\nTest executions were followed by detailed analysis of TPS, latency, error rates, and memory usage. I compiled technical reports and dashboards summarizing test results, performance issues, and optimization recommendations, which were then presented to development teams and stakeholders.\n\nKey Responsibilities:\n- Designed and executed automated API tests using Apache JMeter.\n- Collaborated with QA and DevOps teams to integrate tests into CI/CD workflows.\n- Monitored test results and system performance using built-in JMeter listeners and Grafana.\n- Generated reports summarizing test metrics and suggested improvements.\n- Participated in test planning and documentation of test cases and SOPs.\n- Contributed to ensuring the performance reliability of the Livin mobile banking app.',
      images: [
        '/images/company/photo-mandiri/mandiri1.webp',
        '/images/company/photo-mandiri/mandiri2.webp',
        '/images/company/photo-mandiri/mandiri3.webp',
        '/images/company/photo-mandiri/mandiri4.webp',
      ],
    },
    {
      id: 'exp-2',
      title: 'Full Stack Developer Intern',
      organization: 'KPN Corp.',
      period: '2024 - 2025',
      description:
        'Assisted the development team in building the company’s internal web applications using Object-Oriented Programming standards. Collaborated through GitHub, ensured timely project delivery, presented results to users, and applied necessary revisions.',
      type: 'work',
      logo: '/images/company/kpn-ano.jpg',
      details:
        'As a Full Stack Developer Intern, I was responsible for assisting the development of the company’s internal ERP system, focusing on building robust and scalable web applications using Object-Oriented Programming (OOP) principles. I collaborated closely with the team via GitHub for version control and code collaboration to ensure efficient and streamlined workflows. \n\nOne of the main projects I worked on was the development of the Human Capital Information System (HCIS), which is part of the company’s ERP suite. This project involved handling employee management modules, leave and reimbursement systems, approval workflows, and automated notifications. Throughout the project, I actively contributed to both frontend and backend development and ensured data consistency across multiple systems. \n\nIn addition to development, I was also involved in documenting the system architecture, user guides, and deployment steps to maintain clear and accessible project documentation for future use. I worked directly with end-users to demonstrate the applications, gather feedback, and make necessary adjustments based on their input. \n\nKey Responsibilities:\n- Developed internal web-based ERP systems using OOP-based PHP (Laravel).\n- Collaborated with the team using GitHub for version control and code integration.\n- Built and maintained core modules such as employee records, approval workflows, leave requests, reimbursements, and more.\n- Presented application demos to stakeholders and revised functionalities based on user feedback.\n- Documented the development process, including technical guides, module breakdowns, and user manuals.\n- Participated in planning and debugging sessions to ensure smooth and efficient system performance.',
      images: [
        '/images/company/photo-kpn/kpn1.webp',
        '/images/company/photo-kpn/kpn2.webp',
        '/images/company/photo-kpn/kpn3.webp',
        '/images/company/photo-kpn/kpn4.webp',
      ],
    },
    {
      id: 'exp-3',
      title: 'Bachelor of Informatics Engineering',
      organization: 'Universitas Indraprasta PGRI',
      period: '2020 - 2024',
      description:
        'Graduated on time in November 2024 with a strong foundation in software development, databases, and system analysis.',
      type: 'education',
      logo: '/images/academy/unindra.jpg',
      details:
        "I completed my Bachelor's degree in Computer Science at Universitas Indraprasta PGRI, specializing in Teknik Informatika. During my studies, I gained a strong foundation in programming, algorithms, data structures, and software engineering principles. \n\nKey Achievements:\n- Graduated with a GPA of 3.39\n- Completed a final project on developing a machine learning for detection weather in indonesia\n- Participate in various trainings bootcamp and seminars",
      images: [
        '/images/academy/photo-unindra/un1.webp',
        '/images/academy/photo-unindra/un2.webp',
        '/images/academy/photo-unindra/un3.webp',
      ],
    },
    {
      id: 'exp-4',
      title: 'Web Developer Intern',
      organization: 'Daun Biru',
      period: '2018 - 2019',
      description:
        'Gained hands-on experience in web development by working on internal company projects using the CodeIgniter framework, while also earning a certificate of competence and enhancing practical programming skills.',
      type: 'work',
      logo: '/images/company/daunbiru.jpeg',
      details:
        'As a participant in a professional training program, I was assigned to work on the company’s internal web-based systems using the CodeIgniter framework. This opportunity allowed me to gain valuable hands-on experience in full stack web development and significantly improve my practical programming skills.\n\nDuring the program, I contributed to the development of a company project called Suportivo, which serves as a centralized platform for internal task management, user access control, and operational tracking. I was actively involved in both frontend and backend development processes, ensuring seamless integration and performance.\n\nIn addition to development tasks, I documented the entire workflow and system features - including technical architecture, module descriptions, and user instructions - to support future scalability and maintenance. I collaborated with mentors and team members for regular code reviews and participated in discussions to enhance system functionality.\n\nKey Responsibilities:\n- Developed modules for the internal company system using PHP and the CodeIgniter framework.\n- Participated in frontend and backend coding, debugging, and system integration.\n- Delivered a working prototype for a company-use application (Suportivo).\n- Maintained source code on GitHub and followed version control best practices.',
      images: [
        // "/placeholder.svg?height=400&width=600",
        // "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 'edu-5',
      title: 'Software Engineering',
      organization: 'SMK Fatahillah',
      period: '2017 - 2020',
      description:
        'Focused on software development and computer science fundamentals.',
      type: 'education',
      logo: '/images/academy/fatahillah.png',
      details:
        'I studied Software Engineering at SMK Fatahillah, where I gained practical skills in programming, web development, and database management. The vocational program provided me with hands-on experience and prepared me for a career in the tech industry.\n\nKey Achievements:\n- Completed various software development projects\n- Participated in regional programming competitions\n- Internship at a local software company\n- Developed a library management system as a final project',
      images: [
        '/images/academy/photo-fatahillah/fat1.webp',
        '/images/academy/photo-fatahillah/fat2.webp',
        '/images/academy/photo-fatahillah/fat3.webp',
      ],
    },
  ];

  const handleOpenExperience = (experience: Experience) => {
    setSelectedExperience(experience);
    setOpen(true);
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-muted/30 py-20"
    >
      <ParallaxOrb className="-left-40 top-20 h-[32rem] w-[32rem]" distance={160} />
      <ParallaxOrb
        className="-right-40 bottom-10 h-[36rem] w-[36rem]"
        color="59 130 246"
        distance={-140}
      />
      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            {t('experience.title')}
          </h2>
          <p className="text-muted-foreground">{t('experience.subtitle')}</p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mx-auto mb-8 flex w-full max-w-md justify-center gap-1 sm:gap-2">
            <TabsTrigger value="all" className="flex-1 px-2 text-xs sm:text-sm">All</TabsTrigger>
            <TabsTrigger value="work" className="flex-1 px-2 text-xs sm:text-sm">
              <Briefcase className="mr-1.5 h-4 w-4 flex-shrink-0" />
              {t('experience.work')}
            </TabsTrigger>
            <TabsTrigger value="education" className="flex-1 px-2 text-xs sm:text-sm">
              <GraduationCap className="mr-1.5 h-4 w-4 flex-shrink-0" />
              {t('experience.education')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <Timeline
              experiences={experiences}
              onOpenExperience={handleOpenExperience}
            />
          </TabsContent>

          <TabsContent value="work" className="mt-0">
            <Timeline
              experiences={experiences.filter((exp) => exp.type === 'work')}
              onOpenExperience={handleOpenExperience}
            />
          </TabsContent>

          <TabsContent value="education" className="mt-0">
            <Timeline
              experiences={experiences.filter(
                (exp) => exp.type === 'education'
              )}
              onOpenExperience={handleOpenExperience}
            />
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
          {selectedExperience && (
            <>
              <DialogHeader>
                <DialogTitle className="pr-6 text-xl sm:text-2xl">
                  {selectedExperience.title}
                </DialogTitle>
                <DialogDescription className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium">
                    {selectedExperience.organization}
                  </span>
                  <span className="text-muted-foreground">|</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {selectedExperience.period}
                  </span>
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 grid gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border bg-white">
                    <Image
                      src={selectedExperience.logo || '/placeholder.svg'}
                      alt={selectedExperience.organization}
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {selectedExperience.organization}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedExperience.period}
                    </p>
                  </div>
                </div>

                <div className="grid gap-2">
                  <h3 className="text-lg font-semibold">About</h3>
                  <div className="whitespace-pre-line text-sm text-muted-foreground sm:text-base">
                    {selectedExperience.details}
                  </div>
                </div>

                {selectedExperience.images &&
                  selectedExperience.images.length > 0 && (
                    <div className="grid gap-2">
                      <h3 className="text-lg font-semibold">Gallery</h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {selectedExperience.images.map((img, index) => (
                          <div
                            key={index}
                            className="relative aspect-video w-full overflow-hidden rounded-lg"
                          >
                            <Image
                              src={img || '/placeholder.svg'}
                              alt={`${selectedExperience.title} image ${
                                index + 1
                              }`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

interface TimelineProps {
  experiences: Experience[];
  onOpenExperience: (experience: Experience) => void;
}

function Timeline({ experiences, onOpenExperience }: TimelineProps) {
  const { t } = useTranslation();

  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Mobile: line on the left. Desktop: centered, alternating cards. */}
      <div className="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />

      <div className="space-y-6 md:space-y-12">
        {experiences.map((experience, index) => {
          const isCurrent = /present/i.test(experience.period);
          const isLeft = index % 2 === 1;
          return (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative flex"
            >
              <div
                className={cn(
                  'absolute left-0 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border bg-background md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2',
                  isCurrent && 'border-primary shadow-[0_0_0_4px_rgb(var(--primary-rgb)/0.15)]'
                )}
              >
                {isCurrent && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                )}
                {experience.type === 'work' ? (
                  <Briefcase className="h-5 w-5 text-primary" />
                ) : (
                  <GraduationCap className="h-5 w-5 text-primary" />
                )}
              </div>

              <Card
                className={cn(
                  'ml-14 w-full transition-colors hover:border-primary/40 md:ml-0 md:w-[calc(50%-2.5rem)]',
                  isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                )}
              >
                <CardContent className="p-4 sm:p-6">
                  <div
                    className={cn(
                      'mb-3 flex items-center gap-3',
                      isLeft && 'md:flex-row-reverse'
                    )}
                  >
                    <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl border bg-white">
                      <Image
                        src={experience.logo || '/placeholder.svg'}
                        alt={experience.organization}
                        fill
                        sizes="44px"
                        className="object-contain p-0.5"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold leading-tight sm:text-xl">
                        {experience.title}
                      </h3>
                      <p className="truncate text-sm text-muted-foreground">
                        {experience.organization}
                      </p>
                    </div>
                  </div>
                  <div
                    className={cn(
                      'mb-3 flex flex-wrap items-center gap-2',
                      isLeft && 'md:justify-end'
                    )}
                  >
                    <div className="flex items-center gap-1 whitespace-nowrap rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <Calendar className="h-3 w-3" />
                      <span>{experience.period}</span>
                    </div>
                    {isCurrent && (
                      <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        {t('experience.present')}
                      </span>
                    )}
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground sm:text-base">
                    {experience.description}
                  </p>
                  <Button
                    onClick={() => onOpenExperience(experience)}
                    variant="outline"
                    size="sm"
                  >
                    {t('experience.view_details')}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
