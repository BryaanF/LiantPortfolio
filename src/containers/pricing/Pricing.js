import React, { useContext, useState, useMemo } from "react";
import StyleContext from "../../contexts/StyleContext";
import { pricingSection } from "../../portfolio";
import "./Pricing.scss";

// --- STATIC DATA (Moved outside component) ---
const WHATSAPP_NUMBER = "6281331487753"; // Ganti dengan nomor asli

const packages = [
  {
    id: "starter",
    title: "Starter",
    price: 1500000,
    shortPrice: "Rp1.5jt",
    desc: "Perfect for personal branding",
    features: ["Single Page / Landing Page", "Responsive Layout", "WhatsApp Link Integration", "3 Days Delivery"],
  },
  {
    id: "business",
    title: "Business",
    price: 4500000,
    shortPrice: "Rp4.5jt",
    desc: "For small businesses & SMEs",
    features: ["Up to 8 Pages", "CMS (Admin Dashboard)", "SEO Basic Setup", "1 Month Maintenance", "7 Days Delivery"],
    isPopular: true, // Flag untuk highlight
  },
  {
    id: "custom",
    title: "Custom App",
    price: 9000000,
    shortPrice: "Rp9jt+",
    desc: "Complex system tailored for you",
    features: ["Web Application / System", "Database Integration", "Complex Logic & API", "Authentication System", "14+ Days Delivery"],
  },
];

const featuresList = [
  { id: "feat_responsive", title: "Mobile Optimized", desc: "Perfect UI for all devices", price: 500000 },
  { id: "feat_darkmode", title: "Dark Mode Toggle", desc: "Switch theme support", price: 800000 },
  { id: "feat_animation", title: "Interactive Animations", desc: "Framer Motion / GSAP", price: 1200000 },
  { id: "feat_api", title: "3rd Party API", desc: "Maps, Payment Gateway, etc", price: 2000000 },
];

const addonsList = [
  { id: "add_seo", title: "SEO Advanced", price: 500000 },
  { id: "add_analytics", title: "Google Analytics", price: 300000 },
  { id: "add_source", title: "Source Code Handover", price: 2500000 },
];

