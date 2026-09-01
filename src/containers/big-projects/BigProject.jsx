import {useState, lazy, Suspense, useContext} from "react";
import {motion} from "framer-motion";
import {bigProjects} from "../../data";
import "./BigProject.scss";
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
      <section id="projects" className="big-projects-section">
        <div className="projects-main-container">
          <SectionHeader
            title={t(bigProjects.title)}
            subtitle={t(bigProjects.subtitle)}
            emoji="🚀"
          />

          <div className="projects-grid-div">
            {bigProjects.projects.map((project, i) => (
              <motion.div
                key={project.projectName}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: i * 0.1}}
                className="project-card"
              >
                {project.image && (
                  <div
                    className="project-image-container cursor-pointer"
                    onClick={() => handleOpenShowcase(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                      loading="lazy"
                    />
                    <div className="image-overlay" />
                  </div>
                )}

                <div className="project-content">
                  <div className="project-detail">
                    <h5 className="card-title">{project.projectName}</h5>
                    <p className="card-subtitle">{t(project.projectDesc)}</p>
                  </div>

                  <div className="project-card-footer">
                    <button
                      onClick={() => handleOpenShowcase(project)}
                      className="project-tag"
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
