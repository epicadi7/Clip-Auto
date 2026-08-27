"use client";

import { useState } from "react";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState("");

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div style={styles.page}>
      {/* Background texture layer */}
      <div style={styles.bgBlobTopLeft} />
      <div style={styles.bgBlobTopRight} />
      <div style={styles.bgBlobBottom} />
      <div style={styles.grain} />

      {/* Nav */}
      <nav style={styles.nav}>
        <div style={styles.navCol}>
          <div style={styles.logo}>
            <span style={styles.logoMark}>◆</span> ClipAuto
          </div>
        </div>
        <div style={{ ...styles.navCol, ...styles.navLinks }}>
          <button onClick={() => scrollToSection("features")} style={styles.navLink}>Features</button>
          <button onClick={() => scrollToSection("how")} style={styles.navLink}>How it works</button>
          <button onClick={() => scrollToSection("pricing")} style={styles.navLink}>Pricing</button>
        </div>
        <div style={{ ...styles.navCol, ...styles.navActions }}>
         <a href="/login" style={styles.signInLink}>Sign in</a>
<a href="/login" style={styles.ctaButton}>Sign up — it's free</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.badge}>✦ AI-powered clipping</div>
        <h1 style={styles.heroTitle}>
          Turn long videos into
          <br />
          <span style={styles.heroTitleGradient}>viral clips instantly</span>
        </h1>
        <p style={styles.heroSubtitle}>
          Drop a link, let the AI find the best moments, and publish
          scroll-stopping clips in minutes — no editing skills required.
        </p>

        <div style={styles.inputRow}>
          <span style={styles.linkIcon}>🔗</span>
          <input
            style={styles.input}
            placeholder="Paste a YouTube or video link..."
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
          <button style={styles.getClipsButton}>Get clips</button>
        </div>

        {/* Sample clip cards */}
        <div style={styles.clipRow}>
          {[
            { platform: "▶", score: 97, color: "#ff4d5e" },
            { platform: "◎", score: 99, color: "#c86dd7" },
            { platform: "in", score: 95, color: "#4d7fff" },
            { platform: "♪", score: 98, color: "#1c1c1c" },
            { platform: "f", score: 93, color: "#4267ff" },
          ].map((clip, i) => (
            <div key={i} style={styles.clipCard}>
              <div style={styles.clipThumb}>
                <div
                  style={{
                    ...styles.platformDot,
                    background: clip.color,
                  }}
                >
                  {clip.platform}
                </div>
              </div>
              <div style={styles.scoreBadge}>SCORE {clip.score}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section style={styles.statsSection}>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>280+</div>
          <div style={styles.statLabel}>Hours processed daily</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>2.3M+</div>
          <div style={styles.statLabel}>Clips generated</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>99.9%</div>
          <div style={styles.statLabel}>Uptime</div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={styles.features}>
        <h2 style={styles.sectionTitle}>Everything you need to go viral</h2>
        <div style={styles.featureGrid}>
          {[
            { title: "Auto Import", desc: "Pulls the latest videos from your channel automatically." },
            { title: "AI Highlight Detection", desc: "Finds the most engaging moments in any video, instantly." },
            { title: "Auto Captions", desc: "Burns in clean, styled captions with zero manual work." },
            { title: "One-click Publish", desc: "Push finished clips straight to every platform you use." },
          ].map((f, i) => (
            <div key={i} style={styles.featureCard}>
              <div style={styles.featureIcon} />
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={styles.features}>
        <h2 style={styles.sectionTitle}>How it works</h2>
        <div style={styles.featureGrid}>
          {[
            { step: "1", title: "Drop a link", desc: "Paste any long-form video URL to get started." },
            { step: "2", title: "AI finds the highlights", desc: "Our model scans the video and scores the most shareable moments." },
            { step: "3", title: "Publish everywhere", desc: "Export ready-to-post clips, captioned and formatted for every platform." },
          ].map((s, i) => (
            <div key={i} style={styles.featureCard}>
              <div style={styles.stepNumber}>{s.step}</div>
              <h3 style={styles.featureTitle}>{s.title}</h3>
              <p style={styles.featureDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={styles.features}>
        <h2 style={styles.sectionTitle}>Simple pricing</h2>
        <div style={styles.featureGrid}>
          {[
            { plan: "Free", price: "$0", desc: "A few clips a month to try it out." },
            { plan: "Pro", price: "$29/mo", desc: "Unlimited clips, priority processing, no watermark." },
            { plan: "Team", price: "$99/mo", desc: "Everything in Pro, plus shared workspaces and scheduling." },
          ].map((p, i) => (
            <div key={i} style={styles.featureCard}>
              <h3 style={styles.featureTitle}>{p.plan}</h3>
              <div style={styles.priceNumber}>{p.price}</div>
              <p style={styles.featureDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <span>© 2026 ClipForge. All rights reserved.</span>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    background: "#050505",
    color: "#f5f5f7",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  bgBlobTopLeft: {
    position: "absolute",
    top: "-200px",
    left: "-150px",
    width: "600px",
    height: "600px",
    background:
      "radial-gradient(circle, rgba(255,140,160,0.25) 0%, rgba(200,109,215,0.12) 45%, transparent 70%)",
    filter: "blur(60px)",
    pointerEvents: "none",
  },
  bgBlobTopRight: {
    position: "absolute",
    top: "-100px",
    right: "-200px",
    width: "700px",
    height: "700px",
    background:
      "radial-gradient(circle, rgba(120,140,255,0.22) 0%, rgba(80,100,255,0.1) 45%, transparent 70%)",
    filter: "blur(70px)",
    pointerEvents: "none",
  },
  bgBlobBottom: {
    position: "absolute",
    bottom: "-250px",
    left: "30%",
    width: "800px",
    height: "800px",
    background:
      "radial-gradient(circle, rgba(255,180,140,0.12) 0%, transparent 60%)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },
  grain: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "3px 3px",
    pointerEvents: "none",
  },
  nav: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    padding: "24px 64px",
  },
  navCol: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  logo: {
    fontSize: "20px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  logoMark: { color: "#c86dd7" },
  navLinks: { justifyContent: "center", gap: "32px" },
  navLink: {
    color: "rgba(255,255,255,0.7)",
    textDecoration: "none",
    fontSize: "14px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  navActions: { justifyContent: "flex-end", gap: "20px" },
  stepNumber: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #ff9a9e, #7d8bff)",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
    fontWeight: 700,
    color: "#050505",
  },
  priceNumber: {
    fontSize: "28px",
    fontWeight: 700,
    margin: "6px 0 10px",
  },
  signInLink: {
    color: "rgba(255,255,255,0.8)",
    textDecoration: "none",
    fontSize: "14px",
  },
  ctaButton: {
    background: "#fff",
    color: "#050505",
    padding: "10px 20px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
  },
  hero: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "80px 24px 40px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  badge: {
    display: "inline-block",
    padding: "6px 16px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    fontSize: "13px",
    color: "rgba(255,255,255,0.75)",
    marginBottom: "24px",
  },
  heroTitle: {
    fontSize: "56px",
    fontWeight: 700,
    lineHeight: 1.15,
    margin: "0 0 20px",
  },
  heroTitleGradient: {
    background:
      "linear-gradient(90deg, #ff9a9e 0%, #c86dd7 50%, #7d8bff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroSubtitle: {
    fontSize: "18px",
    color: "rgba(255,255,255,0.6)",
    maxWidth: "560px",
    margin: "0 auto 40px",
    lineHeight: 1.6,
  },
  inputRow: {
    display: "flex",
    alignItems: "center",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "999px",
    padding: "6px 6px 6px 20px",
    maxWidth: "560px",
    margin: "0 auto 56px",
    backdropFilter: "blur(20px)",
  },
  linkIcon: { marginRight: "10px", opacity: 0.6 },
  input: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#fff",
    fontSize: "15px",
    padding: "10px 0",
  },
  getClipsButton: {
    background: "#fff",
    color: "#050505",
    border: "none",
    borderRadius: "999px",
    padding: "12px 24px",
    fontWeight: 600,
    fontSize: "14px",
    cursor: "pointer",
  },
  clipRow: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },
  clipCard: {
    width: "110px",
    borderRadius: "12px",
    overflow: "hidden",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  clipThumb: {
    height: "150px",
    background:
      "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "8px",
  },
  platformDot: {
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    color: "#fff",
  },
  scoreBadge: {
    fontSize: "11px",
    fontWeight: 700,
    color: "#9dffb0",
    background: "rgba(0,0,0,0.5)",
    padding: "4px 0",
    textAlign: "center",
  },
  statsSection: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    gap: "80px",
    padding: "60px 24px",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    marginTop: "40px",
  },
  statCard: { textAlign: "center" },
  statNumber: {
    fontSize: "32px",
    fontWeight: 700,
    background: "linear-gradient(90deg, #ff9a9e, #7d8bff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  statLabel: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.5)",
    marginTop: "6px",
  },
  features: {
    position: "relative",
    zIndex: 2,
    padding: "100px 64px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: 700,
    marginBottom: "56px",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
  },
  featureCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "28px",
  },
  featureIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #ff9a9e, #7d8bff)",
    marginBottom: "16px",
  },
  featureTitle: { fontSize: "17px", fontWeight: 600, margin: "0 0 8px" },
  featureDesc: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.6,
    margin: 0,
  },
  footer: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "32px",
    color: "rgba(255,255,255,0.4)",
    fontSize: "13px",
    borderTop: "1px solid rgba(255,255,255,0.06)",
  },
};
