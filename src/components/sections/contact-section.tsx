'use client';

import type React from 'react';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Github, Instagram, Linkedin, MessageSquare, Send } from 'lucide-react';
import { SpotlightBackground } from '@/components/ui/spotlight-background';

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real application, you would send the form data to an API
    // For this example, we'll just show a success toast
    toast({
      title: t('contact.success'),
      description: "I'll get back to you as soon as possible.",
    });

    // Reset the form
    formRef.current?.reset();
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://linkedin.com/in/username',
      color: 'bg-[#0077B5] hover:bg-[#0077B5]/80',
    },
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/username',
      color: 'bg-[#333] hover:bg-[#333]/80',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      url: 'https://instagram.com/username',
      color:
        'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90',
    },
    {
      name: 'Discord',
      icon: <MessageSquare className="h-5 w-5" />,
      url: 'https://discord.com/users/username',
      color: 'bg-[#5865F2] hover:bg-[#5865F2]/80',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden py-20"
    >
      <SpotlightBackground />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold">Let's Connect</h3>
              <p className="mb-8 text-muted-foreground">
                Feel free to reach out to me for any questions, opportunities,
                or just to say hello. I&apos;ll get back to you as soon as
                possible.
              </p>

              <div className="mb-8 grid gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:erzie.aldrian02@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      erzie.aldrian02@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold">Follow Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110',
                      link.color
                    )}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-lg border bg-background/80 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-2xl font-bold">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  {t('contact.form.name')}
                </label>
                <Input id="name" name="name" required disabled={isSubmitting} />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  {t('contact.form.email')}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  {t('contact.form.message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t('contact.form.send')}
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
