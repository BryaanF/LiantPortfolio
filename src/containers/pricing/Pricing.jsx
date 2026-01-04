import React, { useContext, useState, useMemo } from "react";
import StyleContext from "../../contexts/StyleContext";
import { pricingSection } from "../../portfolio";
import { Fade } from "react-reveal";
import "./Pricing.scss";

// --- INI COMPONENT CARDNYA (Ditulis disini biar ga perlu file baru) ---
const PackageCard = ({ pkg, isSelected, onSelect }) => (
  <div
    className={`pricing-card package-card ${isSelected ? "active" : ""} ${pkg.isPopular ? "popular" : ""}`}
    onClick={() => onSelect(pkg.id)}
  >
    {pkg.isPopular && <div className="popular-badge">BEST VALUE</div>}
    <div className="card-top-label">STARTING AT</div>
    <div className="pkg-price">
      <span className="currency">Rp</span>{pkg.shortPrice}
    </div>
    <h3 className="pkg-title">{pkg.title}</h3>
    <p className="pkg-desc">{pkg.desc}</p>
    <div className="divider"></div>
    <ul className="pkg-features">
      {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
    </ul>
  </div>
);

const FeatureItem = ({ item, isSelected, onToggle, isAddon = false }) => (
  <div
    className={`pricing-card feature-card ${isSelected ? "active" : ""}`}
    onClick={() => onToggle(item.id)}
  >
    <div className="checkbox-custom"></div>
    <div className="card-content">
      <div className="feat-header">
        <span className="feat-title">{item.title}</span>
        <span className="feat-price">+{new Intl.NumberFormat("id-ID").format(item.price)}</span>
      </div>
      {!isAddon && <div className="feat-desc">{item.desc}</div>}
    </div>
  </div>
);
// ------------------------------------------------------------------

const WHATSAPP_NUMBER = "6281331487753"; // Ganti No WA

const packages = [
  {
    id: "starter", title: "Starter", price: 2500000, shortPrice: "2.5jt",
    desc: "Perfect for personal branding.",
    features: ["Single Page / Landing Page", "Responsive Layout", "WhatsApp Integration", "3 Days Delivery"]
  },
  {
    id: "business", title: "Business", price: 5000000, shortPrice: "5jt",
    desc: "Best for small businesses.",
    features: ["Up to 8 Pages", "CMS Dashboard", "Basic SEO", "1 Month Maintenance", "7 Days Delivery"],
    isPopular: true
  },
  {
    id: "custom", title: "Custom App", price: 10000000, shortPrice: "10jt+",
    desc: "Complex system tailored for you.",
    features: ["Web Application", "Database & API", "Auth System", "Complex Logic", "14+ Days Delivery"]
  }
];

const featuresList = [
  { id: "feat_responsive", title: "Mobile Optimized", desc: "Perfect UI for all devices", price: 500000 },
  { id: "feat_darkmode", title: "Dark Mode Toggle", desc: "Switch theme support", price: 800000 },
  { id: "feat_api", title: "3rd Party API", desc: "Maps, Payment Gateway, etc", price: 2000000 }
];

const addonsList = [
  { id: "add_seo", title: "SEO Advanced", price: 500000 },
  { id: "add_source", title: "Source Code Handover", price: 2500000 }
];

export default function PricingCalculator() {
  const { isDark } = useContext(StyleContext);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);

  const totalPrice = useMemo(() => {
    if (!selectedPackage) return 0;
    const basePrice = packages.find((p) => p.id === selectedPackage)?.price || 0;
    const allExtras = [...featuresList, ...addonsList];
    const extrasPrice = allExtras
      .filter((item) => selectedExtras.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);
    return basePrice + extrasPrice;
  }, [selectedPackage, selectedExtras]);

  if (!pricingSection.display) return null;

  const handleCheckout = () => {
    let message = selectedPackage
      ? `Halo, saya tertarik dengan paket ${packages.find(p => p.id === selectedPackage).title}. Est: Rp ${new Intl.NumberFormat("id-ID").format(totalPrice)}`
      : "Halo, saya mau konsultasi jasa dev.";
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={`pricing-section-container ${isDark ? "dark-mode" : "light-mode"}`} id="pricing">
        <div className="pricing-wrapper">
          <div className="pricing-header">
            <h1 className="main-title">Pricing & Estimation</h1>
            <p className="sub-title">Transparent pricing custom tailored for your needs.</p>
          </div>

          <h2 className="section-label">01. Choose Package</h2>
          <div className="grid-packages">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                isSelected={selectedPackage === pkg.id}
                onSelect={(id) => setSelectedPackage(prev => prev === id ? null : id)}
              />
            ))}
          </div>

          {/* Hanya muncul jika paket dipilih */}
          {selectedPackage && (
            <div className="extras-container fade-in">
              <h2 className="section-label">02. Add Features</h2>
              <div className="grid-features">
                {[...featuresList, ...addonsList].map((item) => (
                  <FeatureItem
                    key={item.id}
                    item={item}
                    isSelected={selectedExtras.includes(item.id)}
                    onToggle={(id) => setSelectedExtras(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])}
                    isAddon={addonsList.some(a => a.id === item.id)}
                  />
                ))}
              </div>
            </div>
          )}

          <div style={{ height: '100px' }}></div>
        </div>

        {/* Floating Pill - Hanya muncul jika paket dipilih */}
        {selectedPackage && (
          <div className="floating-pill-wrapper">
            <div className="floating-pill">
              <div className="pill-text">
                <span className="label">ESTIMATION</span>
                <span className="amount">Rp {new Intl.NumberFormat("id-ID").format(totalPrice)}</span>
              </div>
              <button className="btn-consult" onClick={handleCheckout}>
                Consult via WA
              </button>
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
}