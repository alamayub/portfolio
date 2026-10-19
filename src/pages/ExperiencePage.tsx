import { Experience } from '../components/Experience';
import { SEO } from '../components/SEO';

export function ExperiencePage() {
  return (
    <div className="py-8">
      <SEO 
        title="Professional Journey & Experience"
        description="Career history and engineering leadership achievements of Ayub Alam across Collective Artists Network, Kidvento Education, and Agram Infotech."
      />
      <Experience />
    </div>
  );
}
