'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
};

export default function CertificateSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();

  const certificates: Certificate[] = [
    {
      id: 'cert-1',
      title: 'Front-End Web Development',
      issuer: 'Dicoding',
      date: '2022',
      image: '/placeholder.svg?height=400&width=600',
      link: '/certificates/front-end-web-development',
    },
    {
      id: 'cert-2',
      title: 'React.js Fundamentals',
      issuer: 'MySkill',
      date: '2021',
      image: '/placeholder.svg?height=400&width=600',
      link: '/certificates/react-js-fundamentals',
    },
    {
      id: 'cert-3',
      title: 'UI/UX Design Principles',
      issuer: 'Coursera',
      date: '2021',
      image: '/placeholder.svg?height=400&width=600',
      link: '/certificates/ui-ux-design-principles',
    },
    {
      id: 'cert-4',
      title: 'Mobile App Development',
      issuer: 'Udemy',
      date: '2020',
      image: '/placeholder.svg?height=400&width=600',
      link: '/certificates/mobile-app-development',
    },
    {
      id: 'cert-5',
      title: 'Database Management',
      issuer: 'Dicoding',
      date: '2020',
      image: '/placeholder.svg?height=400&width=600',
      link: '/certificates/database-management',
    },
    {
      id: 'cert-6',
      title: 'Cloud Computing Basics',
      issuer: 'MySkill',
      date: '2019',
      image: '/placeholder.svg?height=400&width=600',
      link: '/certificates/cloud-computing-basics',
    },
  ];

  return (
    <section
      id="certificates"
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
            {t('certificates.title')}
          </h2>
          <p className="text-muted-foreground">{t('certificates.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={certificate.image || '/placeholder.svg'}
                    alt={certificate.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="mb-4">
                    <div className="mb-1 flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <h3 className="text-lg font-semibold">
                        {certificate.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        {certificate.issuer}
                      </p>
                      <p className="text-sm font-medium">{certificate.date}</p>
                    </div>
                  </div>
                  <Button variant="default" className="w-full" asChild>
                    <Link href={certificate.link}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t('certificates.view_certificate')}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
