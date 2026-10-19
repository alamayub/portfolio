import { Education } from '../components/Education';
import { SEO } from '../components/SEO';

export function EducationPage() {
  return (
    <div className="py-8">
      <SEO 
        title="Academic Base & Certifications"
        description="Formal computer science education (B.Tech from Lovely Professional University), professional certifications, and active learning specializations."
      />
      <Education />
    </div>
  );
}
