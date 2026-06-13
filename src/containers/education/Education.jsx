import React, {useContext} from "react";
import EducationCard from "../../components/educationCard/EducationCard";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {educationInfo} from "../../portfolio";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../utils/translations";

export default function Education() {
  const {lang} = useContext(LanguageContext);

  if (!educationInfo.display) return null;

  return (
    <section
      className="w-full max-w-7xl mx-auto py-16 px-6 md:px-10 lg:py-24"
      id="education"
    >
      <SectionHeader
        title={getTranslation(educationInfo.title, lang)}
        emoji="🎓"
      />

      <div className="grid grid-cols-1 gap-10">
        {educationInfo.schools.map((school, index) => (
          <EducationCard key={index} school={school} />
        ))}
      </div>
    </section>
  );
}
