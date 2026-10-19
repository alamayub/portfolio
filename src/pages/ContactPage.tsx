import { Contact, RoadmapSocial } from '../components/Footer';
import { SEO } from '../components/SEO';

export function ContactPage() {
  return (
    <div className="py-8 space-y-12">
      <SEO 
        title="Get In Touch & Consulting Services"
        description="Connect with Ayub Alam for software consulting, contract engineering, full-stack web/mobile application architecture, or collaborative ventures."
      />
      <Contact />
      <RoadmapSocial />
    </div>
  );
}
