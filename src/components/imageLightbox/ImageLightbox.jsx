import React from "react";
import {motion, AnimatePresence} from "framer-motion";

export default function ImageLightbox({src, alt, onClose, externalUrl}) {
  if (!src) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-lg"
        onClick={e => {
          if (e.target === e.currentTarget) {
            e.stopPropagation();
            onClose();
          }
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Close"
        >
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
        </button>

        {/* Image */}
        <motion.img
          initial={{scale: 0.9, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          exit={{scale: 0.9, opacity: 0}}
          transition={{duration: 0.3}}
          src={src}
          alt={alt || "Preview"}
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
          onClick={e => e.stopPropagation()}
        />

        {/* External link button */}
        {externalUrl && (
          <motion.a
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            onClick={e => e.stopPropagation()}
          >
            Open Full Size ↗
          </motion.a>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
