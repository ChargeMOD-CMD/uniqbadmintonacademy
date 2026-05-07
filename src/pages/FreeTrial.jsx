import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { Calendar, Clock, Star, Mail, Phone, MessageCircle, ChevronRight, MapPin, Navigation } from 'lucide-react';

export const FreeTrial = () => {
  const phoneNumber = "917550228654";
  const email = "info@uniqbadminton.com";

  const contactOptions = [
    {
      name: "WhatsApp",
      icon: <MessageCircle size={20} />,
      link: `https://wa.me/${phoneNumber}?text=Hello! I would like to request a Free Trial slot at UNIQ Badminton Academy.`,
      color: "#25D366",
      bg: "rgba(37, 211, 102, 0.1)"
    },
    {
      name: "Email Request",
      icon: <Mail size={20} />,
      link: `mailto:${email}?subject=Free Trial Slot Request`,
      color: theme.colors.blue,
      bg: "rgba(56, 189, 248, 0.1)"
    },
    {
      name: "Direct Call",
      icon: <Phone size={20} />,
      link: `tel:+${phoneNumber}`,
      color: theme.colors.accent,
      bg: "rgba(34, 197, 94, 0.1)"
    }
  ];

  return (
    <div style={{ paddingTop: 120 }}>
      {/* Hero Header */}
      <section style={{ padding: "80px 6%", textAlign: "center" }}>
        <h1 className="holographic-text" style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 950, fontFamily: theme.fonts.heading, marginBottom: 24, letterSpacing: "-3px" }}>
          Ignite Your <span style={{ color: theme.colors.accent }}>Journey.</span>
        </h1>
        <p style={{ fontSize: 20, color: theme.colors.textMuted, maxWidth: 700, margin: "0 auto", fontWeight: 500 }}>
          Your first step towards mastery is just a message or call away. Choose your preferred channel to book your evaluation.
        </p>
      </section>

      {/* Evaluation Protocol Card */}
      <section style={{ padding: "0 6% 80px" }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card responsive-grid"
          style={{ 
            display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40,
            overflow: "hidden", border: `1px solid ${theme.colors.accent}20`
          }}
        >
          <div style={{ backgroundImage: `url('${import.meta.env.BASE_URL}trial.png')`, backgroundSize: "cover", backgroundPosition: "center", minHeight: 600 }} />
          
          <div style={{ padding: 60, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={theme.colors.gold} color={theme.colors.gold} />)}
            </div>
            <h2 style={{ fontSize: 42, fontWeight: 950, marginBottom: 28, letterSpacing: "-1.5px" }}>The Evaluation Protocol</h2>
            <p style={{ color: theme.colors.textMuted, fontSize: 18, lineHeight: 1.8, marginBottom: 48 }}>
              Experience the UNIQ difference. Our 60-minute evaluation protocol includes technical baseline assessment, footwork calibration, and a customized growth roadmap.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 60 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 56, height: 56, borderRadius: "18px", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${theme.colors.glassBorder}` }}>
                  <Calendar size={24} color={theme.colors.accent} />
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 18 }}>The Arena is Open</p>
                  <p style={{ color: theme.colors.textMuted, fontSize: 15 }}>Monday - Sunday Training Windows</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 56, height: 56, borderRadius: "18px", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${theme.colors.glassBorder}` }}>
                  <Clock size={24} color={theme.colors.blue} />
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 18 }}>Peak Slots</p>
                  <p style={{ color: theme.colors.textMuted, fontSize: 15 }}>Dawn (5AM) & Dusk (5PM) Sessions</p>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contactOptions.map(option => (
                <a 
                  key={option.name}
                  href={option.link}
                  target={option.name === "WhatsApp" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "20px 32px", borderRadius: "16px", background: option.bg,
                    border: `1px solid ${option.color}30`, textDecoration: "none",
                    color: "#fff", transition: "0.4s"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ color: option.color }}>{option.icon}</div>
                    <span style={{ fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: "1px" }}>{option.name}</span>
                  </div>
                  <ChevronRight size={18} opacity={0.5} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* The Nexus Protocol: Location Section */}
      <section style={{ padding: "0 6% 120px" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 className="holographic-text" style={{ fontSize: 48, fontWeight: 950, marginBottom: 16, letterSpacing: "-2px" }}>The Nexus Protocol</h2>
          <p style={{ color: theme.colors.textMuted, fontSize: 18 }}>Strategic location for high-performance training.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card responsive-grid"
          style={{ 
            padding: "20px", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 20,
            border: `1px solid ${theme.colors.accent}15`
          }}
        >
          {/* Map Info */}
          <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ padding: 12, background: "rgba(34, 197, 94, 0.1)", borderRadius: "12px" }}>
                  <MapPin size={24} color={theme.colors.accent} />
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 900 }}>Academy HQ</h3>
              </div>
              <p style={{ color: theme.colors.textMuted, fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
                The Quantum Vault,<br />
                Kellys, Chennai,<br />
                Tamil Nadu - 600010
              </p>
            </div>

            <div style={{ padding: "24px", background: "rgba(255,255,255,0.03)", borderRadius: "20px", border: `1px solid ${theme.colors.glassBorder}` }}>
              <h4 style={{ fontSize: 14, fontWeight: 900, color: theme.colors.accent, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 16 }}>Operational Hours</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15 }}>
                  <span style={{ color: theme.colors.textMuted }}>Mon - Sat</span>
                  <span style={{ fontWeight: 700 }}>5 AM - 10 PM</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15 }}>
                  <span style={{ color: theme.colors.textMuted }}>Sunday</span>
                  <span style={{ fontWeight: 700 }}>6 AM - 8 PM</span>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/YourLocationID" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
                padding: "20px", borderRadius: "16px", background: theme.colors.accent,
                color: "#fff", fontWeight: 900, textDecoration: "none", textTransform: "uppercase",
                letterSpacing: "2px", boxShadow: `0 15px 30px ${theme.colors.accent}25`, transition: "0.3s"
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              Get Directions <Navigation size={20} />
            </a>
          </div>

          {/* Styled Map Container */}
          <div style={{ 
            borderRadius: "32px", overflow: "hidden", minHeight: 500, position: "relative",
            border: `1px solid ${theme.colors.glassBorder}`
          }}>
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2847!2d80.2415!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52660000000001%3A0x0!2zS2VsbHlzLCBDaGVubmFp!5e0!3m2!1sen!2sin!4v1715060000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0, opacity: 0.9 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};
