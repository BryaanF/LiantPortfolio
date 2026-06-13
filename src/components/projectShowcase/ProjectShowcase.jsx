import React, {useContext} from "react";
import {motion, AnimatePresence} from "framer-motion";
import StyleContext from "../../contexts/StyleContext";

/* Icons (SVG inline, portable) — color inherits from currentColor via CSS vars */
const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ImageIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);
const VideoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);
const ExternalIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function ProjectShowcase({
  title,
  description,
  media = [],
  externalUrl = "",
  onClose
}) {
  const {isDark} = useContext(StyleContext);

  if (!media.length && !externalUrl) {
    if (onClose) onClose();
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="fixed inset-0 z-[99999] flex items-center justify-center p-2 md:p-6 backdrop-blur-lg"
        style={{
          backgroundColor: isDark
            ? "rgba(0,0,0,0.95)"
            : "rgba(234,234,234,0.95)"
        }}
        onClick={e => {
          if (e.target === e.currentTarget && onClose) {
            e.stopPropagation();
            onClose();
          }
        }}
      >
        <motion.div
          initial={{scale: 0.95, y: 20}}
          animate={{scale: 1, y: 0}}
          exit={{scale: 0.95, y: 20}}
          transition={{duration: 0.3}}
          className="w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          style={{
            backgroundColor: isDark ? "#111" : "var(--bg-card)",
            borderColor: isDark
              ? "rgba(255,255,255,0.1)"
              : "var(--border-light)"
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* HEADER */}
          <div
            className="p-4 md:p-6 flex justify-between items-start shrink-0"
            style={{
              borderBottom: isDark
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid var(--border-light)"
            }}
          >
            <div className="min-w-0 mr-4">
              {title && (
                <h2
                  className="text-lg md:text-2xl font-black truncate"
                  style={{color: isDark ? "#fff" : "var(--text-primary)"}}
                >
                  {title}
                </h2>
              )}
              {description && (
                <p
                  className="text-xs md:text-sm mt-1 line-clamp-2"
                  style={{
                    color: isDark
                      ? "rgba(255,255,255,0.6)"
                      : "var(--text-secondary)"
                  }}
                >
                  {description}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {externalUrl && (
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.1)"
                      : "var(--btn-primary-bg)",
                    color: isDark ? "rgba(255,255,255,0.8)" : "#fff"
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  <ExternalIcon /> Visit Website
                </a>
              )}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.06)",
                  color: isDark
                    ? "rgba(255,255,255,0.8)"
                    : "var(--text-secondary)"
                }}
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* MEDIA GALLERY */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            {media.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {media.map((item, i) => (
                  <div
                    key={i}
                    className="relative group rounded-xl overflow-hidden"
                    style={{
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.1)"
                        : "1px solid var(--border-light)",
                      backgroundColor: isDark
                        ? "rgba(0,0,0,0.4)"
                        : "var(--bg-body)"
                    }}
                  >
                    {item.type === "video" ? (
                      <>
                        <div
                          className="relative w-full"
                          style={{aspectRatio: "16/9"}}
                        >
                          <video
                            src={item.url}
                            poster={item.thumbnail}
                            className="absolute inset-0 w-full h-full object-contain"
                            controls
                            playsInline
                          />
                        </div>
                        {item.caption && (
                          <div
                            className="p-3 flex items-center gap-2 text-xs"
                            style={{
                              color: isDark
                                ? "rgba(255,255,255,0.7)"
                                : "var(--text-secondary)"
                            }}
                          >
                            <VideoIcon /> {item.caption}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <img
                          src={item.url}
                          alt={item.caption || `Media ${i + 1}`}
                          className="w-full object-cover cursor-pointer"
                          style={{maxHeight: "320px"}}
                          onClick={() =>
                            item.url && window.open(item.url, "_blank")
                          }
                          loading="lazy"
                        />
                        {item.caption && (
                          <div
                            className="p-3 flex items-center gap-2 text-xs"
                            style={{
                              color: isDark
                                ? "rgba(255,255,255,0.7)"
                                : "var(--text-secondary)"
                            }}
                          >
                            <ImageIcon /> {item.caption}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="flex flex-col items-center justify-center py-16 text-center"
                style={{
                  color: isDark
                    ? "rgba(255,255,255,0.4)"
                    : "var(--text-secondary)"
                }}
              >
                <p className="text-sm">No media available for this item.</p>
                <p className="text-xs mt-2">
                  Use the links above to view external resources.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
