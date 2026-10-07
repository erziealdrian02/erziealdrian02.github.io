"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { certificates } from "@/lib/certificate-data";

export default function CertificateSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section
      id="certificates"
      ref={ref}
      className="relative w-full py-20 md:min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-16"
        >
          <h2 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            {t("certificates.title")}
          </h2>
          <p className="text-muted-foreground">{t("certificates.subtitle")}</p>
        </motion.div>

        <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="w-[80vw] flex-shrink-0 snap-start sm:w-auto"
            >
              <Card className="h-full overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
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
                      {t("certificates.view_certificate")}
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
