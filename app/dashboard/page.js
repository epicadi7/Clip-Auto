"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../src/lib/supabase";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [videoUrl, setVideoUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(true);

  useEffect(() => {
    async function init() {
      const { data } = await supabase.auth.getUser();
      if (!data?.user) {
        router.push("/login");
        return;
      }
      setUser(data.user);
      setCheckingAuth(false);
      fetchVideos(data.user.id);
    }
    init();
  }, []);

  async function fetchVideos(userId) {
    setLoadingVideos(true);
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (!error) setVideos(data || []);
    setLoadingVideos(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!videoUrl.trim()) return;

    setSubmitting(true);
    const { error } = await supabase.from("videos").insert({
      user_id: user.id,
      youtube_url: videoUrl.trim(),
      status: "pending",
    });
    setSubmitting(false);

    if (error) {
      setError(error.message);
      return;
    }

    setVideoUrl("");
    fetchVideos(user.id);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  if (checkingAuth) {
    return (
      <div style={styles.loadingPage}>
        <div style={styles.loadingText}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.logo}>
          <span style={styles.logoMark}>◆</span> ClipAuto
        </div>

        <nav style={styles.sidebarNav}>
          <div style={{ ...styles.navItem, ...styles.navItemActive }}>
            Dashboard
          </div>
          <div style={styles.navItem}>My Clips</div>
          <div style={styles.navItem}>Settings</div>
        </nav>

        <div style={styles.sidebarFooter}>
          <div style={styles.userEmail}>{user?.email}</div>
          <button style={styles.logoutButton} onClick={handleLogout}>
            Log out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={styles.main}>
        <div style={styles.bgBlob} />

                <header style={{ ...styles.header, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={styles.title}>Your videos</h1>
            <p style={styles.subtitle}>
              Drop a link below and we'll queue it up for clipping.
            </p>
          </div>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#e8722c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1a1c1f',
              fontWeight: 700,
              fontSize: '16px',
              flexShrink: 0,
            }}
          >
            A
          </div>
        </header>

        <form onSubmit={handleSubmit} style={styles.inputRow}>
          <span style={styles.linkIcon}>🔗</span>
          <input
            style={styles.input}
            placeholder="Paste a YouTube or video link..."
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
          <button style={styles.getClipsButton} disabled={submitting}>
            {submitting ? "Adding..." : "Get clips"}
          </button>
        </form>
        {error && <div style={styles.error}>{error}</div>}

        <section style={styles.videoSection}>
          {loadingVideos ? (
            <div style={styles.emptyState}>Loading your videos...</div>
          ) : videos.length === 0 ? (
            <div style={styles.emptyState}>
              <div style={styles.emptyTitle}>No videos yet</div>
              <div style={styles.emptyDesc}>
                Paste a link above to queue your first clip job.
              </div>
            </div>
          ) : (
            <div style={styles.videoGrid}>
              {videos.map((v) => (
                <div key={v.id} style={styles.videoCard}>
                  <div style={styles.videoCardTop}>
                    <span style={statusStyle(v.status)}>
                      {v.status.toUpperCase()}
                    </span>
                    <span style={styles.videoDate}>
                      {new Date(v.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div style={styles.videoUrl}>{v.youtube_url}</div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

function statusStyle(status) {
  const base = {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.04em",
    padding: "4px 10px",
    borderRadius: "999px",
    fontFamily: "'JetBrains Mono', monospace",
  };
  const colors = {
    pending: { color: "#ffd166", background: "rgba(255,209,102,0.12)" },
    processing: { color: "#7d8bff", background: "rgba(125,139,255,0.12)" },
    done: { color: "#9dffb0", background: "rgba(157,255,176,0.12)" },
    failed: { color: "#ff8a8a", background: "rgba(255,138,138,0.12)" },
  };
  return { ...base, ...(colors[status] || colors.pending) };
}

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    background: "#050505",
    color: "#f5f5f7",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  loadingPage: {
    minHeight: "100vh",
    background: "#050505",
    color: "#f5f5f7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: { fontSize: "14px", color: "rgba(255,255,255,0.5)" },

  sidebar: {
    width: "240px",
    borderRight: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    padding: "24px 20px",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "18px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "40px",
  },
  logoMark: { color: "#c86dd7" },
  sidebarNav: { display: "flex", flexDirection: "column", gap: "4px" },
  navItem: {
    padding: "10px 12px",
    borderRadius: "8px",
    fontSize: "14px",
    color: "rgba(255,255,255,0.55)",
    cursor: "pointer",
  },
  navItemActive: {
    background: "rgba(255,255,255,0.06)",
    color: "#fff",
  },
  sidebarFooter: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    paddingTop: "16px",
  },
  userEmail: {
    fontSize: "12px",
    color: "rgba(255,255,255,0.4)",
    marginBottom: "10px",
    fontFamily: "'JetBrains Mono', monospace",
    wordBreak: "break-all",
  },
  logoutButton: {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    padding: "8px",
    color: "rgba(255,255,255,0.7)",
    fontSize: "13px",
    cursor: "pointer",
  },

  main: {
    flex: 1,
    position: "relative",
    padding: "48px 56px",
    overflow: "hidden",
  },
  bgBlob: {
    position: "absolute",
    top: "-150px",
    right: "-100px",
    width: "500px",
    height: "500px",
    background:
      "radial-gradient(circle, rgba(200,109,215,0.12) 0%, rgba(125,139,255,0.06) 45%, transparent 70%)",
    filter: "blur(70px)",
    pointerEvents: "none",
  },
  header: { position: "relative", zIndex: 2, marginBottom: "32px" },
  title: { fontSize: "28px", fontWeight: 700, margin: "0 0 6px" },
  subtitle: { fontSize: "14px", color: "rgba(255,255,255,0.5)", margin: 0 },

  inputRow: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "14px",
    padding: "6px 6px 6px 18px",
    maxWidth: "620px",
    marginBottom: "12px",
  },
  linkIcon: { marginRight: "10px", opacity: 0.6 },
  input: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#fff",
    fontSize: "14px",
    padding: "12px 0",
  },
  getClipsButton: {
    background: "#fff",
    color: "#050505",
    border: "none",
    borderRadius: "10px",
    padding: "11px 22px",
    fontWeight: 600,
    fontSize: "14px",
    cursor: "pointer",
  },
  error: {
    position: "relative",
    zIndex: 2,
    fontSize: "13px",
    color: "#ff8a8a",
    marginBottom: "24px",
    maxWidth: "620px",
  },

  videoSection: { position: "relative", zIndex: 2, marginTop: "32px" },
  emptyState: {
    border: "1px dashed rgba(255,255,255,0.15)",
    borderRadius: "16px",
    padding: "48px",
    textAlign: "center",
  },
  emptyTitle: { fontSize: "16px", fontWeight: 600, marginBottom: "6px" },
  emptyDesc: { fontSize: "13px", color: "rgba(255,255,255,0.45)" },

  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "14px",
  },
  videoCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "16px",
  },
  videoCardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  videoDate: {
    fontSize: "11px",
    color: "rgba(255,255,255,0.4)",
    fontFamily: "'JetBrains Mono', monospace",
  },
  videoUrl: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.75)",
    wordBreak: "break-all",
    lineHeight: 1.4,
  },
};
