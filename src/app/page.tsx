import HeroSection from '@/components/sections/hero-section';
import ToolsSection from '@/components/sections/tools-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import ExperienceSection from '@/components/sections/experience-section';
import CertificateSection from '@/components/sections/certificate-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/footer';
import { ScrollToTopButton } from '@/components/scroll-to-top';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ToolsSection />
      <PortfolioSection />
      <ExperienceSection />
      <CertificateSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
