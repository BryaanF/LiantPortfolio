export default function Button({text, className, href, newTab}) {
  return (
    <div className={className}>
      <a
        className="inline-flex items-center justify-center font-bold px-5 py-3 rounded-md text-white bg-[var(--btn-primary-bg)] hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-md text-sm md:text-base text-center no-underline cursor-pointer"
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    </div>
  );
}
