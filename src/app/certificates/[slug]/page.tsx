"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Printer, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getCertificateBySlug, Certificate } from "@/lib/certificate-data";

export default function CertificatePage() {
  const params = useParams();
  const router = useRouter();
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the slug from params
    const slug = params.slug as string;

    if (!slug) {
      setLoading(false);
      return;
    }

    // Get certificate data from our shared store
    const certData = getCertificateBySlug(slug);

    if (certData) {
      setCertificate(certData);
    }

    setLoading(false);
  }, [params.slug]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto min-h-screen px-4 py-20 sm:px-6">
      <div className="mb-8 flex items-center justify-between">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="flex gap-2 print:hidden">
          {/* <Button variant="outline" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button> */}
        </div>
      </div>

      {loading ? (
        <div className="flex h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      ) : certificate ? (
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <h1 className="mb-2 text-3xl font-bold">{certificate.title}</h1>
            <p className="text-muted-foreground">
              Issued by {certificate.issuer} • {certificate.date}
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border shadow-lg">
            <Link
              target="_blank"
              href="https://www.dicoding.com/certificates/GRX5OJGOVP0M"
            >
              <Image
                src={certificate.image || "/placeholder.svg"}
                alt={certificate.title}
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex h-[60vh] flex-col items-center justify-center">
          <h2 className="mb-4 text-2xl font-bold">Certificate Not Found</h2>
          <p className="mb-6 text-muted-foreground">
            The certificate you are looking for does not exist.
          </p>
          <Button onClick={() => router.push("/#certificates")}>
            View All Certificates
          </Button>
        </div>
      )}
    </div>
  );
}
