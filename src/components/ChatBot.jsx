import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../theme';
import { MessageSquare, X, Send, Cpu, Zap, Activity } from 'lucide-react';

const ShuttlecockIcon = ({ size = 24, color = theme.colors.accent }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="48" r="8" fill={color} />
    <path d="M24 40 L16 12 Q32 8 48 12 L40 40" stroke={color} strokeWidth="2" fill="none" />
  </svg>
);

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Protocol Initialised. I am NEXUS AI. How can I assist your evolution today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulated AI Intelligence
    setTimeout(() => {
      let aiResponse = "Calculating technical parameters... Your request is being analyzed by the Quantum Core.";
      
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('fee') || lowerInput.includes('price')) {
        aiResponse = "Enrollment protocols vary by intensity. Our Pro Competitive modules starting at optimal efficiency. Would you like to view the Mastery programs?";
      } else if (lowerInput.includes('location') || lowerInput.includes('where')) {
        aiResponse = "The Nexus is located at Kellys, Chennai. Strategic coordinates are logged in the 'Ignite' protocol page.";
      } else if (lowerInput.includes('trial') || lowerInput.includes('join')) {
        aiResponse = "Evaluation slots are limited. Deploy to the 'Ignite' page to secure your technical assessment.";
      } else if (lowerInput.includes('coach')) {
        aiResponse = "Our Legends are BWF-certified technical masters. They specialize in technical precision and tactical evolution.";
      }

      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
            className="glass-card chat-window"
            style={{
              width: "clamp(280px, 92vw, 400px)", height: "clamp(450px, 70vh, 550px)", marginBottom: 24,
              display: "flex", flexDirection: "column", border: `1px solid ${theme.colors.accent}40`,
              boxShadow: `0 30px 60px rgba(0,0,0,0.5)`, overflow: "hidden",
              position: "relative"
            }}
          >
            {/* Header */}
            <div style={{ 
              padding: "20px 24px", background: "rgba(34, 197, 94, 0.1)", 
              borderBottom: `1px solid ${theme.colors.glassBorder}`,
              display: "flex", alignItems: "center", justifyContent: "space-between"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ padding: 8, background: theme.colors.accent, borderRadius: 8 }}>
                  <Cpu size={18} color="#fff" />
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 900, letterSpacing: "1px" }}>NEXUS AI</h4>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: theme.colors.accent }} />
                    <span style={{ fontSize: 10, color: theme.colors.accent, fontWeight: 800, textTransform: "uppercase" }}>Quantum Core Active</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}><X size={20} /></button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              style={{ flex: 1, padding: 24, overflowY: "auto", display: "flex", flexDirection: "column", gap: 20 }}
            >
              {messages.map((m, i) => (
                <div key={i} style={{ 
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: "85%", textAlign: m.role === 'user' ? 'right' : 'left'
                }}>
                  <div style={{ 
                    padding: "14px 18px", borderRadius: m.role === 'user' ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                    background: m.role === 'user' ? theme.colors.accent : "rgba(255,255,255,0.05)",
                    border: `1px solid ${m.role === 'user' ? 'transparent' : theme.colors.glassBorder}`,
                    fontSize: 14, fontWeight: 500, lineHeight: 1.5, color: "#fff"
                  }}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div style={{ alignSelf: 'flex-start', display: "flex", gap: 8, padding: 12, background: "rgba(255,255,255,0.03)", borderRadius: 16 }}>
                  {[0, 1, 2].map(i => (
                    <motion.div 
                      key={i}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                      style={{ width: 4, height: 4, borderRadius: "50%", background: theme.colors.accent }} 
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div style={{ padding: 20, borderTop: `1px solid ${theme.colors.glassBorder}`, background: "rgba(15, 23, 42, 0.4)" }}>
              <div style={{ position: "relative", display: "flex", gap: 12 }}>
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Enter tactical query..."
                  style={{ 
                    flex: 1, background: "rgba(30, 41, 59, 0.8)", border: `1px solid ${theme.colors.glassBorder}`,
                    borderRadius: 14, padding: "12px 18px", color: "#fff", outline: "none", fontSize: 14
                  }}
                />
                <button 
                  onClick={handleSend}
                  style={{ 
                    width: 44, height: 44, borderRadius: 12, background: theme.colors.accent, 
                    border: "none", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", transition: "0.3s"
                  }}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="chat-toggle"
        style={{
          width: 72, height: 72, borderRadius: "24px", 
          background: isOpen ? theme.colors.primary : theme.colors.accent,
          border: `2px solid ${theme.colors.accent}60`,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", boxShadow: `0 20px 40px ${theme.colors.accent}30`,
          position: "relative", overflow: "hidden"
        }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          {isOpen ? <X color="#fff" size={32} /> : <ShuttlecockIcon size={40} color="#fff" />}
        </motion.div>
        <div style={{ 
          position: "absolute", inset: 0, 
          background: `radial-gradient(circle at center, ${theme.colors.accent}40, transparent)`,
          opacity: isOpen ? 1 : 0
        }} />
      </motion.button>
    </div>
  );
};
