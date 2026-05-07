import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { theme } from '../theme';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Zap, Cpu } from 'lucide-react';
import { BackgroundEffects } from './BackgroundEffects';
import { ChatBot } from './ChatBot';

const ShuttlecockIcon = ({ size = 24, color = theme.colors.accent, opacity = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={{ opacity }}>
    <circle cx="32" cy="48" r="8" fill={color} />
    <path d="M24 40 L16 12 Q32 8 48 12 L40 40" stroke={color} strokeWidth="2" fill="none" />
    <path d="M32 40 L32 12" stroke={color} strokeWidth="1" opacity="0.5" />
    <path d="M28 40 L24 12" stroke={color} strokeWidth="1" opacity="0.3" />
    <path d="M36 40 L40 12" stroke={color} strokeWidth="1" opacity="0.3" />
  </svg>
);

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    style={{
      position: "fixed", inset: 0, background: theme.colors.primary,
      zIndex: 20000, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 32
    }}
  >
    <motion.div
      animate={{ 
        rotate: 360,
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      <ShuttlecockIcon size={80} />
    </motion.div>
    <div style={{ textAlign: "center" }}>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{ fontSize: 24, fontWeight: 900, letterSpacing: "8px", textTransform: "uppercase", color: "#fff", marginBottom: 8 }}
      >
        UNIQ
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{ height: 2, background: theme.colors.accent, margin: "0 auto", borderRadius: 2, boxShadow: `0 0 15px ${theme.colors.accent}` }} 
      />
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
        style={{ fontSize: 10, fontWeight: 800, color: theme.colors.accent, letterSpacing: "3px", textTransform: "uppercase", marginTop: 12 }}
      >
        Initialising Quantum Protocol
      </motion.p>
    </div>
  </motion.div>
);

