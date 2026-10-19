import { TechStack } from '../components/TechStack';
import { SEO } from '../components/SEO';

export function SkillsPage() {
  return (
    <div className="py-8">
      <SEO 
        title="Technical Arsenal & Skills"
        description="Explore Ayub Alam's technical skills across Flutter, React 19, Tauri, Node.js, WebSockets, SQLite, Cloud Databases, and AI Engineering."
      />
      <TechStack />
    </div>
  );
}
