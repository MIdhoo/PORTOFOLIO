export const content = {
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
    desc:
      "Saya adalah anak IT yang suka membangun produk dari nol sampai rapi. Terbiasa bikin UI modern, REST API, integrasi AI, dan deployment."
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
        "Fokus sains: Matematika, Fisika, Kimia, Biologi",
        "Belajar terstruktur dan target-driven"
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
        "Pengembangan aplikasi web",
        "Basis data",
        "AI/ML (dasar)",
        "Deployment (dasar)"
      ]
    }
  ],

  projects: [],
  achievements: [],

  contact: {
    title: "Kontak",
    desc: "Kalau kamu punya proyek, kolaborasi, atau pertanyaan, silakan hubungi saya lewat sosial media di atas."
  },

  footer: {
    text: "© " + new Date().getFullYear() + " Idhoo. Built with React + Vite."
  }
};
