import React from "react";
import {motion, AnimatePresence} from "framer-motion";

/* Icons (SVG inline, portable) */
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
  externalLinks = [],
  onClose
}) {
  if (!media.length && !externalLinks.length) {
    // If nothing to show, just close
    if (onClose) onClose();
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="fixed inset-0 z-[99999] flex items-center justify-center p-2 md:p-6 bg-black/95 backdrop-blur-lg"
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
          className="w-full max-w-4xl h-[90vh] bg-[#111] rounded-2xl overflow-hidden flex flex-col border border-white/10 shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="p-4 md:p-6 border-b border-white/10 flex justify-between items-start shrink-0">
            <div className="min-w-0 mr-4">
              {title && (
                <h2 className="text-lg md:text-2xl font-black text-white truncate">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-xs md:text-sm text-white/60 mt-1 line-clamp-2">
                  {description}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {/* External links as small buttons */}
              {externalLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <ExternalIcon /> {link.name || "View"}
                </a>
              ))}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
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
                    className="relative group rounded-xl overflow-hidden border border-white/10 bg-black/40"
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
                          <div className="p-3 flex items-center gap-2 text-white/70 text-xs">
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
                          <div className="p-3 flex items-center gap-2 text-white/70 text-xs">
                            <ImageIcon /> {item.caption}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              /* No media — show external links only */
              <div className="flex flex-col items-center justify-center py-16 text-center text-white/40">
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
