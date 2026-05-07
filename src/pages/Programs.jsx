import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const Programs = () => {
  const programs = [
    {
      title: "Junior Academy",
      age: "5 - 12 Years",
      level: "Beginner",
      desc: "Laying the foundations of badminton. Focus on hand-eye coordination, basic footwork, and having fun while learning the right technique.",
      features: ["Grip & Swing Basics", "Fundamental Footwork", "Game Rules & Etiquette", "Agility Games"],
      color: theme.colors.blue,
      price: "₹3,500/mo"
    },
    {
      title: "Pro Competitive",
      age: "12 - 22 Years",
      level: "Intermediate/Advanced",
      desc: "For the serious athlete. High-intensity training focused on tactical dominance, explosive power, and tournament preparation.",
      features: ["Tactical Match Play", "Advanced Net Mastery", "Video Analysis", "Peak Conditioning"],
      color: theme.colors.accent,
      price: "₹6,000/mo",
      featured: true
    },
    {
      title: "Adult Intensive",
      age: "23+ Years",
      level: "All Skill Levels",
      desc: "Designed for working professionals. Improve your fitness and technical skills with flexible evening and weekend batches.",
      features: ["Technical Refinement", "Cardio Conditioning", "Social Match Play", "Flexible Scheduling"],
      color: theme.colors.purple,
      price: "₹4,500/mo"
    }
  ];

  return (
    <div style={{ paddingTop: 120 }}>
      <section style={{ padding: "80px 6%", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, fontFamily: theme.fonts.heading, marginBottom: 24 }}>Training <span style={{ color: theme.colors.accent }}>Programs.</span></h1>
        <p style={{ fontSize: 20, color: theme.colors.textMuted, maxWidth: 700, margin: "0 auto" }}>Choose the program that fits your ambition. From first smash to final victory.</p>
      </section>

      <section style={{ padding: "0 6% 120px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(20px, 4vw, 30px)" }} className="responsive-grid">
        {programs.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card mobile-text-center"
            style={{ 
              padding: "clamp(30px, 8vw, 50px)", borderRadius: 40,
              border: p.featured ? `2px solid ${p.color}50` : `1px solid ${theme.colors.glassBorder}`,
              position: "relative",
              display: "flex", flexDirection: "column"
            }}
          >
            {p.featured && (
              <div style={{ position: "absolute", top: 30, right: 30, background: theme.colors.accent, color: "#fff", fontSize: 10, fontWeight: 800, padding: "6px 16px", borderRadius: 100, textTransform: "uppercase", letterSpacing: "1px" }}>Most Popular</div>
            )}
            
            <div style={{ color: p.color, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 12 }}>{p.level}</div>
            <h3 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>{p.title}</h3>
            <p style={{ fontSize: 14, color: theme.colors.textMuted, marginBottom: 24 }}>Age Group: {p.age}</p>
            
            <p style={{ color: theme.colors.textMuted, fontSize: 16, lineHeight: 1.6, marginBottom: 32, flex: 1 }}>{p.desc}</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }} className="mobile-text-center">
              {p.features.map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 12 }} className="mobile-flex-center">
                  <CheckCircle2 size={18} color={p.color} />
                  <span style={{ fontSize: 15, fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: `1px solid ${theme.colors.glassBorder}`, paddingTop: 32, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }} className="footer-bottom">
              <div className="mobile-text-center">
                <span style={{ fontSize: 24, fontWeight: 900 }}>{p.price}</span>
                <span style={{ fontSize: 14, color: theme.colors.textMuted }}> / month</span>
              </div>
              <Link to="/enroll" style={{ 
                background: p.color, color: "#fff", border: "none", padding: "16px 36px", 
                borderRadius: "16px", fontWeight: 900, cursor: "pointer", fontSize: 14,
                textDecoration: "none", display: "flex", alignItems: "center", gap: 8,
                textTransform: "uppercase", letterSpacing: "1px",
                boxShadow: `0 10px 20px ${p.color}30`,
                width: "fit-content"
              }}>
                Enroll Now <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