const CursorTrail = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    const handleOver = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  return (
    <>
      <motion.div
        style={{
          position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 10000,
          x: mouseX, y: mouseY,
          translateX: "-50%", translateY: "-50%",
        }}
      >
        <motion.div
          animate={{ scale: isHovering ? 1.5 : 1, rotate: isHovering ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ShuttlecockIcon size={isHovering ? 48 : 32} color="#b91c1c" />
        </motion.div>
      </motion.div>
      {/* Ghostly Trail */}
      <motion.div
        style={{
          position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999,
          x: trailX, y: trailY,
          translateX: "-50%", translateY: "-50%",
        }}
      >
        <div style={{
          width: 20, height: 20, borderRadius: "50%",
          background: "#b91c1c",
          filter: "blur(8px)",
          opacity: 0.3
        }} />
      </motion.div>
    </>
  );
};

export const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenu(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: "Evolution", path: "/" },
    { name: "The Core", path: "/about" },
    { name: "Mastery", path: "/programs" },
    { name: "The Legends", path: "/coaches" },
    { name: "The Arena", path: "/facilities" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative" }}>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <BackgroundEffects isHome={location.pathname === "/"} />
      <CursorTrail />
      <ChatBot />
      
      <motion.div style={{ 
        scaleX, position: "fixed", top: 0, left: 0, right: 0, height: 3, 
        background: theme.colors.accent, transformOrigin: "0%", zIndex: 1100 
      }} />

      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 150,
        background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.9) 0%, transparent 100%)",
        pointerEvents: "none", zIndex: 999,
        opacity: scrolled ? 0 : 1, transition: "opacity 0.5s ease"
      }} />

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? "12px 6%" : "28px 6%",
        background: scrolled ? "rgba(15, 23, 42, 0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? `1px solid ${theme.colors.accent}30` : "none",
        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none", color: "inherit" }}>
          <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.8, type: "spring" }}>
            <ShuttlecockIcon size={40} />
          </motion.div>
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 950, letterSpacing: "-1.5px", lineHeight: 0.85, color: "#fff" }}>UNIQ</h1>
            <p style={{ fontSize: 9, fontWeight: 800, color: theme.colors.accent, letterSpacing: "4px", textTransform: "uppercase", marginTop: 4 }}>Badminton Academy</p>
          </div>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 40 }} className="desktop-nav">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              style={{
                textDecoration: "none", color: "#fff", fontSize: 13, fontWeight: 800,
                letterSpacing: "1.5px", textTransform: "uppercase",
                opacity: location.pathname === link.path ? 1 : 0.65,
                transition: "0.4s", position: "relative", textShadow: "0 2px 10px rgba(0,0,0,0.5)"
              }}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  style={{ position: "absolute", bottom: -8, left: -4, right: -4, height: 2, background: theme.colors.accent, borderRadius: 2, boxShadow: `0 0 12px ${theme.colors.accent}` }} 
                />
              )}
            </Link>
          ))}
          <Link to="/trial" style={{
            padding: "14px 36px", borderRadius: "12px", background: theme.colors.accent, color: "#fff",
            textDecoration: "none", fontSize: 13, fontWeight: 900, textTransform: "uppercase",
            letterSpacing: "2px", boxShadow: `0 10px 30px ${theme.colors.accent}40`,
            transition: "0.4s", display: "flex", alignItems: "center", gap: 10
          }}>
            Ignite <Zap size={14} fill="currentColor" />
          </Link>
        </div>

        <button 
          onClick={() => setMobileMenu(!mobileMenu)}
          style={{ display: "none", background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", cursor: "pointer", padding: 12, borderRadius: "12px" }}
          className="mobile-toggle"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.98)",
              backdropFilter: "blur(20px)", zIndex: 1200, display: "flex", 
              flexDirection: "column", padding: "100px 10%", gap: 40
            }}
          >
            <button 
              onClick={() => setMobileMenu(false)}
              style={{ position: "absolute", top: 30, right: "6%", background: "none", border: "none", color: "#fff" }}
            >
              <X size={32} />
            </button>
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setMobileMenu(false)}
                style={{ fontSize: 32, fontWeight: 900, color: "#fff", textDecoration: "none" }}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/trial" 
              onClick={() => setMobileMenu(false)}
              style={{ padding: "20px", background: theme.colors.accent, color: "#fff", textAlign: "center", borderRadius: 16, fontSize: 18, fontWeight: 900 }}
            >
              IGNITE NOW
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main style={{ flex: 1, position: "relative", zIndex: 10 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer style={{ 
        padding: "140px 6% 40px", background: "rgba(4, 7, 13, 0.8)", borderTop: `1px solid ${theme.colors.accent}15`,
        color: theme.colors.text, position: "relative", overflow: "hidden", zIndex: 20, backdropFilter: "blur(10px)"
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 1, background: `linear-gradient(90deg, transparent, ${theme.colors.accent}, transparent)`, opacity: 0.4 }} />
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, marginBottom: 100, position: "relative", zIndex: 1 }} className="responsive-grid">
          <div style={{ maxWidth: 450 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
              <ShuttlecockIcon size={44} />
              <h2 style={{ fontSize: 36, fontWeight: 950, letterSpacing: "-1.5px" }}>UNIQ</h2>
              <p style={{ fontSize: 9, fontWeight: 800, color: theme.colors.accent, letterSpacing: "4px", textTransform: "uppercase", marginTop: 4 }}>Badminton Academy</p>
            </div>
            <p style={{ color: theme.colors.textMuted, fontSize: 17, lineHeight: 1.85, marginBottom: 40, opacity: 0.8 }}>We aren't a school. We are a sanctuary for those who seek to redefine the limits of human agility. Welcome to the Quantum era of Badminton.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 900, marginBottom: 36, textTransform: "uppercase", letterSpacing: "3px", color: theme.colors.accent }}>Protocols</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {navLinks.map(link => (
                <Link key={link.name} to={link.path} style={{ color: theme.colors.textMuted, textDecoration: "none", fontSize: 15, fontWeight: 600, transition: "0.3s" }} onMouseEnter={e => e.target.style.color = "#fff"}>{link.name}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 900, marginBottom: 36, textTransform: "uppercase", letterSpacing: "3px", color: theme.colors.accent }}>The Node</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, color: theme.colors.textMuted }}><MapPin size={20} color={theme.colors.accent} /><span style={{ fontSize: 15 }}>The Quantum Vault, Kellys, Chennai</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, color: theme.colors.textMuted }}><Phone size={20} color={theme.colors.accent} /><span style={{ fontSize: 15 }}>+91 75502 28654</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, color: theme.colors.textMuted }}><Mail size={20} color={theme.colors.accent} /><span style={{ fontSize: 15 }}>nexus@uniqbadminton.com</span></div>
            </div>
          </div>
        </div>
        <div className="footer-bottom" style={{ paddingTop: 40, borderTop: `1px solid ${theme.colors.glassBorder}`, display: "flex", justifyContent: "space-between", alignItems: "center", color: "rgba(255,255,255,0.15)", fontSize: 12, fontWeight: 600, letterSpacing: "1px" }}>
          <p>© 2025 UNIQ QUANTUM PROTOCOL. TRANSCENDING PHYSICS.</p>
        <div className="footer-links" style={{ display: "flex", gap: 40 }}><span>Privacy.log</span><span>Terms.exec</span></div>
        </div>

        {/* Back to Top Protocol */}
        <AnimatePresence>
          {scrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                position: "absolute", right: "6%", top: -30,
                width: 60, height: 60, borderRadius: "20px",
                background: theme.colors.primary, border: `1px solid ${theme.colors.accent}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: theme.colors.accent, zIndex: 100,
                boxShadow: `0 10px 30px rgba(0,0,0,0.5)`
              }}
              whileHover={{ y: -5, borderColor: theme.colors.accent }}
            >
              <ChevronRight size={24} style={{ transform: "rotate(-90deg)" }} />
            </motion.button>
          )}
        </AnimatePresence>
      </footer>
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </div>
  );
};
