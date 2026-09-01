import {motion} from "framer-motion";
import {useTranslation} from "../../hooks/useTranslation";

const Footer = () => {
  const t = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--border-light)] bg-transparent">
      <motion.div
        initial={{opacity: 0, y: 12}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6, ease: "easeOut"}}
        className="mx-auto max-w-7xl px-4 py-12"
      >
        <div className="flex flex-col items-center text-center">
          {/* Primary */}
          <p className="flex items-center gap-1 text-base font-semibold text-[var(--text-primary)]">
            <span>{t({en: "Made with", id: "Dibuat dengan"})}</span>
            <span className="text-red-500">❤️</span>
            <span>{t({en: "by Liant", id: "oleh Liant"})}</span>
          </p>

          {/* Secondary */}
          <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)] opacity-60">
            © {year} — {t({en: "All Rights Reserved", id: "Hak Cipta Dilindungi"})}
          </p>
          <p className="mt-4 text-[10px] text-[var(--text-secondary)] opacity-40">
            {t({
              en: "Available for long-term collaboration",
              id: "Tersedia untuk kolaborasi jangka panjang"
            })}
          </p>

          {/* Divider */}
          <div className="my-6 h-px w-12 bg-[var(--border-light)] opacity-40" />

          {/* Action */}
          <motion.a
            href="#greeting"
            whileHover={{y: -3}}
            className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--text-secondary)] transition-colors hover:text-[var(--btn-primary-bg)]"
            aria-label="Back to top"
          >
            <span className="text-sm">↑</span>
            {t({en: "Back to Top", id: "Kembali ke Atas"})}
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
