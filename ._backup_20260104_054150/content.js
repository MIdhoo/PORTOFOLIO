export const content = {
  cvUrl: "/cv.pdf",

  meta: {
    title: "Portofolio",
    description: "Portofolio pribadi"
  },

  profile: {
    name: "Idhoo",
    role: "Web Developer | AI Enthusiast",
    location: "Jawa Timur, Indonesia"
  },

  hero: {
    headline: "Halo, saya Idhoo",
    subheadline: "Mahasiswa Teknik Informatika yang fokus membangun aplikasi web modern, API, dan eksplorasi AI.",
    primaryCta: { label: "Lihat Projects", href: "#projects" },
    secondaryCta: { label: "Kontak", href: "#contact" }
  },

  about: {
    title: "Tentang Saya",
    paragraphs: [
      "Saya membangun aplikasi web dari desain sampai deploy: UI yang rapi, API yang jelas, dan performa yang enak dipakai.",
      "Saat ini saya fokus mengembangkan skill di frontend (React/Vite), backend (Node/Express, Laravel), serta dasar AI dan pengolahan data."
    ],
    highlights: [
      "Suka bikin UI bersih dan responsif",
      "Terbiasa bikin REST API",
      "Nyaman kerja dengan Git dan tooling modern"
    ]
  },

  skills: {
    title: "Skills",
    tip: "Tip: fokus tampilkan skill yang benar-benar kamu pakai.",
    groups: [
      { title: "Frontend", items: ["React", "Vite", "HTML", "CSS", "JavaScript"] },
      { title: "Backend", items: ["Node.js", "Express", "Laravel", "Python", "REST API"] },
      { title: "Tools", items: ["Git", "Postman", "Linux (basic)"] }
    ]
  },

  education: {
    title: "Riwayat Pendidikan",
    items: [
      {
        level: "SMA",
        institution: "SMA Negeri 1 Dringu",
        major: "Ilmu Pengetahuan Alam (IPA)",
        location: "Dringu, Probolinggo, Jawa Timur, Indonesia",
        period: "2018-2021",
        description: "Saya mengambil jurusan IPA dengan fokus pada Matematika, Fisika, Kimia, dan Biologi. Saya juga terbiasa dengan pola belajar analitis dan pemecahan masalah.",
        focus: ["Matematika", "Fisika", "Kimia", "Biologi"]
      },
      {
        level: "Kuliah",
        institution: "Universitas Muhammadiyah Malang",
        major: "Teknik Informatika",
        location: "Malang, Jawa Timur, Indonesia",
        period: "2021-sekarang",
        description: "Saya menekuni Teknik Informatika dengan minat pada pengembangan aplikasi web, basis data, dan AI. Fokus saya adalah membangun project yang rapi, terstruktur, dan siap deploy.",
        focus: ["Web Development", "Database", "AI", "Software Engineering"]
      }
    ]
  },

  projects: {
    title: "Projects",
    items: [
      {
        name: "AI Local Web",
        desc: "Aplikasi web AI lokal dengan UI chat, caching, dan routing intent sederhana.",
        stack: ["Flask", "Ollama", "HTML/CSS"]
      },
      {
        name: "Portfolio Website",
        desc: "Website portofolio modern dengan section skills, pendidikan, project, dan kontak.",
        stack: ["React", "Vite"]
      }
    ]
  },

  achievements: {
    title: "Achievements",
    items: [
      { title: "Consistent Learning", desc: "Aktif meningkatkan kemampuan lewat project nyata dan latihan rutin." }
    ]
  },

  contact: {
    title: "Kontak",
    items: [
      { label: "Email", value: "emailkamu@example.com", href: "mailto:emailkamu@example.com" },
      { label: "GitHub", value: "github.com/username", href: "https://github.com/username" }
    ]
  },

  footer: {
    text: "Dibuat dengan React + Vite. Deploy di Vercel."
  }
};

export default content;
