/**
 * SAFE CONTENT (anti crash)
 * - Kalau ada field yang belum kamu isi, UI tetap jalan (tidak blank)
 * - Kamu tinggal ganti data di RAW_CONTENT
 */
const RAW_CONTENT = {
  profile: {
    name: "Idhoo",
    role: "Developer",
    tagline: "Membangun UI modern, REST API, integrasi AI, dan deployment.",
    cvUrl: ""
  },

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/username" },
    { label: "Email", href: "mailto:emailkamu@gmail.com" },
    { label: "WhatsApp", href: "https://wa.me/62XXXXXXXXXXX" }
  ],

  about: {
    title: "Tentang Saya",
    desc: "Saya adalah anak IT yang suka membangun produk dari nol sampai rapi. Terbiasa bikin UI modern, REST API, integrasi AI, dan deployment.",
    points: []
  },

  skills: [
    { group: "Frontend", items: ["React", "Vite", "HTML", "CSS", "JavaScript"] },
    { group: "Backend", items: ["Node.js", "Express", "Laravel", "Python", "REST API"] },
    { group: "Tools", items: ["Git", "Postman", "Linux (basic)"] }
  ],

  education: [
    {
      id: "sma",
      institution: "SMA Negeri 1 Dringu",
      major: "Ilmu Pengetahuan Alam (IPA)",
      location: "Dringu, Probolinggo, Jawa Timur, Indonesia",
      periode: "2018-2021",
      desc: "Saya mengambil jurusan IPA dengan fokus pada Matematika, Fisika, Kimia, dan Biologi.",
      highlights: [
        "Fokus: Matematika, Fisika, Kimia, Biologi",
        "Latihan problem solving & logika",
        "Kebiasaan belajar terstruktur"
      ]
    },
    {
      id: "umm",
      institution: "Universitas Muhammadiyah Malang",
      major: "Teknik Informatika",
      location: "Malang, Jawa Timur, Indonesia",
      periode: "2021-sekarang",
      desc: "Di UMM saya menekuni bidang Teknik Informatika dengan konsentrasi pengembangan aplikasi web, basis data, dan AI.",
      highlights: [
        "Web development & database",
        "API development & integrasi",
        "Eksplorasi AI untuk otomasi"
      ]
    }
  ],

  // Biar Projects/Achievements tidak crash meski kosong
  projects: { title: "Projects", items: [] },
  achievements: { title: "Achievements", items: [] },

  contact: {
    title: "Kontak",
    desc: "Kalau kamu punya proyek, kolaborasi, atau pertanyaan, silakan hubungi saya lewat sosial media di atas."
  },

  footer: {
    text: "© 2026 Idhoo. Built with React + Vite."
  }
};

// ---------- SAFE PROXY ----------
const NIL = new Proxy(function () {}, {
  get(_t, prop) {
    if (prop === Symbol.toPrimitive) return () => "";
    if (prop === "toString") return () => "";
    if (prop === "valueOf") return () => "";
    if (prop === "length") return 0;
    if (prop === Symbol.iterator) return function* () {};
    if (prop === "map" || prop === "filter" || prop === "flatMap") return () => [];
    if (prop === "reduce") return (_fn, init) => (init ?? "");
    return NIL;
  },
  apply() {
    return "";
  }
});

const cache = new WeakMap();
function safeWrap(val) {
  if (val === null || val === undefined) return NIL;
  const t = typeof val;
  if (t !== "object" && t !== "function") return val;

  if (cache.has(val)) return cache.get(val);

  const p = new Proxy(val, {
    get(target, prop) {
      // allow array/function methods to keep correct "this"
      if (prop in target) {
        const v = target[prop];
        if (typeof v === "function") return v.bind(target);
        return safeWrap(v);
      }

      // common safe fallbacks
      if (prop === "length") return 0;
      if (prop === Symbol.iterator) return function* () {};
      if (prop === "map" || prop === "filter" || prop === "flatMap") return () => [];
      if (prop === "reduce") return (_fn, init) => (init ?? "");
      if (prop === Symbol.toPrimitive) return () => "";

      return NIL;
    }
  });

  cache.set(val, p);
  return p;
}

export const content = safeWrap(RAW_CONTENT);
