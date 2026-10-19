import { Projects } from '../components/Projects';
import { SEO } from '../components/SEO';

export function ProjectsPage() {
  return (
    <div className="py-8">
      <SEO 
        title="Featured Works & Case Studies"
        description="Browse featured software engineering projects by Ayub Alam, including StockForge POS, Ulipsu Learning App, LinkWise AI, Pulkiss WebRTC, and more."
      />
      <Projects />
    </div>
  );
}