export default function PricingCalculator() {
  const { isDark } = useContext(StyleContext);

  // --- HOOKS (Always at top) ---
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);

  // --- CALCULATION LOGIC ---
  const totalPrice = useMemo(() => {
    if (!selectedPackage) return 0;
    const basePrice = packages.find((p) => p.id === selectedPackage)?.price || 0;
    
    const allExtras = [...featuresList, ...addonsList];
    const extrasPrice = allExtras
      .filter((item) => selectedExtras.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);

    return basePrice + extrasPrice;
  }, [selectedPackage, selectedExtras]);

  // --- CONDITIONAL RENDER CHECK ---
  // Dipindah ke sini agar Hooks di atas tetap tereksekusi
  if (!pricingSection.display) {
    return null;
  }

  // --- FORMATTERS & HANDLERS ---
  const formatRupiah = (num) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handlePackageSelect = (id) => {
    setSelectedPackage(prev => prev === id ? null : id);
  };

  const handleExtraToggle = (id) => {
    setSelectedExtras((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCheckout = () => {
    if (!selectedPackage) {
        const msg = `\uD83D\uDC4B Halo, saya ingin konsultasi gratis mengenai jasa dev.`;
        window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`, "_blank");
        return;
    }

    const pkg = packages.find(p => p.id === selectedPackage);
    const selectedFeatures = featuresList.filter(f => selectedExtras.includes(f.id));
    const selectedAddons = addonsList.filter(a => selectedExtras.includes(a.id));

    let message = `Halo, saya tertarik membuat project dengan estimasi:\n\n`;
    message += `\uD83D\uDCE6 *Paket*: ${pkg.title} (${formatRupiah(pkg.price)})\n`;
    
    if (selectedFeatures.length > 0) {
        message += `\n\u2728 *Features*:\n` + selectedFeatures.map(f => `- ${f.title}`).join('\n') + '\n';
    }
    if (selectedAddons.length > 0) {
        message += `\n\u2795 *Add-ons*:\n` + selectedAddons.map(a => `- ${a.title}`).join('\n') + '\n';
    }

    message += `\n\uD83D\uDCB0 *Total Estimasi: ${formatRupiah(totalPrice)}*`;
    message += `\n\nMohon info ketersediaan waktu diskusi. Trims.`;

    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className={isDark ? "pricing-container dark-mode" : "pricing-container light-mode"} id="pricing">
      <div className="pricing-wrapper">
        <header className="pricing-header">
          <h1 className="main-title">Web & Mobile Dev Services</h1>
          <p className="sub-title">Transparent pricing for your digital needs</p>
        </header>

        {/* PACKAGES */}
        <section className="pricing-section fade-in">
          <h2 className="section-title">1. Choose Package</h2>
          <div className="grid-packages">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`card package-card ${selectedPackage === pkg.id ? "active" : ""} ${pkg.isPopular ? "popular" : ""}`}
                onClick={() => handlePackageSelect(pkg.id)}
              >
                {pkg.isPopular && <div className="popular-badge">BEST VALUE</div>}
                <div className="card-top-label">STARTING AT</div>
                <div className="pkg-price">{pkg.shortPrice}</div>
                <h3 className="pkg-title">{pkg.title}</h3>
                <p className="pkg-desc">{pkg.desc}</p>
                <div className="divider"></div>
                <ul className="pkg-features">
                  {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EXTRAS & ADDONS (Collapsible) */}
        <div className={`extras-wrapper ${selectedPackage ? 'open' : ''}`}>
          <div className="extras-inner">
             <section className="pricing-section">
                <h2 className="section-title">2. Select Features</h2>
                <div className="grid-features">
                    {featuresList.map((feat) => (
                    <div
                        key={feat.id}
                        className={`card feature-card ${selectedExtras.includes(feat.id) ? "active" : ""}`}
                        onClick={() => handleExtraToggle(feat.id)}
                    >
                        <div className="checkbox-custom"></div>
                        <div className="card-content">
                            <div className="feat-header">
                                <span className="feat-title">{feat.title}</span>
                                <span className="feat-price">+{formatRupiah(feat.price)}</span>
                            </div>
                            <div className="feat-desc">{feat.desc}</div>
                        </div>
                    </div>
                    ))}
                </div>
            </section>

            <section className="pricing-section">
                <h2 className="section-title">3. Add-ons</h2>
                <div className="grid-addons">
                    {addonsList.map((addon) => (
                    <div
                        key={addon.id}
                        className={`card addon-card ${selectedExtras.includes(addon.id) ? "active" : ""}`}
                        onClick={() => handleExtraToggle(addon.id)}
                    >
                        <div className="checkbox-custom"></div>
                        <div className="card-content">
                             <div className="feat-title">{addon.title}</div>
                             <div className="feat-price">+{formatRupiah(addon.price)}</div>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
          </div>
        </div>

        {/* FALLBACK CTA */}
        {!selectedPackage && (
            <div className="consultation-area">
                <p>* Need a custom quote? Let's discuss your specific requirements.</p>
                <button className="btn-outline" onClick={handleCheckout}>
                    Free Consultation
                </button>
            </div>
        )}
      </div>

      {/* STICKY FOOTER */}
      <footer className={`sticky-footer ${selectedPackage ? 'visible' : ''}`}>
        <div className="footer-content">
            <div className="footer-info">
                <span>ROUGH TOTAL PROJECT COST ESTIMATION</span>
                <span className="total-amount">{formatRupiah(totalPrice)}</span>
            </div>
            <button className="btn-primary" onClick={handleCheckout}>
                Consult Now
            </button>
        </div>
      </footer>
    </div>
  );
}