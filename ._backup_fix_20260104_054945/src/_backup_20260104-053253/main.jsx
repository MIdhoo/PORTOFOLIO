import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const rootEl = document.getElementById("root");

// Fallback biar kalau React crash, minimal kelihatan ini (bukan blank total)
if (rootEl && rootEl.childNodes.length === 0) {
  rootEl.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;color:#fff;font-family:system-ui;opacity:.8">
      Loading…
    </div>
  `;
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
