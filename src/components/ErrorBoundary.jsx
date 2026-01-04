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
    console.error("UI crash:", error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    const message = this.state.error?.message || String(this.state.error);
    return (
      <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
        <div
          style={{
            width: "min(920px, 100%)",
            background: "rgba(15, 23, 42, 0.65)",
            border: "1px solid rgba(148, 163, 184, 0.25)",
            borderRadius: 16,
            padding: 18,
            color: "#e5e7eb",
          }}
        >
          <h2 style={{ margin: "0 0 8px 0" }}>Aplikasi gagal dimuat (runtime error)</h2>
          <p style={{ margin: "0 0 14px 0", opacity: 0.85 }}>
            Copy isi error di bawah lalu kirim ke chat kalau masih terjadi.
          </p>
          <pre
            style={{
              margin: 0,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              background: "rgba(2, 6, 23, 0.65)",
              border: "1px solid rgba(148, 163, 184, 0.18)",
              borderRadius: 12,
              padding: 12,
              overflowX: "auto",
            }}
          >
{message}
          </pre>
        </div>
      </div>
    );
  }
}
