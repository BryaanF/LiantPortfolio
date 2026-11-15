import {useState, lazy, Suspense, useContext} from "react";
import {motion} from "framer-motion";
import {bigProjects} from "../../data";
import SectionHeader from "../../components/section-header/SectionHeader";
import {useTranslation} from "../../hooks/useTranslation";
import LanguageContext from "../../contexts/LanguageContext";

const ProjectShowcase = lazy(() =>
  import("../../components/project-showcase/ProjectShowcase")
);

export default function BigProject() {
  const t = useTranslation();
  const {lang} = useContext(LanguageContext);
  const [showcaseData, setShowcaseData] = useState(null);

  if (!bigProjects.display) return null;

  const handleOpenShowcase = project => {
    const mediaGallery = (project.mediaGallery || []).map(m => ({
      ...m,
      caption: t(m.caption)
    }));
    setShowcaseData({
      title: project.projectName,
      description: t(project.projectDesc),
      media: mediaGallery,
      externalUrl: project.externalUrl || ""
    });
  };

  return (
    <>
      <section id="projects" className="py-12 px-5 md:py-20 md:px-8 bg-transparent">
        <div className="w-full max-w-[1200px] mx-auto">
          <SectionHeader
            title={t(bigProjects.title)}
            subtitle={t(bigProjects.subtitle)}
            emoji="🚀"
          />

          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {bigProjects.projects.map((project, i) => (
              <motion.div
                key={project.projectName}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: i * 0.1}}
                className="group flex flex-col h-full bg-[var(--bg-card)] border border-[var(--border-light)] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-brand-gold hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]"
              >
                {project.image && (
                  <div
                    className="relative w-full aspect-[16/10] lg:aspect-[1.85/1] overflow-hidden bg-[#1a1a1a] cursor-pointer"
                    onClick={() => handleOpenShowcase(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] block"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-transparent" />
                  </div>
                )}

                <div className="p-5 md:p-7 flex flex-col flex-grow">
                  <div className="mb-6 flex-grow">
                    <h5 className="text-xl md:text-[1.4rem] font-bold mb-2.5 text-[var(--text-primary)]">
                      {project.projectName}
                    </h5>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)] opacity-90">
                      {t(project.projectDesc)}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    <button
                      onClick={() => handleOpenShowcase(project)}
                      className="px-3.5 py-1.5 bg-[var(--btn-primary-bg)] text-white rounded-full text-[0.7rem] font-semibold border border-transparent transition-all duration-200 hover:brightness-125 hover:border-brand-gold cursor-pointer"
                    >
                      View {lang === "id" ? "Proyek" : "Project"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {showcaseData && (
        <Suspense fallback={null}>
          <ProjectShowcase
            title={showcaseData.title}
            description={showcaseData.description}
            media={showcaseData.media}
            externalUrl={showcaseData.externalUrl}
            onClose={() => setShowcaseData(null)}
          />
        </Suspense>
      )}
    </>
  );
}
