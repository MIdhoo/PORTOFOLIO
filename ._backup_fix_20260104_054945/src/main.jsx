import React from "react";
import ReactDOM from "react-dom/client";

const rootEl = document.getElementById("root");

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
}

function showFatal(err) {
  const message = err?.stack || err?.message || String(err);
  rootEl.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:flex-start;justify-content:center;padding:24px;font-family:system-ui;background:linear-gradient(135deg,#1a0b2e,#07131f);color:#fff">
      <div style="width:min(980px,100%);background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);border-radius:16px;padding:18px;backdrop-filter:blur(10px)">
        <div style="font-weight:800;font-size:18px;margin-bottom:8px">Aplikasi gagal dimuat (runtime error)</div>
        <div style="opacity:.9;margin-bottom:10px">Copy isi error di bawah lalu kirim ke chat kalau masih terjadi.</div>
        <pre style="white-space:pre-wrap;word-break:break-word;line-height:1.35;margin:0;padding:12px;border-radius:12px;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.12)">${escapeHtml(message)}</pre>
      </div>
    </div>
  `;
}

if (!rootEl) {
  document.body.innerHTML = "<pre>#root tidak ditemukan di index.html</pre>";
} else {
  rootEl.innerHTML = '<div style="padding:24px;color:#fff;font-family:system-ui">Loading...</div>';

  window.addEventListener("error", (e) => showFatal(e.error || new Error(e.message)));
  window.addEventListener("unhandledrejection", (e) => showFatal(e.reason || new Error("Unhandled rejection")));

  import("./App.jsx")
    .then(({ default: App }) => {
      ReactDOM.createRoot(rootEl).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    })
    .catch(showFatal);
}
