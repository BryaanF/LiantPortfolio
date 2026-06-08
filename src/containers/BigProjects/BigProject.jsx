import React, {useContext} from "react";
import {motion} from "framer-motion";
import {bigProjects} from "../../portfolio";
import "./BigProject.scss";
import LanguageContext from "../../contexts/LanguageContext";
import {getTranslation} from "../../utils/translations";

export default function BigProject() {
  const {lang} = useContext(LanguageContext);

  if (!bigProjects.display) return null;

  return (
    <section id="projects" className="big-projects-section">
      <div className="projects-main-container">
        {/* Header Section */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="projects-header"
        >
          <h1 className="projects-heading">
            {getTranslation(bigProjects.title, lang)}{" "}
            <span className="inline-block animate-bounce">🚀</span>
          </h1>
          <p className="projects-subtitle">{bigProjects.subtitle}</p>
        </motion.div>

        {/* Grid Container */}
        <div className="projects-grid-div">
          {bigProjects.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: i * 0.1}}
              className="project-card"
            >
              {/* Image Section */}
              {project.image && (
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.projectName}
                    className="card-image"
                    loading="lazy"
                  />
                  <div className="image-overlay" />
                </div>
              )}

              {/* Detail Section */}
              <div className="project-content">
                <div className="project-detail">
                  <h5 className="card-title">{project.projectName}</h5>
                  <p className="card-subtitle">
                    {getTranslation(project.projectDesc, lang)}
                  </p>
                </div>

                {/* Footer Link Section */}
                {project.footerLink && (
                  <div className="project-card-footer">
                    {project.footerLink.map((link, k) => (
                      <a
                        key={k}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-tag"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
