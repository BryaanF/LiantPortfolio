import EducationCard from "../../components/education-card/EducationCard";
import SectionHeader from "../../components/section-header/SectionHeader";
import {educationInfo} from "../../data";
import {useTranslation} from "../../hooks/useTranslation";

export default function Education() {
  const t = useTranslation();

  if (!educationInfo.display) return null;

  return (
    <section
      className="w-full max-w-7xl mx-auto py-16 px-6 md:px-10 lg:py-24"
      id="education"
    >
      <SectionHeader title={t(educationInfo.title)} emoji="🎓" />

      <div className="grid grid-cols-1 gap-10">
        {educationInfo.schools.map(school => (
          <EducationCard key={school.schoolName} school={school} />
        ))}
      </div>
    </section>
  );
}
