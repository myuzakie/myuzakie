export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      gallery: 'Gallery',
      store: 'Store',
      newsletter: 'Newsletter',
      photography: 'Photography',
    },
    hero: {
      greeting: "Hi! I'm",
      role: 'SaaS Product Designer',
      location: 'Barcelona',
      company: 'Factorial',
      based: 'based from',
      working: 'Currently working at',
    },
    tools: {
      sideProjects: 'Side Projects',
      stackUsed: 'Stack used',
    },
    projects: {
      policeTitle: 'Police Station Dashboard',
      policeDesc: 'Control panel for law enforcement analytics & operations.',
      fintechTitle: 'Fintech Mobile App',
      fintechDesc: 'Savings & stock portfolio for modern banking.',
    },
    footer: {
      theme: 'Theme',
      location: 'Location',
      contact: 'Contact',
      copyright: '© {year} Jordi Espinosa. Made with ❤️ in Barcelona.',
    },
  },

  id: {
    nav: {
      home: 'Beranda',
      projects: 'Proyek',
      gallery: 'Galeri',
      store: 'Toko',
      newsletter: 'Surat Berita',
      photography: 'Fotografi',
    },
    hero: {
      greeting: 'Halo! Saya',
      role: 'Desainer Produk SaaS',
      location: 'Barcelona',
      company: 'Factorial',
      based: 'berbasis dari',
      working: 'Saat ini bekerja di',
    },
    tools: {
      sideProjects: 'Proyek Sampingan',
      stackUsed: 'Stack yang Digunakan',
    },
    projects: {
      policeTitle: 'Dasbor Kantor Polisi',
      policeDesc: 'Panel kontrol untuk analitik dan operasi penegakan hukum.',
      fintechTitle: 'Aplikasi Fintech Seluler',
      fintechDesc: 'Tabungan & portofolio saham untuk perbankan modern.',
    },
    footer: {
      theme: 'Tema',
      location: 'Lokasi',
      contact: 'Kontak',
      copyright: '© {year} Jordi Espinosa. Dibuat dengan ❤️ di Barcelona.',
    },
  },

  de: {
    nav: {
      home: 'Startseite',
      projects: 'Projekte',
      gallery: 'Galerie',
      store: 'Shop',
      newsletter: 'Newsletter',
      photography: 'Fotografie',
    },
    hero: {
      greeting: 'Hallo! Ich bin',
      role: 'SaaS-Produktdesigner',
      location: 'Barcelona',
      company: 'Factorial',
      based: 'ansässig in',
      working: 'Derzeit tätig bei',
    },
    tools: {
      sideProjects: 'Nebenprojekte',
      stackUsed: 'Verwendeter Stack',
    },
    projects: {
      policeTitle: 'Polizeistation-Dashboard',
      policeDesc: 'Kontrollpanel für Analytik und Operationen der Strafverfolgung.',
      fintechTitle: 'Fintech-Mobile-App',
      fintechDesc: 'Sparen & Aktienportfolio für modernes Banking.',
    },
    footer: {
      theme: 'Design',
      location: 'Standort',
      contact: 'Kontakt',
      copyright: '© {year} Jordi Espinosa. Gemacht mit ❤️ in Barcelona.',
    },
  },
} as const;

export type Language = 'en' | 'id' | 'de';

export function getCurrentLanguage(): Language {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang') as Language | null;
  return (lang && ['en', 'id', 'de'].includes(lang) ? lang : 'en') as Language;
}

export function getTranslations(lang: Language) {
  return translations[lang] || translations.en;
}
