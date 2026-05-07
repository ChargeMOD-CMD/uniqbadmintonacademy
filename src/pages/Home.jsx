import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Zap, Trophy, Cpu, Flame, Shield } from 'lucide-react';

export const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* Hero: The Evolution */}
      <section style={{ 
        position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", 
        padding: "0 6%", overflow: "hidden", background: theme.colors.primary
      }}>
        {/* Background Layer */}
        <div style={{
          position: "absolute", inset: 0, 
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover", backgroundPosition: "center",
          zIndex: 1, transform: "scale(1.02)"
        }} />
        
        {/* Softer, more transparent gradient to show the image */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(15, 23, 42, 0.95) 20%, rgba(15, 23, 42, 0.2) 100%)",
          zIndex: 2
        }} />

        {/* Artistic Court Lines Overlay */}
        <div style={{
          position: "absolute", inset: "10%",
          border: `1px solid ${theme.colors.accent}15`,
          pointerEvents: "none",
          zIndex: 3
        }} />

        <div style={{ maxWidth: 850, position: "relative", zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ 
              display: "inline-flex", alignItems: "center", gap: 12, 
              padding: "10px 24px", borderRadius: "14px", background: "rgba(34, 197, 94, 0.15)",
              border: `1px solid ${theme.colors.accent}40`, marginBottom: 36,
              backdropFilter: "blur(10px)"
            }}
          >
            <Cpu size={16} color={theme.colors.accent} />
            <span style={{ fontSize: 12, fontWeight: 800, color: theme.colors.accentLight, letterSpacing: "3px", textTransform: "uppercase" }}>
              The Quantum Era of Badminton
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="holographic-text"
            style={{ fontSize: "clamp(58px, 10vw, 110px)", fontWeight: 950, lineHeight: 0.85, marginBottom: 36, letterSpacing: "-4px" }}
          >
            Evolve <br />
            Beyond Physics.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: 22, color: theme.colors.textMuted, maxWidth: 650, marginBottom: 56, lineHeight: 1.6, fontWeight: 500 }}
          >
            We don't teach you to play. We re-engineer your reflexes, calibrate your precision, and unleash your tactical spirit. Welcome to the UNIQ Evolution.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: "flex", gap: 24, flexWrap: "wrap" }}
          >
            <Link to="/enroll" style={{
              padding: "22px 52px", borderRadius: "14px", background: theme.colors.accent, color: "#fff",
              textDecoration: "none", fontSize: 16, fontWeight: 900, textTransform: "uppercase",
              letterSpacing: "2px", boxShadow: `0 20px 40px ${theme.colors.accent}35`, transition: "0.4s",
              display: "flex", alignItems: "center", gap: 12
            }}>
              Begin Protocol <ChevronRight size={20} />
            </Link>
            <Link to="/programs" style={{
              padding: "22px 52px", borderRadius: "14px", background: "rgba(255,255,255,0.05)", 
              border: `1px solid ${theme.colors.glassBorder}`, color: "#fff", fontSize: 16, fontWeight: 800, 
              textDecoration: "none", backdropFilter: "blur(20px)", transition: "0.4s",
              textTransform: "uppercase", letterSpacing: "2px",
              display: "flex", alignItems: "center", gap: 12
            }}>
              The Mastery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Core Matrix: Stats */}
      <section style={{ padding: "100px 6%", position: "relative", zIndex: 10, marginTop: "-120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }} className="responsive-grid">
          {[
            { label: "Elite Operatives", value: "500+", icon: <Target color={theme.colors.accent} />, desc: "Players training at peak capacity." },
            { label: "The Mentors", value: "12", icon: <Shield color={theme.colors.blue} />, desc: "Masters of technical precision." },
            { label: "Victory Points", value: "85+", icon: <Trophy color={theme.colors.gold} />, desc: "Trophies across state & national." },
            { label: "Legacy Nodes", value: "10+", icon: <Flame color={theme.colors.purple} />, desc: "Years of refining excellence." },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card"
              style={{ padding: "48px 40px", textAlign: "left" }}
            >
              <div style={{ marginBottom: 24, width: 48, height: 48, borderRadius: "14px", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2 }}>{stat.icon}</div>
              <h2 style={{ fontSize: 56, fontWeight: 950, marginBottom: 8, color: "#fff", letterSpacing: "-2px", position: "relative", zIndex: 2 }}>{stat.value}</h2>
              <p style={{ color: theme.colors.accent, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 12, position: "relative", zIndex: 2 }}>{stat.label}</p>
              <p style={{ color: theme.colors.textMuted, fontSize: 14, lineHeight: 1.5, position: "relative", zIndex: 2 }}>{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Arena Entry CTA */}
      <section style={{ padding: "120px 6%" }}>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="glass-card"
          style={{ 
            background: `radial-gradient(circle at top left, ${theme.colors.accent}20, transparent), #0f172a`,
            borderRadius: "48px", padding: "100px 80px", border: `1px solid ${theme.colors.accent}30`,
            display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 60,
            position: "relative", overflow: "hidden"
          }}
        >
          <div style={{ maxWidth: 650, position: "relative", zIndex: 2 }}>
            <h2 className="holographic-text" style={{ fontSize: 52, fontWeight: 900, marginBottom: 28, lineHeight: 1.1, letterSpacing: "-2px" }}>Ignite Your Inner Champion.</h2>
            <p style={{ fontSize: 20, color: theme.colors.textMuted, lineHeight: 1.7, fontWeight: 500 }}>
              The first evaluation is more than a test. It's the beginning of your high-performance legacy. Step into the arena.
            </p>
          </div>
          <Link to="/trial" style={{
            position: "relative", zIndex: 2,
            padding: "28px 72px", borderRadius: "18px", background: theme.colors.accent, color: "#fff",
            textDecoration: "none", fontSize: 20, fontWeight: 950, transition: "0.4s",
            boxShadow: `0 30px 60px ${theme.colors.accent}30`,
            textTransform: "uppercase", letterSpacing: "2px"
          }}>
            Secure Your Slot
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
