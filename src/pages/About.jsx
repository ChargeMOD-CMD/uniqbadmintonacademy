import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { Shield, Users, Rocket } from 'lucide-react';

export const About = () => {
  return (
    <div style={{ paddingTop: 120 }}>
      {/* Header */}
      <section style={{ padding: "80px 6%", textAlign: "center" }}>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ color: theme.colors.accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 16 }}
        >
          Since 2015
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, fontFamily: theme.fonts.heading, marginBottom: 24 }}
        >
          Our Story. Your <span style={{ color: theme.colors.accent }}>Legacy.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: 20, color: theme.colors.textMuted, maxWidth: 700, margin: "0 auto", lineHeight: 1.6 }}
        >
          UNIQ Badminton Academy was founded with a single vision: to create a world-class training ecosystem that nurtures talent and builds champions.
        </motion.p>
      </section>

      {/* Image Grid */}
      <section style={{ padding: "0 6% 100px" }}>
        <div className="responsive-grid" style={{ 
          display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 30,
          borderRadius: 40, overflow: "hidden"
        }}>
          <div style={{ backgroundImage: "url('/about.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div style={{ 
            background: theme.colors.secondary, padding: 60, display: "flex", 
            flexDirection: "column", justifyContent: "center" 
          }}>
            <h3 style={{ fontSize: 32, fontWeight: 800, marginBottom: 24 }}>Beyond Just a Club</h3>
            <p style={{ color: theme.colors.textMuted, fontSize: 17, lineHeight: 1.7 }}>
              We believe that badminton is more than a sport—it's a path to discipline, resilience, and community. Our academy brings together players of all backgrounds to train, compete, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 6%", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }} className="responsive-grid">
          {[
            { icon: <Shield size={32} color={theme.colors.accent} />, title: "Discipline First", desc: "We focus on building strong character through consistent, dedicated training regimes." },
            { icon: <Users size={32} color={theme.colors.blue} />, title: "Community Driven", desc: "A supportive environment where every player is pushed to their personal best by their peers." },
            { icon: <Rocket size={32} color={theme.colors.purple} />, title: "Elite Excellence", desc: "Utilizing modern sports science and video analysis to provide an edge in competitive play." },
          ].map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: 40, background: theme.colors.glass, borderRadius: 32, border: `1px solid ${theme.colors.glassBorder}` }}
            >
              <div style={{ marginBottom: 24 }}>{v.icon}</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>{v.title}</h3>
              <p style={{ color: theme.colors.textMuted, fontSize: 16, lineHeight: 1.6 }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
