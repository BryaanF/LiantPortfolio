import React, {useContext} from "react";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import {motion} from "framer-motion";
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
      {/* Container Judul Utama */}
      <div className="mb-16 flex flex-col items-center">
        <motion.div
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="flex flex-col items-center gap-2"
        >
          {/* Icon diletakkan di atas Judul atau di sampingnya secara inline */}
          <span className="text-4xl md:text-5xl lg:text-6xl mb-2">🎓</span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight text-center">
            {getTranslation(educationInfo.title, lang)}
          </h1>

          {/* Dekorasi Garis bawah yang menempel pada container judul */}
          <motion.div
            initial={{width: 0}}
            whileInView={{width: "80px"}}
            className="h-1 bg-[var(--btn-primary-bg)] mt-4 rounded-full opacity-60"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {educationInfo.schools.map((school, index) => (
          <EducationCard key={index} school={school} />
        ))}
      </div>
    </section>
  );
}
