import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("App crashed:", error);
    console.error("Component stack:", info?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback !== undefined) return this.props.fallback;

      return (
        <div
          style={{
            maxWidth: 980,
            margin: "80px auto",
            padding: 22,
            color: "#fff",
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 18,
            fontFamily: "system-ui",
          }}
        >
          <h2 style={{ fontSize: "1.4rem", margin: "0 0 10px" }}>
            Terjadi error saat render
          </h2>
          <p style={{ opacity: 0.85, margin: "0 0 12px" }}>
            Buka DevTools Console untuk detail error. Kalau mau, kirim teks error-nya ke saya.
          </p>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: 12, opacity: 0.9, margin: 0 }}>
{String(this.state.error)}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
