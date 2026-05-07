import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { Send, CheckCircle, MessageCircle, Mail, ChevronLeft } from 'lucide-react';

export const Enroll = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    experience: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const phoneNumber = "917550228654";
  const academyEmail = "info@uniqbadminton.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const constructMessage = () => {
    return `*Enrollment Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Program:* ${formData.program}%0A*Experience:* ${formData.experience}`;
  };

  const inputStyle = {
    width: "100%", padding: "18px 24px", background: "rgba(30, 41, 59, 0.8)", 
    border: `1px solid ${theme.colors.glassBorder}`, borderRadius: "16px", color: "#fff", 
    fontSize: 16, outline: "none", transition: "0.3s", fontFamily: theme.fonts.body
  };

  return (
    <div style={{ paddingTop: 120 }}>
      <section style={{ padding: "80px 6%", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, fontFamily: theme.fonts.heading, marginBottom: 24 }}>
          {submitted ? "Choose Submission Channel" : "Join the Team."}
        </h1>
        <p style={{ fontSize: 20, color: theme.colors.textMuted, maxWidth: 700, margin: "0 auto" }}>
          {submitted 
            ? "Your details are ready. Select how you would like to send them to our academy."
            : "Fill out your details and we'll contact you within 24 hours to finalize your enrollment."}
        </p>
      </section>

      <section style={{ padding: "0 6% 120px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card"
              style={{ padding: "60px", textAlign: "center" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30, marginBottom: 40 }} className="responsive-grid">
                <a 
                  href={`https://wa.me/${phoneNumber}?text=${constructMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "40px 30px", borderRadius: "24px", background: "rgba(37, 211, 102, 0.1)",
                    border: "1px solid rgba(37, 211, 102, 0.3)", textDecoration: "none", color: "#fff",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 20, transition: "0.4s"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#25D366";
                    e.currentTarget.style.transform = "translateY(-10px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(37, 211, 102, 0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <MessageCircle size={48} />
                  <span style={{ fontWeight: 800, fontSize: 18, textTransform: "uppercase", letterSpacing: "1px" }}>Send via WhatsApp</span>
                </a>

                <a 
                  href={`mailto:${academyEmail}?subject=Enrollment Request - ${formData.name}&body=${constructMessage().replace(/%0A/g, '\n')}`}
                  style={{
                    padding: "40px 30px", borderRadius: "24px", background: "rgba(56, 189, 248, 0.1)",
                    border: "1px solid rgba(56, 189, 248, 0.3)", textDecoration: "none", color: "#fff",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 20, transition: "0.4s"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = theme.colors.blue;
                    e.currentTarget.style.transform = "translateY(-10px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Mail size={48} />
                  <span style={{ fontWeight: 800, fontSize: 18, textTransform: "uppercase", letterSpacing: "1px" }}>Send via Email</span>
                </a>
              </div>
              
              <button 
                onClick={() => setSubmitted(false)}
                style={{ background: "none", border: "none", color: theme.colors.textMuted, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, margin: "0 auto", fontWeight: 700 }}
              >
                <ChevronLeft size={16} /> Edit Details
              </button>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleFormSubmit} 
              className="glass-card"
              style={{ padding: 60 }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }} className="responsive-grid">
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 12, color: theme.colors.textMuted }}>Full Name</label>
                  <input name="name" type="text" required style={inputStyle} value={formData.name} onChange={handleChange} placeholder="John Doe" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 12, color: theme.colors.textMuted }}>Email Address</label>
                  <input name="email" type="email" required style={inputStyle} value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }} className="responsive-grid">
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 12, color: theme.colors.textMuted }}>Phone Number</label>
                  <input name="phone" type="tel" required style={inputStyle} value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 12, color: theme.colors.textMuted }}>Target Program</label>
                  <select name="program" required style={inputStyle} value={formData.program} onChange={handleChange}>
                    <option value="" disabled>Select a program</option>
                    <option value="Junior Academy">Junior Academy</option>
                    <option value="Pro Competitive">Pro Competitive</option>
                    <option value="Adult Intensive">Adult Intensive</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 40 }}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 12, color: theme.colors.textMuted }}>Experience Level & Goals</label>
                <textarea name="experience" rows="4" style={inputStyle} value={formData.experience} onChange={handleChange} placeholder="Tell us about your background..."></textarea>
              </div>

              <button 
                type="submit" 
                style={{
                  width: "100%", padding: "22px", borderRadius: "18px", background: theme.colors.accent, color: "#fff",
                  border: "none", fontSize: 18, fontWeight: 900, cursor: "pointer", 
                  boxShadow: `0 20px 40px rgba(34, 197, 94, 0.3)`, transition: "0.4s",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
                  textTransform: "uppercase", letterSpacing: "2px"
                }}
              >
                Proceed to Submit <Send size={20} />
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
};
