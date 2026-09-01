"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState("");
  const router = useRouter();

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleGetClips() {
    if (!videoUrl.trim()) {
      const el = document.querySelector('input[placeholder*="Paste a YouTube"]');
      if (el) el.focus();
      return;
    }
    localStorage.setItem("pendingVideoUrl", videoUrl.trim());
    router.push("/login");
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
          <button onClick={() => scrollToSection("features")}
