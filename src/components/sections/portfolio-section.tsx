'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

type Project = {
  id: string;
  title: string;
  description: string;
  category: 'ui_ux' | 'documentation' | 'programming' | 'mobile';
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  gallery: string[];
};

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'E-Commerce Dashboard',
      description:
        'A modern dashboard for e-commerce platforms with analytics and inventory management.',
      category: 'ui_ux',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['React', 'TailwindCSS', 'Chart.js'],
      link: 'https://example.com',
      github: 'https://github.com/example/project',
      gallery: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
    },
    {
      id: 'project-2',
      title: 'Mobile Banking App',
      description:
        'A secure and user-friendly mobile banking application with transaction history and bill payments.',
      category: 'mobile',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['React Native', 'Redux', 'Firebase'],
      gallery: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
    },
    {
      id: 'project-3',
      title: 'API Documentation',
      description:
        'Comprehensive documentation for a RESTful API with examples and use cases.',
      category: 'documentation',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['Swagger', 'Markdown', 'HTML/CSS'],
      link: 'https://example.com',
      gallery: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
    },
    {
      id: 'project-4',
      title: 'CRM System',
      description:
        'A customer relationship management system with lead tracking and sales analytics.',
      category: 'programming',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['Laravel', 'MySQL', 'Vue.js'],
      github: 'https://github.com/example/project',
      gallery: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
    },
    {
      id: 'project-5',
      title: 'Fitness Tracker App',
      description:
        'A mobile application for tracking workouts, nutrition, and progress.',
      category: 'mobile',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['Flutter', 'Firebase', 'Google Fit API'],
      gallery: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
    },
    {
      id: 'project-6',
      title: 'Travel Website Redesign',
      description:
        'A complete redesign of a travel booking website with improved user experience.',
      category: 'ui_ux',
      image: '/placeholder.svg?height=400&width=600',
      technologies: ['Figma', 'Adobe XD', 'Photoshop'],
      link: 'https://example.com',
      gallery: [
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
        '/placeholder.svg?height=400&width=600',
      ],
    },
  ];

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative min-h-screen w-full py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            {t('portfolio.title')}
          </h2>
          <p className="text-muted-foreground">{t('portfolio.subtitle')}</p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex w-full flex-wrap justify-center gap-2">
            <TabsTrigger value="all">{t('portfolio.filters.all')}</TabsTrigger>
            <TabsTrigger value="ui_ux">
              {t('portfolio.filters.ui_ux')}
            </TabsTrigger>
            <TabsTrigger value="documentation">
              {t('portfolio.filters.documentation')}
            </TabsTrigger>
            <TabsTrigger value="programming">
              {t('portfolio.filters.programming')}
            </TabsTrigger>
            <TabsTrigger value="mobile">
              {t('portfolio.filters.mobile')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <ProjectGrid
              projects={projects}
              onOpenProject={handleOpenProject}
            />
          </TabsContent>

          <TabsContent value="ui_ux" className="mt-0">
            <ProjectGrid
              projects={projects.filter((p) => p.category === 'ui_ux')}
              onOpenProject={handleOpenProject}
            />
          </TabsContent>

          <TabsContent value="documentation" className="mt-0">
            <ProjectGrid
              projects={projects.filter((p) => p.category === 'documentation')}
              onOpenProject={handleOpenProject}
            />
          </TabsContent>

          <TabsContent value="programming" className="mt-0">
            <ProjectGrid
              projects={projects.filter((p) => p.category === 'programming')}
              onOpenProject={handleOpenProject}
            />
          </TabsContent>

          <TabsContent value="mobile" className="mt-0">
            <ProjectGrid
              projects={projects.filter((p) => p.category === 'mobile')}
              onOpenProject={handleOpenProject}
            />
          </TabsContent>
        </Tabs>
      </div>

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
                          alt={`${selectedProject.title} screenshot ${
                            index + 1
                          }`}
                          fill
                          className="object-cover"
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
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

interface ProjectGridProps {
  projects: Project[];
  onOpenProject: (project: Project) => void;
}

function ProjectGrid({ projects, onOpenProject }: ProjectGridProps) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <Card className="overflow-hidden">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span
                  className={cn(
                    'rounded-full px-2 py-1 text-xs font-medium text-white bg-purple-500'
                    // {
                    //   'bg-purple-500': project.category === 'ui_ux',
                    //   'bg-blue-500': project.category === 'documentation',
                    //   'bg-green-500': project.category === 'programming',
                    //   'bg-orange-500': project.category === 'mobile',
                    // }
                  )}
                >
                  {t(`portfolio.filters.${project.category}`)}
                </span>
              </div>
              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                {project.description}
              </p>
              <Button
                onClick={() => onOpenProject(project)}
                variant="default"
                className="w-full"
              >
                {t('portfolio.view_project')}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
