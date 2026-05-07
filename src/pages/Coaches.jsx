import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { Award, Star, Activity } from 'lucide-react';

export const Coaches = () => {
  const coaches = [
    {
      name: "Arun Kumar",
      role: "Head Coach & Founder",
      exp: "15+ Years",
      achievements: "National Level Player, BWF Certified Coach",
      specialty: "Advanced Tactical Match Play",
      initials: "AK",
      color: theme.colors.accent
    },
    {
      name: "Priya Sharma",
      role: "Senior Development Coach",
      exp: "10+ Years",
      achievements: "State Champion, Junior Training Expert",
      specialty: "Technical Precision & Footwork",
      initials: "PS",
      color: theme.colors.blue
    },
    {
      name: "Rajan Suresh",
      role: "Fitness & Performance Coach",
      exp: "8+ Years",
      achievements: "Certified Athletic Trainer",
      specialty: "Agility & Explosive Power",
      initials: "RS",
      color: theme.colors.gold
    }
  ];

  return (
    <div style={{ paddingTop: 120 }}>
      <section style={{ padding: "80px 6%", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, fontFamily: theme.fonts.heading, marginBottom: 24 }}>Expert <span style={{ color: theme.colors.accent }}>Coaches.</span></h1>
        <p style={{ fontSize: 20, color: theme.colors.textMuted, maxWidth: 700, margin: "0 auto" }}>Learn from champions who have mastered the game at the highest levels.</p>
      </section>

      {/* Hero Image for Coaches */}
      <section style={{ padding: "0 6% 80px" }}>
        <div style={{ 
          height: "clamp(300px, 40vh, 400px)", borderRadius: "clamp(24px, 5vw, 40px)", overflow: "hidden", 
          backgroundImage: `url('${import.meta.env.BASE_URL}coaches.png')`, backgroundSize: "cover", backgroundPosition: "center",
          display: "flex", alignItems: "flex-end", padding: "clamp(24px, 6vw, 60px)"
        }}>
          <div style={{ 
            padding: "clamp(20px, 4vw, 24px) clamp(24px, 5vw, 40px)", borderRadius: 24, background: "rgba(15, 23, 42, 0.6)", 
            backdropFilter: "blur(20px)", border: `1px solid ${theme.colors.glassBorder}` 
          }} className="mobile-text-center">
            <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800 }}>Master Your Craft</h2>
            <p style={{ color: theme.colors.textMuted, fontSize: "clamp(14px, 3vw, 16px)" }}>Personalized guidance for every player.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 6% 120px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 30 }} className="responsive-grid">
        {coaches.map((c, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card mobile-text-center"
            style={{ padding: "clamp(30px, 8vw, 50px)", textAlign: "center" }}
          >
            <div style={{ 
              width: 100, height: 100, borderRadius: "50%", background: `${c.color}15`, 
              border: `2px solid ${c.color}40`, display: "flex", alignItems: "center", 
              justifyContent: "center", fontSize: 32, fontWeight: 900, color: c.color,
              margin: "0 auto 32px", fontFamily: theme.fonts.heading
            }}>
              {c.initials}
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>{c.name}</h3>
            <p style={{ color: c.color, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 32 }}>{c.role}</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 20, textAlign: "left" }}>
              <div style={{ display: "flex", gap: 12 }}>
                <Star size={18} color={theme.colors.accent} style={{ flexShrink: 0 }} />
                <p style={{ fontSize: 15, color: theme.colors.textMuted }}><span style={{ color: "#fff", fontWeight: 600 }}>Experience:</span> {c.exp}</p>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <Award size={18} color={theme.colors.gold} style={{ flexShrink: 0 }} />
                <p style={{ fontSize: 15, color: theme.colors.textMuted }}><span style={{ color: "#fff", fontWeight: 600 }}>Achievements:</span> {c.achievements}</p>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <Activity size={18} color={theme.colors.blue} style={{ flexShrink: 0 }} />
                <p style={{ fontSize: 15, color: theme.colors.textMuted }}><span style={{ color: "#fff", fontWeight: 600 }}>Focus:</span> {c.specialty}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
