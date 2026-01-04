import React from "react";
import { motion } from "framer-motion"; // Ganti Fade dengan motion
import { bigProjects } from "../../portfolio";

export default function BigProject() {
  if (!bigProjects.display) return null;

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section dengan Framer Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--text-primary)] mb-4 leading-tight">
            {bigProjects.title} <span className="inline-block animate-bounce">🚀</span>
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase font-bold text-[var(--text-secondary)] opacity-70">
            {bigProjects.subtitle}
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {bigProjects.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col h-full bg-[var(--bg-card)] border border-[var(--border-light)] rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:border-brand-gold/50"
            >
              {/* Image Section */}
              {project.image && (
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.projectName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              )}

              {/* Detail Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h5 className="text-2xl font-bold mb-4 text-[var(--text-primary)] group-hover:text-brand-gold transition-colors">
                    {project.projectName}
                  </h5>
                  <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] opacity-80 line-clamp-4">
                    {project.projectDesc}
                  </p>
                </div>

                {/* Footer Link Section */}
                {project.footerLink && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.footerLink.map((link, k) => (
                      <a
                        key={k}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-[var(--btn-primary-bg)] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all hover:bg-white hover:text-black hover:ring-2 hover:ring-brand-gold"
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