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
        // '/placeholder.svg?height=400&width=600',
        // '/placeholder.svg?height=400&width=600',
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
        '/images/company/photo-kpn/kp1.jpg',
        '/images/company/photo-kpn/kp2.jpg',
        '/images/company/photo-kpn/kpn3.jpg',
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
        '/images/academy/photo-unindra/un1.jpg',
        '/images/academy/photo-unindra/un2.jpg',
        '/images/academy/photo-unindra/un3.jpg',
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
        'As a participant in a professional training program, I was assigned to work on the company’s internal web-based systems using the CodeIgniter framework. This opportunity allowed me to gain valuable hands-on experience in full stack web development and significantly improve my practical programming skills.\n\nDuring the program, I contributed to the development of a company project called Suportivo, which serves as a centralized platform for internal task management, user access control, and operational tracking. I was actively involved in both frontend and backend development processes, ensuring seamless integration and performance.\n\nIn addition to development tasks, I documented the entire workflow and system features — including technical architecture, module descriptions, and user instructions — to support future scalability and maintenance. I collaborated with mentors and team members for regular code reviews and participated in discussions to enhance system functionality.\n\nKey Responsibilities:\n- Developed modules for the internal company system using PHP and the CodeIgniter framework.\n- Participated in frontend and backend coding, debugging, and system integration.\n- Delivered a working prototype for a company-use application (Suportivo).\n- Maintained source code on GitHub and followed version control best practices.',
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
        '/images/academy/photo-fatahillah/fat1.jpg',
        '/images/academy/photo-fatahillah/fat2.jpg',
        '/images/academy/photo-fatahillah/fat3.jpg',
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
      className="relative min-h-screen w-full bg-muted/30 py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
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
          <TabsList className="mb-8 flex w-full justify-center gap-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="work">
              <Briefcase className="mr-2 h-4 w-4" />
              {t('experience.work')}
            </TabsTrigger>
            <TabsTrigger value="education">
              <GraduationCap className="mr-2 h-4 w-4" />
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
                <DialogTitle className="text-2xl">
                  {selectedExperience.title}
                </DialogTitle>
                <DialogDescription className="flex items-center gap-2">
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
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={selectedExperience.logo || '/placeholder.svg'}
                      alt={selectedExperience.organization}
                      fill
                      className="object-cover"
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
                  <div className="whitespace-pre-line text-muted-foreground">
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
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-border" />

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              'relative flex flex-col items-center md:flex-row',
              index % 2 === 0
                ? 'md:flex-row'
                : 'md:flex-row-reverse md:text-right'
            )}
          >
            <div
              className={cn(
                'absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full border bg-background md:relative md:left-auto md:translate-x-0',
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              )}
            >
              {experience.type === 'work' ? (
                <Briefcase className="h-5 w-5 text-primary" />
              ) : (
                <GraduationCap className="h-5 w-5 text-primary" />
              )}
            </div>

            <Card
              className={cn(
                'mt-5 w-full md:mt-0 md:w-[calc(50%-2rem)]',
                index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
              )}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {experience.organization}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 whitespace-nowrap rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Calendar className="h-3 w-3" />
                    <span>{experience.period}</span>
                  </div>
                </div>
                <p className="mb-4 text-muted-foreground">
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
        ))}
      </div>
    </div>
  );
}
