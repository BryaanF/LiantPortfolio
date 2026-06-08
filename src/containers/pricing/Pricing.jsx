import React, {useState, useMemo, useContext} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {pricingSection} from "../../portfolio";
import LanguageContext from "../../contexts/LanguageContext";
import StyleContext from "../../contexts/StyleContext";
import {getTranslation} from "../../utils/translations";

/* Icons (SVG inline) */
const Icons = {
  Time: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  Shield: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Check: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Close: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Image: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
};

/* ============================================================
   MODAL DETAIL
   ============================================================ */
const PackageModal = ({pkg, onClose, onSelect, isSelected}) => {
  const {lang} = useContext(LanguageContext);
  const {isDark} = useContext(StyleContext);
  const [activeTab, setActiveTab] = useState("overview");

  if (!pkg) return null;

  const titleText = getTranslation(pkg.title, lang);
  const idealForText = getTranslation(pkg.idealFor, lang);
  const longDescText = getTranslation(pkg.longDesc, lang);
  const shortPriceText = getTranslation(pkg.shortPrice, lang);
  const notIncludedResolved = getTranslation(pkg.notIncluded, lang);
  const notIncludedStr = Array.isArray(notIncludedResolved)
    ? notIncludedResolved.join(", ")
    : notIncludedResolved;
  const workflowResolved = getTranslation(pkg.workflow, lang);
  const screenshots = pkg.screenshots || [];

  const tabs = ["overview", "proof", "workflow"];
  const tabLabels = {
    overview: lang === "id" ? "Ringkasan" : "Overview",
    proof: lang === "id" ? "Bukti Kerja" : "Proof of Work",
    workflow: lang === "id" ? "Alur Kerja" : "Workflow"
  };
  const labels = {
    bestFor: lang === "id" ? "Cocok Untuk" : "Best For",
    whatIncluded: lang === "id" ? "Yang Termasuk" : "What's Included",
    notIncluded:
      lang === "id"
        ? "Tidak Termasuk (Disediakan Klien)"
        : "Not Included (Client Provided)",
    total: lang === "id" ? "Total Investasi" : "Total Investment",
    selected: lang === "id" ? "Paket Terpilih" : "Plan Selected",
    select: lang === "id" ? "Pilih Paket" : "Select Plan",
    noScreenshots:
      lang === "id"
        ? "Screenshot contoh proyek akan ditampilkan di sini."
        : "Project screenshot examples will appear here."
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-md"
      style={{
        backgroundColor: isDark ? "rgba(0,0,0,0.9)" : "rgba(250,248,245,0.92)"
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{scale: 0.95, y: 20}}
        animate={{scale: 1, y: 0}}
        exit={{scale: 0.95, y: 20}}
        className="w-full max-w-3xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-[var(--border-light)]"
        style={{backgroundColor: "var(--bg-card)"}}
        onClick={e => e.stopPropagation()}
      >
        {/* HEADER */}
        <div
          className="p-5 md:p-6 border-b border-[var(--border-light)]/20 flex justify-between items-start shrink-0"
          style={{backgroundColor: "var(--bg-card)"}}
        >
          <div>
            <span className="text-[10px] font-bold text-[var(--btn-primary-bg)] uppercase tracking-wider block mb-1">
              {labels.bestFor}: {idealForText}
            </span>
            <h2 className="text-xl md:text-3xl font-black text-[var(--text-primary)] leading-tight">
              {titleText}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full transition-colors hover:bg-[var(--border-light)]"
            style={{color: "var(--text-secondary)"}}
          >
            <Icons.Close />
          </button>
        </div>

        {/* TABS */}
        <div
          className="flex gap-8 border-b border-[var(--border-light)]/20 px-5 md:px-8 pt-4 shrink-0"
          style={{backgroundColor: "var(--bg-card)"}}
        >
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
                activeTab === tab
                  ? "border-[var(--btn-primary-bg)] text-[var(--text-primary)]"
                  : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 custom-scrollbar">
          {activeTab === "overview" && (
            <div className="space-y-8 animate-in fade-in duration-300 pb-4">
              <p
                className="text-sm leading-relaxed"
                style={{color: "var(--text-secondary)"}}
              >
                {longDescText}
              </p>

              {/* Spec Grid */}
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(pkg.specs).map(([key, val]) => (
                  <div
                    key={key}
                    className="p-3 rounded-lg border transition-colors hover:border-[var(--border-light)]/30"
                    style={{
                      backgroundColor: isDark
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(0,0,0,0.02)",
                      borderColor: isDark
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(0,0,0,0.06)"
                    }}
                  >
                    <span
                      className="text-[10px] block uppercase opacity-70 mb-1"
                      style={{color: "var(--text-secondary)"}}
                    >
                      {key}
                    </span>
                    <span
                      className="text-xs font-bold truncate block text-[var(--text-primary)]"
                      title={val}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div>
                <h4
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{color: "var(--text-secondary)"}}
                >
                  {labels.whatIncluded}
                </h4>
                <ul className="grid grid-cols-1 gap-3">
                  {pkg.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs p-2 rounded-md"
                      style={{
                        color: "var(--text-primary)",
                        backgroundColor: isDark
                          ? "rgba(255,255,255,0.03)"
                          : "rgba(0,0,0,0.02)"
                      }}
                    >
                      <span className="text-green-400 mt-0.5">
                        <Icons.Check />
                      </span>
                      <span className="opacity-90 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included */}
              {pkg.notIncluded && (
                <div
                  className="p-4 rounded-xl border"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(239,68,68,0.05)"
                      : "rgba(239,68,68,0.03)",
                    borderColor: isDark
                      ? "rgba(239,68,68,0.1)"
                      : "rgba(239,68,68,0.15)"
                  }}
                >
                  <h4 className="text-[10px] font-bold uppercase text-red-400 mb-2">
                    {labels.notIncluded}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{color: "var(--text-secondary)"}}
                  >
                    {notIncludedStr}
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "proof" && (
            <div className="animate-in fade-in duration-300 pb-4">
              {screenshots.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {screenshots.map((shot, i) => (
                    <img
                      key={i}
                      src={shot.url}
                      alt={shot.caption || `Screenshot ${i + 1}`}
                      className="w-full h-48 object-cover rounded-xl border border-[var(--border-light)]/20 hover:border-[var(--btn-primary-bg)]/50 transition-colors cursor-pointer"
                      onClick={() => window.open(shot.url, "_blank")}
                      loading="lazy"
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span
                    className="text-4xl opacity-20 mb-4"
                    style={{color: "var(--text-secondary)"}}
                  >
                    <Icons.Image />
                  </span>
                  <p
                    className="text-sm"
                    style={{color: "var(--text-secondary)"}}
                  >
                    {labels.noScreenshots}
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "workflow" && (
            <div className="animate-in fade-in duration-300 relative border-l-2 border-[var(--border-light)]/10 ml-3 my-2">
              {workflowResolved.map((step, i) => (
                <div key={i} className="mb-8 ml-8 relative group">
                  <div
                    className="absolute -left-[43px] top-0 w-8 h-8 rounded-full border-2 font-bold text-xs flex items-center justify-center z-10 transition-all"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: isDark
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.08)",
                      color: "var(--text-secondary)"
                    }}
                  >
                    {i + 1}
                  </div>
                  <h5 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--btn-primary-bg)] transition-colors">
                    {step.title}
                  </h5>
                  <p
                    className="text-xs mt-2 leading-relaxed"
                    style={{color: "var(--text-secondary)"}}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div
          className="p-5 md:p-6 border-t border-[var(--border-light)]/20 flex justify-between items-center shrink-0"
          style={{
            backgroundColor: isDark
              ? "rgba(255,255,255,0.02)"
              : "var(--bg-body)"
          }}
        >
          <div className="flex flex-col">
            <span
              className="text-[10px] uppercase tracking-wider"
              style={{color: "var(--text-secondary)"}}
            >
              {labels.total}
            </span>
            <div className="text-2xl md:text-3xl font-black text-[var(--btn-primary-bg)]">
              Rp {shortPriceText}
            </div>
          </div>
          <button
            onClick={() => {
              onSelect(pkg.id);
              onClose();
            }}
            className={`px-6 md:px-10 py-4 rounded-xl text-xs md:text-sm font-black uppercase tracking-widest transition-all shadow-lg ${
              isSelected
                ? "scale-95 ring-2 ring-offset-2 ring-white/20"
                : "hover:brightness-110 hover:-translate-y-1"
            }`}
            style={
              isSelected
                ? {backgroundColor: "white", color: "#000"}
                : {backgroundColor: "var(--btn-primary-bg)", color: "#000"}
            }
          >
            {isSelected ? labels.selected : labels.select}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function PricingCalculator() {
  const {lang} = useContext(LanguageContext);
  const {isDark} = useContext(StyleContext);
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  const [viewDetailPkg, setViewDetailPkg] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);

  const toggleExtra = id => {
    setSelectedExtras(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const totalPrice = useMemo(() => {
    if (!selectedPackageId) return 0;
    const basePkg = pricingSection.packages.find(
      p => p.id === selectedPackageId
    );
    if (!basePkg) return 0;
    const extraTotal = [
      ...pricingSection.featuresList,
      ...pricingSection.addonsList,
      ...(basePkg.addons || [])
    ]
      .filter(item => selectedExtras.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);
    return basePkg.price + extraTotal;
  }, [selectedPackageId, selectedExtras]);

  const handleCheckout = () => {
    const pkg = pricingSection.packages.find(p => p.id === selectedPackageId);
    const fmt = num => new Intl.NumberFormat("id-ID").format(num);
    const extraItems = [
      ...pricingSection.featuresList,
      ...pricingSection.addonsList,
      ...(pkg?.addons || [])
    ]
      .filter(item => selectedExtras.includes(item.id))
      .map(
        item =>
          `   + ${item.title} (Rp ${fmt(item.price)}) - ${getTranslation(item.desc, lang)}`
      )
      .join("\n");

    const pkgTitle = getTranslation(pkg?.title, lang);
    const pkgIdealFor = getTranslation(pkg?.idealFor, lang);
    const message =
      lang === "id"
        ? `Halo Mas Liant, saya tertarik untuk deal proyek ini:\n\n📦 *PAKET: ${pkgTitle}*\nHarga Base: Rp ${fmt(pkg?.price)}\nTarget: ${pkgIdealFor}\n\n🛠 *ADD-ONS:*\n${extraItems || "   - Tidak ada"}\n\n💰 *TOTAL ESTIMASI: Rp ${fmt(totalPrice)}*\n\nMohon info untuk jadwal diskusi / briefing selanjutnya. Terima kasih.`
        : `Hi Liant, I'm interested in this project package:\n\n📦 *PACKAGE: ${pkgTitle}*\nBase Price: Rp ${fmt(pkg?.price)}\nTarget: ${pkgIdealFor}\n\n🛠 *ADD-ONS:*\n${extraItems || "   - None"}\n\n💰 *TOTAL ESTIMATE: Rp ${fmt(totalPrice)}*\n\nPlease let me know about scheduling a discussion / briefing. Thank you.`;

    window.open(
      `https://wa.me/6281331487753?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (!pricingSection.display) return null;

  const sectionTitle = getTranslation(pricingSection.title, lang);
  const sectionDesc = getTranslation(pricingSection.description, lang);

  const fmtPrice = num => {
    const locale = lang === "id" ? "id-ID" : "en-US";
    const formatted = new Intl.NumberFormat(locale, {
      notation: "compact",
      compactDisplay: "short"
    }).format(num);
    return `Rp ${formatted}`;
  };

  const labels = {
    recommended: lang === "id" ? "Add-ons Rekomendasi" : "Recommended Add-ons",
    totalEst: lang === "id" ? "Total Est." : "Total Est.",
    book: lang === "id" ? "Pesan via WhatsApp" : "Book via WhatsApp",
    viewDetails: lang === "id" ? "Lihat Detail" : "View Details",
    remove: lang === "id" ? "Hapus" : "Remove",
    select: lang === "id" ? "Pilih" : "Select"
  };

  return (
    <section
      className="py-24 px-4 relative"
      id="pricing"
      style={{backgroundColor: "var(--bg-body)", color: "var(--text-primary)"}}
    >
      <AnimatePresence>
        {viewDetailPkg && (
          <PackageModal
            pkg={viewDetailPkg}
            onClose={() => setViewDetailPkg(null)}
            onSelect={setSelectedPackageId}
            isSelected={selectedPackageId === viewDetailPkg.id}
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-[var(--text-primary)]">
            {sectionTitle}
          </h2>
          <p
            className="opacity-80 max-w-2xl mx-auto"
            style={{color: "var(--text-secondary)"}}
          >
            {sectionDesc}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {pricingSection.packages.map(pkg => {
            const isSelected = selectedPackageId === pkg.id;
            const cardTitle = getTranslation(pkg.title, lang);
            const cardShortPrice = getTranslation(pkg.shortPrice, lang);
            const cardDesc = getTranslation(pkg.desc, lang);

            return (
              <motion.div
                key={pkg.id}
                whileHover={{y: -5}}
                onClick={() => setViewDetailPkg(pkg)}
                className={`cursor-pointer relative rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col group ${
                  isSelected
                    ? "border-[var(--btn-primary-bg)] ring-1 ring-[var(--btn-primary-bg)] shadow-2xl"
                    : "border-[var(--border-light)]"
                }`}
                style={{
                  backgroundColor: isSelected
                    ? "var(--bg-card)"
                    : isDark
                      ? "rgba(31,31,31,0.4)"
                      : "rgba(255,255,255,0.6)"
                }}
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {cardTitle}
                    </h3>
                    {pkg.isPopular && (
                      <span
                        className="text-[9px] font-black px-2 py-1 rounded-full text-white"
                        style={{backgroundColor: "var(--btn-primary-bg)"}}
                      >
                        {lang === "id" ? "POPULER" : "POPULAR"}
                      </span>
                    )}
                  </div>
                  <div className="text-3xl font-black text-[var(--text-primary)] mb-1">
                    Rp {cardShortPrice}
                  </div>
                  <p
                    className="text-xs mb-6 min-h-[40px]"
                    style={{color: "var(--text-secondary)"}}
                  >
                    {cardDesc}
                  </p>

                  <div
                    className="grid grid-cols-2 gap-2 text-[10px] p-3 rounded-lg border mb-6"
                    style={{
                      backgroundColor: isDark
                        ? "rgba(255,255,255,0.02)"
                        : "rgba(0,0,0,0.02)",
                      borderColor: isDark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.05)"
                    }}
                  >
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <Icons.Time />{" "}
                      <b className="text-[var(--text-primary)]">
                        {pkg.specs.duration}
                      </b>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <Icons.Shield />{" "}
                      <b className="text-green-500">{pkg.specs.warranty}</b>
                    </div>
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-3">
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        setViewDetailPkg(pkg);
                      }}
                      className="py-3 rounded-lg border border-[var(--border-light)] text-xs font-bold transition-colors"
                      style={{
                        color: "var(--text-primary)",
                        backgroundColor: "transparent"
                      }}
                    >
                      {labels.viewDetails}
                    </button>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        setSelectedPackageId(isSelected ? null : pkg.id);
                      }}
                      className={`py-3 rounded-lg text-xs font-black transition-colors ${isSelected ? "text-red-400" : "text-black hover:brightness-110"}`}
                      style={
                        isSelected
                          ? {
                              backgroundColor: "rgba(239,68,68,0.08)",
                              border: "1px solid rgba(239,68,68,0.2)"
                            }
                          : {backgroundColor: "var(--btn-primary-bg)"}
                      }
                    >
                      {isSelected ? labels.remove : labels.select}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Checkout Bar */}
        <AnimatePresence>
          {selectedPackageId && (
            <motion.div
              initial={{y: 100, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              exit={{y: 100, opacity: 0}}
              className="fixed bottom-0 left-0 right-0 z-50 p-4"
            >
              <div
                className="max-w-5xl mx-auto border rounded-2xl overflow-hidden flex flex-col md:flex-row"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-light)",
                  boxShadow: isDark
                    ? "0 -10px 40px rgba(0,0,0,0.6)"
                    : "0 -10px 40px rgba(0,0,0,0.08)"
                }}
              >
                <div className="flex-1 p-4 md:p-6 overflow-x-auto border-b md:border-b-0 md:border-r border-[var(--border-light)]/20">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest block mb-3"
                    style={{color: "var(--text-secondary)"}}
                  >
                    {labels.recommended}
                  </span>
                  <div className="flex gap-3">
                    {[
                      ...pricingSection.featuresList,
                      ...pricingSection.addonsList,
                      ...(pricingSection.packages.find(
                        p => p.id === selectedPackageId
                      )?.addons || [])
                    ].map(item => {
                      const isActive = selectedExtras.includes(item.id);
                      const itemDesc = getTranslation(item.desc, lang);
                      return (
                        <div
                          key={item.id}
                          onClick={() => toggleExtra(item.id)}
                          className={`min-w-[160px] p-3 rounded-xl border cursor-pointer transition-all transform ${
                            isActive
                              ? "border-[var(--btn-primary-bg)] ring-2 ring-[var(--btn-primary-bg)]/50 shadow-lg scale-105"
                              : "border-[var(--border-light)] hover:border-[var(--border-light)]/60"
                          }`}
                          style={{
                            backgroundColor: isActive
                              ? isDark
                                ? "rgba(161,144,46,0.15)"
                                : "rgba(161,144,46,0.08)"
                              : isDark
                                ? "rgba(255,255,255,0.02)"
                                : "rgba(0,0,0,0.02)"
                          }}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <div className="text-[10px] font-bold truncate flex-1 text-[var(--text-primary)]">
                              {item.title}
                            </div>
                            {isActive && (
                              <div className="w-4 h-4 rounded-full bg-[var(--btn-primary-bg)] flex items-center justify-center flex-shrink-0">
                                <Icons.Check />
                              </div>
                            )}
                          </div>
                          <div
                            className={`text-[10px] opacity-80 ${isActive ? "text-[var(--btn-primary-bg)] font-semibold" : ""}`}
                            style={{
                              color: isActive
                                ? undefined
                                : "var(--text-secondary)"
                            }}
                          >
                            + {fmtPrice(item.price)}
                          </div>
                          <div
                            className="text-[9px] mt-1"
                            style={{color: "var(--text-secondary)"}}
                          >
                            {itemDesc}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className="w-full md:w-72 p-4 md:p-6 flex flex-col justify-center"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.02)"
                      : "var(--bg-body)"
                  }}
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <span
                      className="text-xs"
                      style={{color: "var(--text-secondary)"}}
                    >
                      {labels.totalEst}
                    </span>
                    <span className="text-xl font-black text-[var(--text-primary)]">
                      {fmtPrice(totalPrice)}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full text-black font-black py-3 rounded-lg text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
                    style={{backgroundColor: "var(--btn-primary-bg)"}}
                  >
                    {labels.book}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
