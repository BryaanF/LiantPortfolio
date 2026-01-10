import React from "react";
import {motion} from "framer-motion";
import {formatFileSizeDisplay} from "../../utils";

// Ekstrak SVG component
const Icons = {
  Repo: () => (
    <svg
      aria-hidden="true"
      className="w-5 h-5 mr-3 opacity-80 shrink-0"
      fill="currentColor"
      viewBox="0 0 12 16"
    >
      <path
        fillRule="evenodd"
        d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
      ></path>
    </svg>
  ),
  Star: () => (
    <svg
      aria-hidden="true"
      className="w-3.5 h-3.5 mr-1 opacity-70"
      fill="currentColor"
      viewBox="0 0 14 16"
    >
      <path
        fillRule="evenodd"
        d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
      ></path>
    </svg>
  ),
  Fork: () => (
    <svg
      aria-hidden="true"
      className="w-3 h-3.5 mr-1 opacity-70"
      fill="currentColor"
      viewBox="0 0 10 16"
    >
      <path
        fillRule="evenodd"
        d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
      ></path>
    </svg>
  )
};

export default function GithubRepoCard({repo, isDark}) {
  const {
    url,
    name,
    description,
    primaryLanguage,
    forkCount,
    stargazers,
    diskUsage
  } = repo.node;

  // Logic styling
  const themeClasses = isDark
    ? "bg-gray-800 text-gray-100 hover:shadow-gray-700/50 hover:bg-gray-750 border-gray-700"
    : "bg-white text-gray-800 hover:shadow-xl hover:-translate-y-1 border-transparent";

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      // --- Framer Motion Props ---
      initial={{y: 20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, ease: "easeOut"}}
      viewport={{once: true, margin: "-50px"}}
      // ---------------------------
      className={`
        block p-6 rounded-lg cursor-pointer shadow-md border
        transition-colors duration-300 ease-in-out
        h-full flex flex-col justify-between 
        ${themeClasses}
      `}
    >
      <div>
        <div className="flex items-center mb-3">
          <Icons.Repo />
          <h3 className="text-xl font-bold truncate tracking-tight m-0 flex-1">
            {name}
          </h3>
        </div>

        <p className="text-sm opacity-80 mb-6 h-12 overflow-hidden line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-end text-xs opacity-90 mt-auto">
        <div className="flex items-center gap-4 flex-wrap">
          {primaryLanguage && (
            <div className="flex items-center">
              <span
                className="w-2.5 h-2.5 rounded-full mr-1.5 shadow-sm"
                style={{backgroundColor: primaryLanguage.color}}
              />
              <span className="font-medium">{primaryLanguage.name}</span>
            </div>
          )}

          <div className="flex items-center" title="Forks">
            <Icons.Fork />
            <span>{forkCount}</span>
          </div>

          <div className="flex items-center" title="Stars">
            <Icons.Star />
            <span>{stargazers.totalCount}</span>
          </div>
        </div>

        <div className="font-medium text-right ml-2 whitespace-nowrap">
          {formatFileSizeDisplay(diskUsage)}
        </div>
      </div>
    </motion.a>
  );
}
