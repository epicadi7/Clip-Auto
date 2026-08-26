"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleEmailAuth(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } =
      mode === "login"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    if (mode === "signup") {
      setError("Check your email to confirm your account.");
      return;
    }

    router.push("/dashboard");
  }

  async function handleGoogleAuth() {
    setError("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
    if (error) setError(error.message);
  }

  return (
    <div style={styles.page}>
      <div style={styles.bgBlob} />
      <div style={styles.card}>
        <h1 style={styles.title}>
          {mode === "login" ? "Welcome back" : "Create your account"}
        </h1>
        <p style={styles.subtitle}>
          {mode === "login"
            ? "Log in to start clipping."
            : "Sign up — it's free to get started."}
        </p>

        <button style={styles.googleButton} onClick={handleGoogleAuth}>
          <span style={styles.googleIcon}>G</span>
          Continue with Google
        </button>

        <div style={styles.divider}>
          <span style={styles.dividerLine} />
          <span style={styles.dividerText}>or</span>
          <span style={styles.dividerLine} />
        </div>

        <form onSubmit={handleEmailAuth} style={styles.form}>
          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          {error && <div style={styles.error}>{error}</div>}
          <button style={styles.submitButton} type="submit" disabled={loading}>
            {loading
              ? "Please wait..."
              : mode === "login"
              ? "Log in"
              : "Sign up"}
          </button>
        </form>

        <p style={styles.switchText}>
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            style={styles.switchLink}
            onClick={() => {
              setError("");
              setMode(mode === "login" ? "signup" : "login");
            }}
          >
            {mode === "login" ? "Sign up" : "Log in"}
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    background: "#050505",
    color: "#f5f5f7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    overflow: "hidden",
  },
  bgBlob: {
    position: "absolute",
    top: "-200px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "700px",
    height: "700px",
    background:
      "radial-gradient(circle, rgba(200,109,215,0.2) 0%, rgba(125,139,255,0.1) 45%, transparent 70%)",
    filter: "blur(70px)",
    pointerEvents: "none",
  },
  card: {
    position: "relative",
    zIndex: 2,
    width: "380px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "36px",
    backdropFilter: "blur(20px)",
  },
  title: { fontSize: "24px", fontWeight: 700, margin: "0 0 8px", textAlign: "center" },
  subtitle: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.55)",
    textAlign: "center",
    margin: "0 0 28px",
  },
  googleButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    background: "#fff",
    color: "#050505",
    border: "none",
    borderRadius: "10px",
    padding: "12px",
    fontWeight: 600,
    fontSize: "14px",
    cursor: "pointer",
  },
  googleIcon: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    background: "#050505",
    color: "#fff",
    fontSize: "11px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: { display: "flex", alignItems: "center", gap: "12px", margin: "24px 0" },
  dividerLine: { flex: 1, height: "1px", background: "rgba(255,255,255,0.1)" },
  dividerText: { fontSize: "12px", color: "rgba(255,255,255,0.4)" },
  form: { display: "flex", flexDirection: "column", gap: "12px" },
  input: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "10px",
    padding: "12px 14px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
  },
  error: {
    fontSize: "13px",
    color: "#ff8a8a",
    background: "rgba(255,80,80,0.08)",
    border: "1px solid rgba(255,80,80,0.2)",
    borderRadius: "8px",
    padding: "8px 12px",
  },
  submitButton: {
    background: "#fff",
    color: "#050505",
    border: "none",
    borderRadius: "10px",
    padding: "12px",
    fontWeight: 600,
    fontSize: "14px",
    cursor: "pointer",
    marginTop: "6px",
  },
  switchText: {
    textAlign: "center",
    fontSize: "13px",
    color: "rgba(255,255,255,0.5)",
    marginTop: "22px",
  },
  switchLink: { color: "#c86dd7", cursor: "pointer", fontWeight: 600 },
};
