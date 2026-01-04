import React, {useContext, useState, useMemo} from "react";
import {motion, AnimatePresence} from "framer-motion";
import StyleContext from "../../contexts/StyleContext";
import {pricingSection} from "../../portfolio";

// --- SUB-COMPONENTS ---
// Pindahkan ke luar atau pastikan menerima props dengan benar
const ExtraItem = ({item, isSelected, onToggle, category}) => (
  <motion.div
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.98}}
    className={`
      flex gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-300 border
      ${
        isSelected
          ? "bg-[var(--btn-primary-bg)]/10 border-[var(--btn-primary-bg)] shadow-md"
          : "bg-[var(--bg-card)] border-[var(--border-light)] hover:border-[var(--btn-primary-bg)]/50"
      }
      ${category === "addon-type" ? "border-dashed" : "border-solid"}
    `}
    onClick={() => onToggle(item.id)} // Memastikan fungsi onToggle dipanggil
  >
    <div
      className={`
      w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors
      ${
        isSelected
          ? "bg-[var(--btn-primary-bg)] border-[var(--btn-primary-bg)]"
          : "border-[var(--border-light)]"
      }
    `}
    >
      <AnimatePresence>
        {isSelected && (
          <motion.span
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            className="text-white text-xs"
          >
            ✓
          </motion.span>
        )}
      </AnimatePresence>
    </div>
    <div className="flex flex-col w-full text-left">
      <div className="flex justify-between items-start">
        <span className="font-bold text-sm md:text-base text-[var(--text-primary)]">
          {item.title}
        </span>
        <span className="font-black text-[var(--btn-primary-bg)] text-sm">
          +{new Intl.NumberFormat("id-ID").format(item.price)}
        </span>
      </div>
      <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed opacity-80">
        {item.desc}
      </p>
    </div>
  </motion.div>
);

