import React, { useMemo, useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { theme } from '../theme';

const Feather = ({ count = 20, mouseX, mouseY }) => {
  const feathers = useMemo(() => Array.from({ length: count }), [count]);
  
  return feathers.map((_, i) => {
    const size = Math.random() * 25 + 10;
    const initialX = Math.random() * 100;
    const initialY = Math.random() * 100;
    const duration = Math.random() * 15 + 15;

    return (
      <motion.div
        key={i}
        style={{
          position: "absolute",
          width: size,
          height: size * 1.5,
          background: "rgba(255, 255, 255, 0.04)",
          borderRadius: "50% 50% 10% 10%",
          top: `${initialY}%`,
          left: `${initialX}%`,
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(3px)",
        }}
        animate={{
          y: [0, -150, 0, 150, 0],
          x: [0, 80, 0, -80, 0],
          rotate: [0, 360],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    );
  });
};

const EnergyString = () => {
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05 }} preserveAspectRatio="none">
      {[...Array(3)].map((_, i) => (
        <motion.path
          key={i}
          d={`M 0 ${30 + i * 20} Q 250 ${10 + i * 30}, 500 ${30 + i * 20} T 1000 ${30 + i * 20}`}
          stroke={theme.colors.accent}
          strokeWidth="1"
          fill="none"
          animate={{
            d: [
              `M 0 ${30 + i * 20} Q 250 ${10 + i * 30}, 500 ${30 + i * 20} T 1000 ${30 + i * 20}`,
              `M 0 ${30 + i * 20} Q 250 ${60 + i * 30}, 500 ${30 + i * 20} T 1000 ${30 + i * 20}`,
              `M 0 ${30 + i * 20} Q 250 ${10 + i * 30}, 500 ${30 + i * 20} T 1000 ${30 + i * 20}`,
            ]
          }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
};

export const BackgroundEffects = ({ isHome }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMove = (e) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: -5,
      background: theme.colors.primary,
      overflow: "hidden",
      pointerEvents: "none"
    }}>
      {/* 🔦 Dynamic Mouse Spotlight - This makes it extremely unique */}
      <motion.div 
        style={{
          position: "absolute",
          width: "1000px",
          height: "1000px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.colors.accent}08 0%, transparent 70%)`,
          x: useTransform(springX, (v) => v - 500),
          y: useTransform(springY, (v) => v - 500),
          filter: "blur(60px)",
          zIndex: 1
        }}
      />

      {/* Cinematic Corner Lights */}
      <div style={{
        position: "absolute", top: "-20%", left: "-10%", width: "60%", height: "140%",
        background: `radial-gradient(circle at 0% 0%, ${theme.colors.accent}05 0%, transparent 70%)`,
        transform: "rotate(-15deg)",
      }} />
      <div style={{
        position: "absolute", bottom: "-20%", right: "-10%", width: "60%", height: "140%",
        background: `radial-gradient(circle at 100% 100%, ${theme.colors.blue}05 0%, transparent 70%)`,
        transform: "rotate(-15deg)",
      }} />

      {/* Abstract Parallax Court Grid */}
      <motion.div 
        style={{ 
          position: "absolute", inset: "-10%", 
          opacity: isHome ? 0.04 : 0.08,
          x: useTransform(springX, (v) => (v / window.innerWidth) * -30),
          y: useTransform(springY, (v) => (v / window.innerHeight) * -30),
        }}
      >
        <svg style={{ width: "120%", height: "120%" }} viewBox="0 0 1000 1000">
          <pattern id="premium-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="100" height="100" fill="none" stroke={theme.colors.accent} strokeWidth="0.5" strokeOpacity="0.5" />
            <circle cx="50" cy="50" r="1.5" fill={theme.colors.accent} fillOpacity="0.4" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#premium-grid)" />
        </svg>
      </motion.div>

      {/* Internal Page Energy Effects */}
      {!isHome && (
        <>
          <EnergyString />
          <motion.div 
            style={{
              position: "absolute", inset: 0,
              background: `repeating-linear-gradient(45deg, transparent, transparent 150px, ${theme.colors.accent}02 150px, ${theme.colors.accent}02 151px)`,
            }}
            animate={{ backgroundPosition: ["0px 0px", "300px 300px"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </>
      )}

      {/* Floating Feather Particles */}
      <Feather count={isHome ? 20 : 40} />

      {/* Fine Digital Grain */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity: 0.012,
        mixBlendMode: "overlay"
      }} />
    </div>
  );
};
