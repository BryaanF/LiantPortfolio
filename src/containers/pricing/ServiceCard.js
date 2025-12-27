import React from "react";
import "./Pricing.scss"; // Menggunakan file style yang sama agar terpusat

export default function ServiceCard({ data, isSelected, onToggle, formatPrice }) {
  return (
    <div 
      className={`service-card ${isSelected ? "selected" : ""}`} 
      onClick={onToggle}
    >
      <div className="card-header">
        <h3 className="card-title">{data.title}</h3>
        {isSelected && <span className="check-icon">✓</span>}
      </div>
      <p className="card-desc">{data.desc}</p>
      <div className="card-price">
        {formatPrice(data.price)}
      </div>
    </div>
  );
}