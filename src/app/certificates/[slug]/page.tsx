'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Printer } from 'lucide-react';
import Image from 'next/image';

export default function CertificatePage() {
  const params = useParams();
  const router = useRouter();
  const [certificate, setCertificate] = useState<{
    title: string;
    issuer: string;
    date: string;
    image: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch the certificate data from an API
    // For this example, we'll simulate a fetch with setTimeout
    const slug = params.slug ?? 'default-slug';

    setTimeout(() => {
      // Mock data based on the slug
      const mockCertificate = {
        title: slug
          .toString()
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        issuer: 'Certificate Issuer',
        date: '2022',
        image: '/placeholder.svg?height=800&width=1200',
      };

      setCertificate(mockCertificate);
      setLoading(false);
    }, 500);
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
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
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
            <Image
              src={certificate.image || '/placeholder.svg'}
              alt={certificate.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : (
        <div className="flex h-[60vh] flex-col items-center justify-center">
          <h2 className="mb-4 text-2xl font-bold">Certificate Not Found</h2>
          <p className="mb-6 text-muted-foreground">
            The certificate you are looking for does not exist.
          </p>
          <Button onClick={() => router.push('/#certificates')}>
            View All Certificates
          </Button>
        </div>
      )}
    </div>
  );
}
