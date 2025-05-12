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
      title: 'Full Stack Developer',
      organization: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description:
        'Developing and maintaining web applications using React, Node.js, and PostgreSQL.',
      type: 'work',
      logo: '/placeholder.svg?height=100&width=100',
      details:
        'As a Full Stack Developer at Tech Solutions Inc., I am responsible for designing, developing, and maintaining web applications for various clients. I work with a team of developers to create scalable and efficient solutions using modern technologies.\n\nKey Responsibilities:\n- Developing front-end applications using React and Next.js\n- Building back-end services with Node.js and Express\n- Database design and management with PostgreSQL\n- Implementing authentication and authorization systems\n- Collaborating with designers and product managers\n- Code reviews and mentoring junior developers',
      images: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
    },
    {
      id: 'exp-2',
      title: 'UI/UX Designer',
      organization: 'Creative Agency',
      period: '2019 - 2021',
      description:
        'Designed user interfaces and experiences for mobile and web applications.',
      type: 'work',
      logo: '/placeholder.svg?height=100&width=100',
      details:
        'As a UI/UX Designer at Creative Agency, I was responsible for creating user-centered designs for various digital products. I worked closely with clients to understand their needs and translate them into intuitive and visually appealing interfaces.\n\nKey Responsibilities:\n- Creating wireframes and prototypes using Figma and Adobe XD\n- Conducting user research and usability testing\n- Developing design systems and style guides\n- Collaborating with developers to ensure design implementation\n- Presenting design concepts to clients\n- Iterating designs based on feedback',
      images: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
    },
    {
      id: 'exp-3',
      title: 'Front-end Developer',
      organization: 'Web Studio',
      period: '2018 - 2019',
      description:
        'Developed responsive websites and web applications using HTML, CSS, and JavaScript.',
      type: 'work',
      logo: '/placeholder.svg?height=100&width=100',
      details:
        'As a Front-end Developer at Web Studio, I was responsible for implementing responsive and interactive user interfaces for websites and web applications. I worked with a team of designers and back-end developers to create seamless user experiences.\n\nKey Responsibilities:\n- Developing responsive websites using HTML, CSS, and JavaScript\n- Implementing designs from Figma and Adobe XD\n- Optimizing websites for performance and accessibility\n- Testing and debugging across different browsers and devices\n- Collaborating with back-end developers to integrate APIs\n- Implementing animations and interactive elements',
      images: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
    },
    {
      id: 'edu-1',
      title: 'Bachelor of Computer Science',
      organization: 'Universitas Indraprasta PGRI',
      period: '2014 - 2018',
      description: 'Teknik Informatika, GPA: 3.39',
      type: 'education',
      logo: '/placeholder.svg?height=100&width=100',
      details:
        "I completed my Bachelor's degree in Computer Science at Universitas Indraprasta PGRI, specializing in Teknik Informatika. During my studies, I gained a strong foundation in programming, algorithms, data structures, and software engineering principles.\n\nKey Achievements:\n- Graduated with a GPA of 3.39\n- Completed a final project on developing a mobile application for campus navigation\n- Participated in various coding competitions and hackathons\n- Served as a teaching assistant for Programming Fundamentals course\n- Member of the Computer Science Student Association",
      images: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
    },
    {
      id: 'edu-2',
      title: 'Software Engineering',
      organization: 'SMK Fatahillah',
      period: '2011 - 2014',
      description:
        'Focused on software development and computer science fundamentals.',
      type: 'education',
      logo: '/placeholder.svg?height=100&width=100',
      details:
        'I studied Software Engineering at SMK Fatahillah, where I gained practical skills in programming, web development, and database management. The vocational program provided me with hands-on experience and prepared me for a career in the tech industry.\n\nKey Achievements:\n- Completed various software development projects\n- Participated in regional programming competitions\n- Internship at a local software company\n- Developed a school management system as a final project\n- Graduated with honors',
      images: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
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
                  <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
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
