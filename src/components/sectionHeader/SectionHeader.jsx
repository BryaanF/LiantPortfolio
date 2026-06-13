import React from "react";
import {motion} from "framer-motion";

/*
  Standardized section header with animated gold underline accent.
  Usage:
    <SectionHeader
      title="Section Title"
      subtitle="Optional subtitle"
      emoji="🚀"       // Optional emoji/icon above title
      align="center"   // "center" | "left"
    />
*/
export default function SectionHeader({
  title,
  subtitle,
  emoji = "",
  align = "center"
}) {
  const alignClasses =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5}}
      className={`flex flex-col ${alignClasses} mb-12 md:mb-16`}
    >
      {/* Optional emoji */}
      {emoji && <span className="text-4xl md:text-5xl mb-2">{emoji}</span>}

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight text-center">
        {title}
      </h2>

      {/* Gold underline accent strip — animated */}
      <motion.div
        initial={{width: 0}}
        whileInView={{width: "80px"}}
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 0.15}}
        className="h-1 bg-[var(--btn-primary-bg)] mt-4 rounded-full opacity-60"
      />

      {/* Subtitle (optional) */}
      {subtitle && (
        <p
          className="mt-6 text-sm md:text-base uppercase tracking-[0.2em] font-semibold text-[var(--text-secondary)] max-w-2xl"
          style={
            align === "center" ? {marginLeft: "auto", marginRight: "auto"} : {}
          }
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
