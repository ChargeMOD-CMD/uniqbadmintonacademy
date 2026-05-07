import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { Wind, Lightbulb, UserCheck, ShieldCheck } from 'lucide-react';

export const Facilities = () => {
  const items = [
    { icon: <ShieldCheck size={32} color={theme.colors.accent} />, title: "Pro BWF Courts", desc: "Certified synthetic mats with advanced shock absorption flooring." },
    { icon: <Lightbulb size={32} color={theme.colors.gold} />, title: "Precision Lighting", desc: "Anti-glare high-intensity LED systems for perfect visibility." },
    { icon: <Wind size={32} color={theme.colors.blue} />, title: "Climate Control", desc: "Optimized ventilation and cooling systems for comfortable play." },
    { icon: <UserCheck size={32} color={theme.colors.purple} />, title: "Video Analysis", desc: "Multi-angle camera setups for technical review and coaching." },
  ];

  return (
    <div style={{ paddingTop: 120 }}>
      <section style={{ padding: "80px 6%", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, fontFamily: theme.fonts.heading, marginBottom: 24 }}>World-Class <span style={{ color: theme.colors.accent }}>Facilities.</span></h1>
        <p style={{ fontSize: 20, color: theme.colors.textMuted, maxWidth: 700, margin: "0 auto" }}>Train in a professional environment designed for peak performance and safety.</p>
      </section>

      {/* Main Image */}
      <section style={{ padding: "0 6% 100px" }}>
        <div className="responsive-grid" style={{ 
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: 30, background: theme.colors.secondary, borderRadius: 40, overflow: "hidden" 
        }}>
          <div style={{ backgroundImage: `url('${import.meta.env.BASE_URL}court.png')`, backgroundSize: "cover", backgroundPosition: "center", minHeight: 400 }} />
          <div style={{ padding: "clamp(30px, 8vw, 60px)", display: "flex", flexDirection: "column", justifyContent: "center" }} className="mobile-text-center">
            <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, marginBottom: 24 }}>Professional Infrastructure</h2>
            <p style={{ color: theme.colors.textMuted, fontSize: "clamp(16px, 3vw, 18px)", lineHeight: 1.7, marginBottom: 40 }}>
              Our facility spans over 12,000 sq.ft featuring 8 professional-grade courts. We've invested in the best technology to ensure that your training is effective, safe, and professional.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 30 }} className="responsive-grid">
              {items.map((item, i) => (
                <div key={i}>
                  <div style={{ marginBottom: 16 }}>{item.icon}</div>
                  <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{item.title}</h4>
                  <p style={{ color: theme.colors.textMuted, fontSize: 14 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