export default function PricingCalculator() {
  const {isDark} = useContext(StyleContext);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);

  // DEFINISI FUNGSI HARUS DI SINI
  const toggleExtra = id => {
    setSelectedExtras(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const totalPrice = useMemo(() => {
    if (!selectedPackage) return 0;
    const basePrice =
      pricingSection.packages.find(p => p.id === selectedPackage)?.price || 0;
    const allExtras = [
      ...pricingSection.featuresList,
      ...pricingSection.addonsList
    ];
    const extrasPrice = allExtras
      .filter(item => selectedExtras.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);
    return basePrice + extrasPrice;
  }, [selectedPackage, selectedExtras]);

  const handleCheckout = () => {
    const pkg = pricingSection.packages.find(p => p.id === selectedPackage);
    const selectedFeatures = pricingSection.featuresList
      .filter(f => selectedExtras.includes(f.id))
      .map(f => `   • ${f.title}`);
    const selectedAddons = pricingSection.addonsList
      .filter(a => selectedExtras.includes(a.id))
      .map(a => `   • ${a.title}`);

    const msg = `*NEW PROJECT INQUIRY* \n────────────────────\n\n*DETAIL PESANAN*\n• *Paket:* ${
      pkg?.title
    }\n\n${
      selectedFeatures.length > 0
        ? `*Fitur:*\n${selectedFeatures.join("\n")}\n`
        : ""
    }${
      selectedAddons.length > 0
        ? `*Add-ons:*\n${selectedAddons.join("\n")}\n`
        : ""
    }\n────────────────────\n*TOTAL:* *Rp ${new Intl.NumberFormat(
      "id-ID"
    ).format(
      totalPrice
    )}*\n────────────────────\n\nHalo Liant, saya ingin konsultasi mengenai spesifikasi di atas.`;

    window.open(
      `https://wa.me/6281331487753?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  if (!pricingSection.display) return null;

  return (
    <section
      id="pricing"
      className="py-24 px-6 transition-colors duration-500 bg-[var(--bg-body)]"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-4"
          >
            Pricing & Estimation
          </motion.h1>
          <h6 className="text-[var(--text-secondary)] text-2xl max-w-2xl mx-auto opacity-80">
            Help your business growth even more now!
          </h6>
          <p className="text-[var(--text-secondary)] text-sm max-w-2xl mx-auto opacity-70 italic mt-4">
            * Pricing shown is an estimation. Final cost depends on scope,
            system complexity, and long-term maintenance needs.
          </p>
        </header>

        {/* STEP 01: PACKAGES */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xs font-black tracking-[0.3em] uppercase text-[var(--btn-primary-bg)] whitespace-nowrap">
              01. Choose Package
            </h2>
            <div className="w-full h-[1px] bg-[var(--btn-primary-bg)] opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingSection.packages.map(pkg => (
              <motion.div
                key={pkg.id}
                whileHover={{y: -8}}
                onClick={() => {
                  setSelectedPackage(
                    selectedPackage === pkg.id ? null : pkg.id
                  );
                  setSelectedExtras([]);
                }}
                className={`
                  relative p-8 rounded-[2rem] cursor-pointer transition-all duration-300 border-2 text-left
                  ${
                    selectedPackage === pkg.id
                      ? "border-[var(--btn-primary-bg)] bg-[var(--bg-card)] shadow-2xl scale-[1.02]"
                      : "border-[var(--border-light)] bg-[var(--bg-card)]/50 opacity-80 hover:opacity-100"
                  }
                `}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-4 right-8 bg-[var(--btn-primary-bg)] text-black text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg">
                    BEST VALUE
                  </span>
                )}
                <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest opacity-60">
                  Starting At
                </span>
                <h3 className="text-4xl font-black text-[var(--text-primary)] mt-1 mb-6">
                  Rp{pkg.shortPrice}
                </h3>
                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  {pkg.title}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {pkg.desc}
                </p>

                <ul className="space-y-3 border-t border-[var(--border-light)] pt-6">
                  {pkg.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-[var(--text-primary)] opacity-90"
                    >
                      <span className="text-[var(--btn-primary-bg)] font-bold">
                        ✓
                      </span>{" "}
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* STEP 02 & 03 */}
        <AnimatePresence>
          {selectedPackage && (
            <motion.div
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: "auto"}}
              exit={{opacity: 0, height: 0}}
              className="overflow-hidden"
            >
              <div className="mt-20 pt-12 border-t border-dashed border-[var(--border-light)]">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-xs font-black tracking-[0.3em] uppercase text-[var(--btn-primary-bg)] whitespace-nowrap">
                    02. Add Technical Features
                  </h2>
                  <div className="w-full h-[1px] bg-[var(--btn-primary-bg)] opacity-20"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pricingSection.featuresList.map(item => (
                    <ExtraItem
                      key={item.id}
                      item={item}
                      isSelected={selectedExtras.includes(item.id)}
                      onToggle={toggleExtra} // Melemparkan fungsi toggleExtra ke sub-component
                      category="feature-type"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-xs font-black tracking-[0.3em] uppercase text-[var(--btn-primary-bg)] whitespace-nowrap">
                    03. Project Add-ons
                  </h2>
                  <div className="w-full h-[1px] bg-[var(--btn-primary-bg)] opacity-20"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pricingSection.addonsList.map(item => (
                    <ExtraItem
                      key={item.id}
                      item={item}
                      isSelected={selectedExtras.includes(item.id)}
                      onToggle={toggleExtra} // Melemparkan fungsi toggleExtra ke sub-component
                      category="addon-type"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FLOATING PILL */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: 100, opacity: 0}}
            className="fixed bottom-8 left-0 right-0 z-[9999] px-4 flex justify-center pointer-events-none"
          >
            <div className="pointer-events-auto flex items-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-2 pl-6 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-lg">
              <div className="flex flex-col flex-1 border-r border-white/10 mr-4 text-left">
                <span className="text-[10px] font-black text-[var(--btn-primary-bg)] uppercase tracking-tighter">
                  Est. Total Investment
                </span>
                <span className="text-xl md:text-2xl font-black text-white">
                  Rp {new Intl.NumberFormat("id-ID").format(totalPrice)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-[var(--btn-primary-bg)] hover:bg-white hover:text-black text-black px-6 md:px-10 py-3 md:py-4 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-lg"
              >
                Consult via WA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
