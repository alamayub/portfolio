import { About } from '../components/About';
import { GithubStats } from '../components/GithubStats';
import { Section } from '../components/ui';
import { SEO } from '../components/SEO';

export function AboutPage() {
  return (
    <div className="py-8 space-y-16">
      <SEO 
        title="About Me & Engineering Principles"
        description="Learn about Ayub Alam's engineering philosophy, 5+ years of software architecture, team leadership metrics, and GitHub activity."
      />
      <About />
      <Section id="github" className="pt-0">
        <GithubStats />
      </Section>
    </div>
  );
}
