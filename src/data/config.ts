/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// ============================================================================
// DOKU® BUSINESS IDENTITY & CONTACT CONFIGURATION (EDITABLE IN ONE PLACE)
// ============================================================================
export const DOKU_CONFIG = {
  brandName: "DOKU®",
  brandMark: "DOKU",
  registeredSymbol: "®",
  fullName: {
    en: "Digital Documentation & Accountability",
    id: "Dokumentasi Digital & Akuntabilitas",
  },
  mainTagline: {
    en: "Document the Moment. Understand the Data. Show the Impact.",
    id: "Dokumentasikan Momen. Pahami Data. Tunjukkan Dampaknya.",
  },
  brandCategory: {
    en: "Creative Documentation & Data Reporting Studio",
    id: "Studio Dokumentasi Kreatif & Pelaporan Data",
  },
  positioningStatement: {
    en: "DOKU transforms activities into structured stories, meaningful data, professional reports, and valuable digital archives.",
    id: "DOKU mengubah setiap kegiatan menjadi cerita yang terstruktur, data yang bermakna, laporan yang profesional, dan arsip digital yang bernilai.",
  },
  location: "Jakarta, Indonesia",
  serviceArea: {
    en: "Jakarta & Jabodetabek. Available for selected projects outside Jabodetabek.",
    id: "Jakarta & Jabodetabek. Tersedia untuk proyek terpilih di luar Jabodetabek.",
  },
  email: "hello@doku.id",
  whatsappNumber: "+62 811-1333-212",
  whatsappCleanNumber: "628111333212",
  instagramUsername: "@doku.id",
  instagramUrl: "https://instagram.com/doku.id",
  website: "www.doku.id",
  websiteUrl: "https://www.doku.id",
};

// ============================================================================
// BILINGUAL TRANSLATION DICTIONARY
// ============================================================================
export type Language = 'id' | 'en';

export interface TranslationSchema {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    contact: string;
    startProject: string;
    menu: string;
    close: string;
  };
  hero: {
    smallLabel: string;
    headline: string;
    supportingText: string;
    categories: string[];
    btnPrimary: string;
    btnSecondary: string;
    liveBadge: string;
    archiveCode: string;
    recordBadge: string;
  };
  intro: {
    smallLabel: string;
    headline: string;
    bodyText: string;
    highlights: {
      step: string;
      word: string;
      sub: string;
    }[];
  };
  beforeAfter: {
    smallLabel: string;
    headline: string;
    subline: string;
    viewModeSide: string;
    viewModeSlider: string;
    before: {
      badge: string;
      title: string;
      items: {
        metric: string;
        desc: string;
      }[];
    };
    after: {
      badge: string;
      title: string;
      items: {
        code: string;
        title: string;
        desc: string;
      }[];
    };
  };
  services: {
    smallLabel: string;
    headline: string;
    subline: string;
    cards: {
      number: string;
      tag: string;
      title: string;
      description: string;
      deliverables: string[];
    }[];
  };
  signature: {
    smallLabel: string;
    headline: string;
    description: string;
    points: { label: string; text: string }[];
  };
  howItWorks: {
    smallLabel: string;
    headline: string;
    subline: string;
    steps: {
      number: string;
      title: string;
      subtitle: string;
      description: string;
    }[];
  };
  portfolio: {
    smallLabel: string;
    headline: string;
    subline: string;
    filterAll: string;
    categories: { id: string; label: string }[];
    caseStudies: {
      id: string;
      categoryKey: string;
      code: string;
      title: string;
      subtitle: string;
      description: string;
      metrics: { value: string; label: string }[];
      deliverables: string[];
      featuredImage: string;
      status: string;
      reportPreviewQuote: string;
    }[];
    viewDetails: string;
    closeModal: string;
    executiveSummary: string;
  };
  stats: {
    smallLabel: string;
    headline: string;
    items: {
      value: string;
      number: number;
      suffix: string;
      label: string;
      subtext: string;
    }[];
  };
  whoWeServe: {
    smallLabel: string;
    headline: string;
    subline: string;
    sectors: {
      code: string;
      title: string;
      description: string;
      examples: string;
    }[];
  };
  whyDoku: {
    smallLabel: string;
    headline: string;
    subline: string;
    pillars: {
      code: string;
      title: string;
      description: string;
    }[];
  };
  annualReport: {
    smallLabel: string;
    headline: string;
    subline: string;
    features: string[];
    badge: string;
    sampleTabs: {
      overview: string;
      financials: string;
      milestones: string;
    };
    mockupKpis: { label: string; value: string; note: string }[];
    cta: string;
  };
  pricing: {
    smallLabel: string;
    headline: string;
    subline: string;
    badgeMostRequested: string;
    ctaBasic: string;
    ctaComplete: string;
    ctaAnnual: string;
    packages: {
      id: string;
      name: string;
      forWho: string;
      priceTag: string;
      isFeatured: boolean;
      features: string[];
    }[];
  };
  about: {
    smallLabel: string;
    headline: string;
    manifesto: string;
    coreIdea: string;
    principles: { title: string; text: string }[];
  };
  testimonials: {
    smallLabel: string;
    headline: string;
    subline: string;
    placeholderNote: string;
    quotes: {
      text: string;
      author: string;
      role: string;
      organization: string;
    }[];
  };
  contact: {
    smallLabel: string;
    headline: string;
    subline: string;
    form: {
      name: string;
      namePlaceholder: string;
      org: string;
      orgPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      whatsapp: string;
      whatsappPlaceholder: string;
      projectType: string;
      types: { id: string; label: string }[];
      projectDate: string;
      tellUs: string;
      tellUsPlaceholder: string;
      btnSubmit: string;
      btnWhatsapp: string;
      orText: string;
      successTitle: string;
      successMsg: string;
      selectedPackageNote: string;
    };
    identity: {
      basedInLabel: string;
      serviceAreaLabel: string;
      officialEmailLabel: string;
      officialWhatsappLabel: string;
      instagramLabel: string;
      websiteLabel: string;
    };
  };
  finalCta: {
    headline: string;
    supporting: string;
    btn: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    legalTitle: string;
    copyright: string;
    allRightsReserved: string;
    language: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  id: {
    nav: {
      home: "Beranda",
      services: "Layanan",
      portfolio: "Portofolio",
      about: "Tentang",
      contact: "Kontak",
      startProject: "Mulai Proyek →",
      menu: "Menu",
      close: "Tutup",
    },
    hero: {
      smallLabel: "DOKU®",
      headline: "SETIAP KEGIATAN\nMENINGGALKAN CERITA.",
      supportingText:
        "Kami menangkap momen, mengelola data, dan mengubah setiap kegiatan menjadi dokumentasi yang bermakna.",
      categories: ["DOKUMENTASI", "DATA", "LAPORAN", "ARSIP"],
      btnPrimary: "Mulai Proyek →",
      btnSecondary: "Lihat Karya",
      liveBadge: "REKAMAN AKUNTABEL ● JAKARTA",
      archiveCode: "DOKU // ARSIP TERTATA",
      recordBadge: "01 DOKUMENTASI + DATA + ARSIP",
    },
    intro: {
      smallLabel: "POSISI & FILOSOFI",
      headline: "KAMI TIDAK HANYA MENGAMBIL FOTO.",
      bodyText:
        "DOKU menggabungkan dokumentasi visual, pengelolaan data, pelaporan, dan arsip digital untuk membantu organisasi memahami, menyimpan, dan menunjukkan dampak dari setiap kegiatan.",
      highlights: [
        {
          step: "01",
          word: "TANGKAP.",
          sub: "Merekam momen penting, ekspresi manusia, dan dinamika kegiatan di lapangan.",
        },
        {
          step: "02",
          word: "KELOLA.",
          sub: "Mengurasi ribuan foto, video, metadata, dan dokumen menjadi satu sistem rapi.",
        },
        {
          step: "03",
          word: "PAHAMI.",
          sub: "Menganalisis capaian program, statistik partisipasi, dan efisiensi kegiatan.",
        },
        {
          step: "04",
          word: "TAMPILKAN.",
          sub: "Menyajikan laporan profesional, visual dashboard, dan arsip digital siap pakai.",
        },
      ],
    },
    beforeAfter: {
      smallLabel: "KOMPARASI NYATA",
      headline: "SEBELUM & SESUDAH DOKU",
      subline:
        "Bandingkan bagaimana alur kerja konvensional yang berantakan berubah menjadi aset institusi yang siap diaudit dan dipresentasikan.",
      viewModeSide: "Berdampingan",
      viewModeSlider: "Mode Interaktif",
      before: {
        badge: "SEBELUM DOKU",
        title: "Kekacauan Dokumentasi Konvensional",
        items: [
          {
            metric: "3.248 Foto",
            desc: "Tersebar di berbagai perangkat dan aplikasi perpesanan tanpa nama standar.",
          },
          {
            metric: "17 Dokumen",
            desc: "Tersimpan di folder yang berbeda, rentan hilang saat pergantian panitia.",
          },
          {
            metric: "4 File Excel",
            desc: "Sulit dipahami, rumus terputus, dan tidak terhubung dengan dokumentasi visual.",
          },
          {
            metric: "1 Kegiatan",
            desc: "Tetapi tidak memiliki cerita yang utuh untuk pimpinan, donatur, atau arsip masa depan.",
          },
        ],
      },
      after: {
        badge: "SESUDAH DOKU",
        title: "Ekosistem Dokumentasi & Pelaporan DOKU",
        items: [
          {
            code: "01 ARSIP DIGITAL",
            title: "Arsip Digital Terstruktur",
            desc: "Foto dan video terkurasi resolusi penuh, berlabel rapi, dan mudah diakses lintas generasi pengurus.",
          },
          {
            code: "01 LAPORAN KEGIATAN",
            title: "Laporan Eksekutif Profesional",
            desc: "Dokumen komprehensif berisi ringkasan, capaian, dokumentasi terpilih, evaluasi, dan rekomendasi.",
          },
          {
            code: "01 DASHBOARD DATA",
            title: "Dashboard Data Visual",
            desc: "Visualisasi metrik kehadiran, demografi partisipan, dan transparansi alokasi anggaran.",
          },
          {
            code: "01 CERITA UTUH",
            title: "Narasi Dampak Berkelanjutan",
            desc: "Catatan terpadu yang membuktikan nilai dan akuntabilitas organisasi kepada semua pemangku kepentingan.",
          },
        ],
      },
    },
    services: {
      smallLabel: "LAYANAN KAMI",
      headline: "KAPABILITAS DOKU®",
      subline:
        "Empat layanan terpadu yang dirancang khusus untuk memenuhi standar transparansi, pelaporan, dan arsip institusi modern.",
      cards: [
        {
          number: "01",
          tag: "VISUAL ASSET",
          title: "EVENT DOCUMENTATION",
          description:
            "Fotografi dan videografi yang menangkap orang, momen, suasana, dan detail yang membentuk sebuah kegiatan.",
          deliverables: [
            "Kamera Mirrorless & Lensa Cinema",
            "Kurasi Foto Kualitas Cetak & Web",
            "Sinematik Video Highlight (1–3 Menit)",
            "Manajemen Aset Real-Time di Lapangan",
          ],
        },
        {
          number: "02",
          tag: "EXECUTIVE REPORT",
          title: "EVENT REPORT",
          description:
            "Laporan profesional yang mencakup rangkuman kegiatan, peserta, capaian, dokumentasi, evaluasi, dan rekomendasi.",
          deliverables: [
            "Layout Buku Majalah Editorial Modern",
            "Rangkuman Eksekutif Siap Presentasi",
            "Dokumentasi Naratif & Kutipan Peserta",
            "File Master PDF Interaktif & Siap Cetak",
          ],
        },
        {
          number: "03",
          tag: "ACCOUNTABILITY",
          title: "DATA & FINANCIAL REPORT",
          description:
            "Mengubah informasi, data keuangan, dan statistik kegiatan menjadi laporan visual yang jelas dan mudah dipahami.",
          deliverables: [
            "Visualisasi Grafik Partisipasi & Survei",
            "Diagram Alur Anggaran & Realisasi Dana",
            "Indikator Capaian Kinerja (KPI Event)",
            "Audit Visual Bukti Transaksi & Dampak",
          ],
        },
        {
          number: "04",
          tag: "HERITAGE REPOSITORY",
          title: "DIGITAL ARCHIVE",
          description:
            "Merapikan foto, video, dokumen, laporan, dan data menjadi arsip digital yang terstruktur dan mudah diakses kapan saja.",
          deliverables: [
            "Taksonomi Folder Terstandar DOKU",
            "Penamaan File Sistematis & Pencarian Cepat",
            "Penyimpanan Cloud Terproteksi",
            "Panduan Serah Terima untuk Pengurus Baru",
          ],
        },
      ],
    },
    signature: {
      smallLabel: "STANDAR BARU",
      headline: "KEGIATANMU LAYAK MENDAPATKAN LEBIH DARI SEKADAR GOOGLE DRIVE.",
      description:
        "DOKU mengubah foto, dokumen, dan data yang tersebar menjadi arsip digital profesional yang benar-benar dapat digunakan oleh organisasi.",
      points: [
        {
          label: "Bukan Link Acak",
          text: "Bukan lagi folder Google Drive tanpa petunjuk yang tak pernah dibuka setelah acara selesai.",
        },
        {
          label: "Aset Akuntabilitas",
          text: "Menjadi dokumen prestisius yang meyakinkan rektorat, yayasan, sponsor, dan donatur.",
        },
        {
          label: "Warisan Organisasi",
          text: "Menjadi bekal pengetahuan tak ternilai untuk kepanitiaan periode berikutnya.",
        },
      ],
    },
    howItWorks: {
      smallLabel: "METODOLOGI KERJA",
      headline: "BAGAIMANA DOKU BEKERJA",
      subline:
        "Alur kerja terstruktur empat tahap dari sebelum kegiatan dimulai hingga arsip digital diserahkan.",
      steps: [
        {
          number: "01",
          title: "TANGKAP",
          subtitle: "CAPTURE",
          description:
            "Momen, orang, aktivitas, dinamika lapangan, serta data dan informasi mentah kegiatan dicatat dan didokumentasikan secara komprehensif.",
        },
        {
          number: "02",
          title: "KELOLA",
          subtitle: "ORGANIZE",
          description:
            "Foto, video, berkas administrasi, dan metadata dikurasi, diindeks, serta diselaraskan ke dalam taksonomi arsip DOKU.",
        },
        {
          number: "03",
          title: "PAHAMI",
          subtitle: "ANALYZE",
          description:
            "Capaian kegiatan, statistik kepesertaan, alokasi pengeluaran, dan feedback diolah menjadi indikator yang jelas dan terbaca.",
        },
        {
          number: "04",
          title: "TAMPILKAN",
          subtitle: "PRESENT",
          description:
            "Laporan profesional, dashboard data interaktif, dan repositori arsip digital diserahkan dalam format siap guna dan siap dipresentasikan.",
        },
      ],
    },
    portfolio: {
      smallLabel: "STUDI KASUS",
      headline: "KARYA TERPILIH",
      subline:
        "Setiap proyek disajikan sebagai studi kasus akuntabilitas utuh, membuktikan bagaimana momen mentah diubah menjadi cerita yang bernilai.",
      filterAll: "Semua Kategori",
      categories: [
        { id: "all", label: "Semua" },
        { id: "campus", label: "Kampus" },
        { id: "organization", label: "Organisasi" },
        { id: "pesantren", label: "Pesantren" },
        { id: "community", label: "Komunitas" },
        { id: "seminar", label: "Seminar" },
        { id: "social", label: "Proyek Sosial" },
      ],
      caseStudies: [
        {
          id: "cs-01",
          categoryKey: "campus",
          code: "01 / ACARA KAMPUS",
          title: "PKKMB FEB 2026",
          subtitle: "Orientasi Mahasiswa Baru Fakultas Ekonomi & Bisnis",
          description:
            "Dari ribuan momen yang tersebar menjadi satu cerita yang terstruktur.",
          metrics: [
            { value: "1.240", label: "PESERTA" },
            { value: "3", label: "HARI" },
            { value: "18", label: "KEGIATAN" },
            { value: "2.400+", label: "ARSIP MEDIA" },
          ],
          deliverables: [
            "Buku Laporan Eksekutif PKKMB (84 Halaman)",
            "Visual Dashboard Partisipasi & Kelulusan Sesi",
            "Video Dokumenter Rekapitulasi 3 Hari",
            "Portal Cloud Arsip Berkas PKKMB 2026",
          ],
          featuredImage: "/src/assets/images/doku_case_campus_1793112396662.jpg",
          status: "ARSIP LENGKAP // TERVERIFIKASI",
          reportPreviewQuote:
            "DOKU berhasil menyederhanakan dokumentasi 18 mata acara yang berjalan paralel menjadi satu sistem pelaporan yang langsung disetujui pihak dekanat dalam 5 hari kerja.",
        },
        {
          id: "cs-02",
          categoryKey: "social",
          code: "02 / PROYEK SOSIAL & NGO",
          title: "INDONESIA SOCIAL SUMMIT 2025",
          subtitle: "Konferensi Yayasan Sosial & Forum Donatur Nasional",
          description:
            "Menghubungkan aksi lapangan dengan akuntabilitas laporan donatur yang transparan dan meyakinkan.",
          metrics: [
            { value: "34", label: "KOTA TERLIBAT" },
            { value: "450+", label: "DELEGAT" },
            { value: "100%", label: "AUDIT DATA" },
            { value: "1 VOL", label: "BUKU TAHUNAN" },
          ],
          deliverables: [
            "Laporan Pertanggungjawaban Donatur (Audited Layout)",
            "Infografis Distribusi Bantuan & Capaian Aksi",
            "Galeri Arsip Foto Resolusi Penuh Bersih",
            "Video Wawancara Tokoh & Penerima Manfaat",
          ],
          featuredImage: "/src/assets/images/doku_case_social_1793112396659.jpg",
          status: "AUDIT DONOR // COMPLIANT",
          reportPreviewQuote:
            "Transparansi data penyaluran bantuan dan dokumentasi visual humanis dari DOKU meningkatkan retensi komitmen donatur yayasan hingga 42% pada tahun berikutnya.",
        },
        {
          id: "cs-03",
          categoryKey: "pesantren",
          code: "03 / PESANTREN & YAYASAN",
          title: "HAFLAH & KHIDMAH AKBAR 2025",
          subtitle: "Peringatan Harlah & Wisuda Santri Akbar",
          description:
            "Mengabadikan tradisi khidmat sekaligus menghadirkan pembukuan dan arsip digital modern bagi ribuan wali santri.",
          metrics: [
            { value: "8.500", label: "HADIRIN" },
            { value: "4", label: "HARI KEGIATAN" },
            { value: "100%", label: "TRANSPARANSI DANA" },
            { value: "4.100+", label: "BERKAS TERTATA" },
          ],
          deliverables: [
            "Buku Peringatan Haflah Akbar Eksklusif",
            "Laporan Keuangan & Penggalangan Wakaf",
            "Arsip Digital Foto Wisuda per Angkatan",
            "Dokumentasi Khutbah & Tausiyah Masyayikh",
          ],
          featuredImage: "/src/assets/images/doku_hero_event_1793112376061.jpg",
          status: "WARISAN PESANTREN // TERARSIPKAN",
          reportPreviewQuote:
            "Buku laporan yang disusun DOKU menjadi dokumen bersejarah yang diabadikan di perpustakaan utama pesantren dan dibagikan kepada seluruh jajaran alumni terkemuka.",
        },
      ],
      viewDetails: "Lihat Ringkasan Studi Kasus →",
      closeModal: "Tutup",
      executiveSummary: "Ringkasan Eksekutif & Hasil Pelaporan",
    },
    stats: {
      smallLabel: "STATISTIK DAMPAK",
      headline: "ANGKA DI BALIK SEBUAH CERITA",
      items: [
        {
          value: "50+",
          number: 50,
          suffix: "+",
          label: "Kegiatan Didokumentasikan",
          subtext: "Dari skala konferensi nasional hingga kegiatan kampus.",
        },
        {
          value: "10K+",
          number: 10000,
          suffix: "+",
          label: "Arsip Media Dikelola",
          subtext: "Foto, klip video, dan dokumen beresolusi tinggi terkurasi.",
        },
        {
          value: "25+",
          number: 25,
          suffix: "+",
          label: "Organisasi Didukung",
          subtext: "Universitas, yayasan, LSM, dan komunitas independen.",
        },
        {
          value: "100%",
          number: 100,
          suffix: "%",
          label: "Arsip Digital",
          subtext: "Seluruh berkas terindeks rapi dan siap diakses kapan saja.",
        },
      ],
    },
    whoWeServe: {
      smallLabel: "SEKTOR MITRA",
      headline: "SIAPA YANG KAMI LAYANI",
      subline:
        "Pendekatan pelaporan dan dokumentasi DOKU dirancang fleksibel untuk beragam struktur organisasi dan tata kelola.",
      sectors: [
        {
          code: "01",
          title: "ORGANISASI KAMPUS",
          description:
            "BEM, Dewan Perwakilan Mahasiswa, himpunan jurusan, dan panitia festival kampus yang memerlukan LPJ berbobot institusional.",
          examples: "BEM Universitas, Himpunan Jurusan, Panitia PKKMB",
        },
        {
          code: "02",
          title: "SEKOLAH",
          description:
            "Institusi pendidikan dasar hingga menengah untuk dokumentasi wisuda, dies natalis, pentas seni, dan arsip rekam jejak siswa.",
          examples: "SMA/SMK, Panitia Wisuda, OSIS, Dewan Pembina",
        },
        {
          code: "03",
          title: "PESANTREN & YAYASAN",
          description:
            "Pondok pesantren, majelis taklim, dan yayasan keagamaan yang memerlukan akuntabilitas wakaf dan dokumentasi tradisi luhur.",
          examples: "Haflah Akhirussanah, Yayasan Wakaf, Khidmah Santri",
        },
        {
          code: "04",
          title: "KOMUNITAS",
          description:
            "Kolektif kreatif, gerakan pemuda independen, dan komunitas hobi yang ingin merekam evolusi karya dan dampak sosial mereka.",
          examples: "Kolektif Kreatif, Komunitas Relawan, Inisiatif Seni",
        },
        {
          code: "05",
          title: "PENYELENGGARA ACARA",
          description:
            "Event Organizer (EO) yang memerlukan unit pelaporan dan arsip pasca-acara berstandar tinggi untuk diserahkan kepada klien korporat.",
          examples: "Creative Agency, MICE Organizer, Festival Producer",
        },
        {
          code: "06",
          title: "ORGANISASI SOSIAL",
          description:
            "LSM, NGO, dan lembaga filantropi yang wajib mempertanggungjawabkan dana program secara transparan dan berwibawa kepada publik.",
          examples: "Lembaga Swadaya Masyarakat, NGO Lingkungan, Filantropi",
        },
      ],
    },
    whyDoku: {
      smallLabel: "KEUNGGULAN KAMI",
      headline: "SATU KEGIATAN.\nSATU CATATAN YANG UTUH.",
      subline:
        "Kami menjembatani dunia estetika fotografi dengan ketelitian data pelaporan eksekutif.",
      pillars: [
        {
          code: "01",
          title: "LEBIH DARI DOKUMENTASI",
          description:
            "Kami memahami cerita di balik setiap kegiatan.",
        },
        {
          code: "02",
          title: "BERBASIS DATA",
          description:
            "Informasi disusun menjadi insight yang berguna.",
        },
        {
          code: "03",
          title: "LAPORAN PROFESIONAL",
          description:
            "Setiap kegiatan disajikan dengan jelas dan profesional.",
        },
        {
          code: "04",
          title: "ARSIP JANGKA PANJANG",
          description:
            "Sejarah organisasi tetap tersimpan dan mudah diakses.",
        },
      ],
    },
    annualReport: {
      smallLabel: "LAYANAN KHUSUS",
      headline: "UBAH SATU TAHUN KEGIATAN MENJADI SATU CERITA.",
      subline:
        "Satu tahun kepengurusan menghasilkan puluhan kegiatan. DOKU merangkum seluruh dinamika, capaian, dan anggaran ke dalam satu Laporan Tahunan Digital yang prestisius.",
      features: [
        "Rekap kegiatan tahunan",
        "Dokumentasi kegiatan",
        "Ringkasan keuangan",
        "Capaian program",
        "Statistik",
        "Visual highlights",
        "Perjalanan organisasi",
      ],
      badge: "ARSIP TAHUNAN // ANNUAL REPORT",
      sampleTabs: {
        overview: "Ringkasan Tahunan",
        financials: "Keuangan & Realisasi",
        milestones: "Linimasa Program",
      },
      mockupKpis: [
        { label: "Total Kegiatan Terlaksana", value: "28 Agenda", note: "100% dari target program kerja" },
        { label: "Efisiensi Penyerapan Anggaran", value: "96.4%", note: "Tercatat dan terverifikasi akuntabel" },
        { label: "Akumulasi Partisipan", value: "14.200+", note: "Terdata lewat sistem kehadiran digital" },
        { label: "Integritas Arsip Terpadu", value: "TERKUNCI", note: "Siap diserahterimakan ke pengurus baru" },
      ],
      cta: "Konsultasikan Laporan Tahunan →",
    },
    pricing: {
      smallLabel: "PAKET INVESTASI",
      headline: "PILIH STRUKTUR LAYANAN",
      subline:
        "Skema yang transparan, dapat disesuaikan dengan skala kegiatan serta kebutuhan akuntabilitas organisasi Anda.",
      badgeMostRequested: "PALING DIMINATI",
      ctaBasic: "MULAI SEKARANG",
      ctaComplete: "MULAI SEKARANG",
      ctaAnnual: "SESUAI KEBUTUHAN",
      packages: [
        {
          id: "basic",
          name: "DOKU BASIC",
          forWho: "Untuk kegiatan sederhana.",
          priceTag: "Kegiatan Tunggal / Simple Event",
          isFeatured: false,
          features: [
            "Fotografi acara (Event photography)",
            "Dokumentasi digital beresolusi penuh",
            "Laporan kegiatan dasar (Basic event report)",
            "Penyimpanan berkas Google Drive tertata",
            "Batas waktu pengerjaan 5 hari kerja",
          ],
        },
        {
          id: "complete",
          name: "DOKU COMPLETE",
          forWho: "Untuk organisasi dan kegiatan berskala lebih besar.",
          priceTag: "Solusi Lengkap / Full Suite",
          isFeatured: true,
          features: [
            "Fotografi komprehensif & videografi sinematik",
            "Laporan kegiatan profesional (Full Event Report PDF)",
            "Laporan data & keuangan visual (Infografis)",
            "Arsip digital terstruktur & berindeks rapi",
            "Wawancara peserta & testimoni tokoh kunci",
            "Format master cetak dan digital interaktif",
          ],
        },
        {
          id: "annual",
          name: "DOKU ANNUAL",
          forWho:
            "Untuk organisasi yang membutuhkan dokumentasi sepanjang satu periode kepengurusan.",
          priceTag: "Kemitraan Tahunan / Custom Quote",
          isFeatured: false,
          features: [
            "Dokumentasi multi-kegiatan sepanjang tahun",
            "Arsip digital berkesinambungan",
            "Pelaporan data berkala & ringkasan keuangan",
            "Penyusunan Buku Laporan Tahunan (Annual Report)",
            "Dokumentasi profil & milestone kepengurusan",
            "Pendampingan handover LPJ ke pengurus berikutnya",
          ],
        },
      ],
    },
    about: {
      smallLabel: "TENTANG DOKU®",
      headline: "KAMI PERCAYA SETIAP KEGIATAN MEMILIKI NILAI.",
      manifesto:
        "DOKU hadir dari gagasan bahwa dokumentasi tidak seharusnya hanya menyimpan kenangan. Dokumentasi juga dapat membantu organisasi memahami apa yang telah dilakukan, apa yang telah dicapai, dan apa yang dapat dikembangkan.",
      coreIdea:
        "DOKU mentransformasi kegiatan menjadi cerita yang terstruktur, data yang bermakna, laporan yang profesional, dan arsip digital yang bernilai.",
      principles: [
        {
          title: "Visual yang Bernarasi",
          text: "Bukan sekadar tumpukan jepretan kamera, melainkan bahasa visual yang menyampaikan pesan dan emosi perjuangan organisasi.",
        },
        {
          title: "Data yang Berbicara",
          text: "Informasi angka, absensi, dan anggaran disajikan lugas agar menjadi dasar evaluasi yang adil dan obyektif.",
        },
        {
          title: "Arsip yang Bertahan",
          text: "Sistem pengarsipan yang dirancang agar tetap rapi, aman, dan mudah ditelusuri sepuluh tahun dari sekarang.",
        },
      ],
    },
    testimonials: {
      smallLabel: "PENGALAMAN MITRA",
      headline: "KATA MEREKA TENTANG DOKU",
      subline:
        "Refleksi dari para koordinator dan pimpinan kegiatan setelah menggunakan sistem dokumentasi & pelaporan DOKU.",
      placeholderNote: "Catatan: Bagian ini merupakan konten placeholder representatif.",
      quotes: [
        {
          text: "Laporan dari DOKU membuat LPJ kami tidak lagi berbentuk tumpukan kuitansi acak, melainkan buku portofolio berkelas yang langsung diapresiasi dekanat.",
          author: "Ahmad Fauzan",
          role: "Ketua BEM Fakultas",
          organization: "Organisasi Kemahasiswaan Kampus",
        },
        {
          text: "Para donatur dan wali santri sangat terkesan melihat laporan pembangunan dan arsip digital yang begitu rapi, terindeks, dan transparan dari DOKU.",
          author: "M. Syarifuddin",
          role: "Koordinator Media & Publikasi",
          organization: "Pesantren & Yayasan",
        },
        {
          text: "Bekerja sama dengan DOKU memberikan nilai tambah luar biasa bagi agensi kami. Klien korporat mendapatkan laporan evaluasi yang melampaui ekspektasi.",
          author: "Sarah Jessica",
          role: "Lead Event Producer",
          organization: "Penyelenggara Acara",
        },
      ],
    },
    contact: {
      smallLabel: "KONTAK DOKU®",
      headline: "PUNYA PROYEK YANG INGIN DIKERJAKAN?",
      subline:
        "Mari bicarakan bagaimana DOKU dapat mengabadikan kegiatan Anda dan mengubahnya menjadi laporan serta arsip yang terstruktur.",
      form: {
        name: "Nama Lengkap",
        namePlaceholder: "Masukkan nama Anda",
        org: "Organisasi / Lembaga",
        orgPlaceholder: "cth. BEM Fakultas / Yayasan Bina Insan",
        email: "Email",
        emailPlaceholder: "nama@organisasi.id",
        whatsapp: "Nomor WhatsApp",
        whatsappPlaceholder: "+62 8...",
        projectType: "Jenis Proyek",
        types: [
          { id: "campus", label: "Acara Kampus / Sekolah" },
          { id: "foundation", label: "Pesantren & Yayasan" },
          { id: "community", label: "Komunitas & Gerakan" },
          { id: "seminar", label: "Seminar & Konferensi" },
          { id: "annual", label: "Laporan Tahunan (Annual)" },
          { id: "other", label: "Lainnya" },
        ],
        projectDate: "Tanggal Kegiatan",
        tellUs: "Ceritakan proyekmu",
        tellUsPlaceholder:
          "Deskripsikan agenda kegiatan, perkiraan jumlah peserta, dan ekspektasi luaran yang dibutuhkan...",
        btnSubmit: "KIRIM PERMINTAAN PROYEK →",
        btnWhatsapp: "Diskusikan via WhatsApp Langsung →",
        orText: "atau hubungi lewat saluran instan:",
        successTitle: "Permintaan Proyek Terkirim!",
        successMsg:
          "Terima kasih telah mempercayakan rencana kegiatan Anda kepada DOKU. Tim kami akan menghubungi Anda melalui WhatsApp / Email dalam waktu 1x24 jam kerja.",
        selectedPackageNote: "Paket dipilih:",
      },
      identity: {
        basedInLabel: "Basis Operasional",
        serviceAreaLabel: "Wilayah Layanan",
        officialEmailLabel: "Email Resmi",
        officialWhatsappLabel: "WhatsApp Resmi",
        instagramLabel: "Instagram",
        websiteLabel: "Situs Web",
      },
    },
    finalCta: {
      headline: "MARI DOKUMENTASIKAN\nHAL-HAL YANG BERARTI.",
      supporting: "Kegiatanmu selesai. Ceritanya tidak harus berhenti.",
      btn: "MULAI PROYEK →",
    },
    footer: {
      tagline: "Dokumentasikan Momen. Pahami Data. Tunjukkan Dampaknya.",
      navTitle: "Navigasi",
      contactTitle: "Kontak & Identitas",
      legalTitle: "Kategori Layanan",
      copyright: "© 2026 DOKU®. All rights reserved.",
      allRightsReserved: "Hak cipta dilindungi undang-undang.",
      language: "Bahasa",
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
      startProject: "Start a Project →",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      smallLabel: "DOKU®",
      headline: "EVERY EVENT\nLEAVES A STORY.",
      supportingText:
        "We capture the moments, organize the data, and turn every activity into a meaningful record.",
      categories: ["DOCUMENTATION", "DATA", "REPORT", "ARCHIVE"],
      btnPrimary: "Start a Project →",
      btnSecondary: "Explore Our Work",
      liveBadge: "ACCOUNTABILITY RECORDING ● JAKARTA",
      archiveCode: "DOKU // STRUCTURED ARCHIVE",
      recordBadge: "01 DOCUMENTATION + DATA + ARCHIVE",
    },
    intro: {
      smallLabel: "POSITIONING & PHILOSOPHY",
      headline: "WE DON'T JUST TAKE PICTURES.",
      bodyText:
        "DOKU combines visual documentation, data organization, reporting, and digital archiving to help organizations understand, preserve, and communicate the impact of their activities.",
      highlights: [
        {
          step: "01",
          word: "CAPTURE.",
          sub: "Recording critical moments, human expression, and on-the-ground dynamics.",
        },
        {
          step: "02",
          word: "ORGANIZE.",
          sub: "Curating thousands of photos, videos, metadata, and files into one disciplined repository.",
        },
        {
          step: "03",
          word: "UNDERSTAND.",
          sub: "Analyzing program achievements, participation metrics, and resource efficiency.",
        },
        {
          step: "04",
          word: "PRESENT.",
          sub: "Delivering executive-ready reports, visual dashboards, and turnkey digital archives.",
        },
      ],
    },
    beforeAfter: {
      smallLabel: "STRUCTURAL TRANSFORMATION",
      headline: "BEFORE & AFTER DOKU",
      subline:
        "Witness how chaotic conventional event folders transform into audit-ready institutional assets.",
      viewModeSide: "Side by Side",
      viewModeSlider: "Interactive Mode",
      before: {
        badge: "BEFORE DOKU",
        title: "The Chaos of Conventional Documentation",
        items: [
          {
            metric: "3,248 Photos",
            desc: "Scattered across devices and messaging apps without naming standards.",
          },
          {
            metric: "17 Documents",
            desc: "Stored in different folders, vulnerable to being lost upon leadership transition.",
          },
          {
            metric: "4 Excel Files",
            desc: "Difficult to understand, fragmented formulas, and unlinked to visual proof.",
          },
          {
            metric: "1 Event",
            desc: "But no complete story for leadership, benefactors, or future archive records.",
          },
        ],
      },
      after: {
        badge: "AFTER DOKU",
        title: "The DOKU Documentation & Reporting Ecosystem",
        items: [
          {
            code: "01 DIGITAL ARCHIVE",
            title: "Structured Digital Archive",
            desc: "Full-resolution curated media, systematically cataloged and accessible across future team generations.",
          },
          {
            code: "01 EVENT REPORT",
            title: "Executive Event Report",
            desc: "Comprehensive editorial publication containing summaries, achievements, curated photos, and evaluations.",
          },
          {
            code: "01 DATA DASHBOARD",
            title: "Visual Data Dashboard",
            desc: "Clear visual metrics on attendance, participant demographics, and financial transparency.",
          },
          {
            code: "01 COMPLETE STORY",
            title: "Sustainable Impact Narrative",
            desc: "An integrated record proving the value and accountability of the organization to all stakeholders.",
          },
        ],
      },
    },
    services: {
      smallLabel: "OUR CAPABILITIES",
      headline: "DOKU® SERVICES",
      subline:
        "Four integrated service pillars engineered specifically for modern institutional transparency, reporting, and archival standards.",
      cards: [
        {
          number: "01",
          tag: "VISUAL ASSET",
          title: "EVENT DOCUMENTATION",
          description:
            "Photography and videography that capture the people, moments, atmosphere, and details that define your event.",
          deliverables: [
            "Mirrorless Cameras & Cinema Prime Optics",
            "Full-Resolution Print & Web Master Curation",
            "Cinematic Video Highlight Reel (1–3 Mins)",
            "Real-Time Field Asset Management",
          ],
        },
        {
          number: "02",
          tag: "EXECUTIVE REPORT",
          title: "EVENT REPORT",
          description:
            "Professional reports containing event overview, participants, achievements, documentation, evaluation, and recommendations.",
          deliverables: [
            "Modern Editorial Magazine Dossier Layout",
            "Executive Briefing Ready for Sponsors & Deans",
            "Narrative Storytelling & Key Quote Curation",
            "Interactive PDF & Print-Ready Master Files",
          ],
        },
        {
          number: "03",
          tag: "ACCOUNTABILITY",
          title: "DATA & FINANCIAL REPORT",
          description:
            "Transform raw information, financial data, and event statistics into clear and useful visual reports.",
          deliverables: [
            "Participant Metrics & Survey Infographics",
            "Budget Allocation & Expense Breakdown Charts",
            "Key Performance Indicators (Event KPIs)",
            "Visual Audit Verification for Sponsors",
          ],
        },
        {
          number: "04",
          tag: "HERITAGE REPOSITORY",
          title: "DIGITAL ARCHIVE",
          description:
            "Organize photos, videos, documents, reports, and data into a structured digital archive that remains accessible for the future.",
          deliverables: [
            "Standardized DOKU Folder Taxonomy",
            "Systematic Naming & Instant Search Indexes",
            "Protected Long-Term Cloud Storage",
            "Executive Handover Manual for New Officers",
          ],
        },
      ],
    },
    signature: {
      smallLabel: "THE BENCHMARK",
      headline: "YOUR EVENT DESERVES MORE THAN A GOOGLE DRIVE.",
      description:
        "DOKU transforms scattered photos, documents, and data into a professional digital record that your organization can actually use.",
      points: [
        {
          label: "Beyond Random Links",
          text: "No more disorganized Google Drive folders that are never opened after the event ends.",
        },
        {
          label: "Institutional Asset",
          text: "A prestigious document that instills confidence in university boards, trustees, and donors.",
        },
        {
          label: "Organizational Heritage",
          text: "An invaluable knowledge base and historical foundation for subsequent committee generations.",
        },
      ],
    },
    howItWorks: {
      smallLabel: "METHODOLOGY",
      headline: "HOW DOKU WORKS",
      subline:
        "A rigorous four-stage workflow from pre-event strategic alignment through final digital archive handover.",
      steps: [
        {
          number: "01",
          title: "CAPTURE",
          subtitle: "TANGKAP",
          description:
            "Moments, people, activities, dynamics, and raw information are systematically captured on the ground.",
        },
        {
          number: "02",
          title: "ORGANIZE",
          subtitle: "KELOLA",
          description:
            "Photos, video footage, administrative files, and metadata are curated and indexed into the DOKU taxonomy.",
        },
        {
          number: "03",
          title: "ANALYZE",
          subtitle: "PAHAMI",
          description:
            "Outcomes, statistics, spending, and achievements are translated into actionable, legible visual insights.",
        },
        {
          number: "04",
          title: "PRESENT",
          subtitle: "TAMPILKAN",
          description:
            "Professional reports, interactive dashboards, and cloud archives are delivered in presentation-ready formats.",
        },
      ],
    },
    portfolio: {
      smallLabel: "CASE STUDIES",
      headline: "SELECTED WORK",
      subline:
        "Each project is presented as an in-depth case study, demonstrating how raw event chaos became structured accountability.",
      filterAll: "All Categories",
      categories: [
        { id: "all", label: "All" },
        { id: "campus", label: "Campus" },
        { id: "organization", label: "Organization" },
        { id: "pesantren", label: "Pesantren" },
        { id: "community", label: "Community" },
        { id: "seminar", label: "Seminar" },
        { id: "social", label: "Social Project" },
      ],
      caseStudies: [
        {
          id: "cs-01",
          categoryKey: "campus",
          code: "01 / CAMPUS EVENT",
          title: "PKKMB FEB 2026",
          subtitle: "Freshmen Academic Orientation & Leadership Summit",
          description:
            "From thousands of scattered moments into one structured story.",
          metrics: [
            { value: "1,240", label: "PARTICIPANTS" },
            { value: "3", label: "DAYS" },
            { value: "18", label: "ACTIVITIES" },
            { value: "2,400+", label: "MEDIA ASSETS" },
          ],
          deliverables: [
            "Executive Orientation Report Dossier (84 Pages)",
            "Session Attendance & Completion Dashboard",
            "3-Day Cinematic Documentary Reel",
            "Dedicated Cloud Repository for 2026 Archives",
          ],
          featuredImage: "/src/assets/images/doku_case_campus_1793112396662.jpg",
          status: "FULL ARCHIVE // VERIFIED",
          reportPreviewQuote:
            "DOKU streamlined the documentation of 18 concurrent plenary sessions into a single executive report approved by the university dean within 5 business days.",
        },
        {
          id: "cs-02",
          categoryKey: "social",
          code: "02 / SOCIAL PROJECT & NGO",
          title: "INDONESIA SOCIAL SUMMIT 2025",
          subtitle: "National Social Foundation Conference & Donor Forum",
          description:
            "Connecting on-the-ground volunteer work with transparent and compelling donor accountability.",
          metrics: [
            { value: "34", label: "CITIES INVOLVED" },
            { value: "450+", label: "DELEGATES" },
            { value: "100%", label: "DATA AUDIT" },
            { value: "1 VOL", label: "ANNUAL BOOK" },
          ],
          deliverables: [
            "Donor Accountability Dossier (Audited Layout)",
            "Fund Distribution & Volunteer Action Infographics",
            "Full-Resolution Curated Media Gallery",
            "Key Beneficiary & Leadership Interview Reels",
          ],
          featuredImage: "/src/assets/images/doku_case_social_1793112396659.jpg",
          status: "DONOR AUDIT // COMPLIANT",
          reportPreviewQuote:
            "The data transparency and empathetic visual storytelling delivered by DOKU boosted donor multi-year commitment retention by 42% in the following cycle.",
        },
        {
          id: "cs-03",
          categoryKey: "pesantren",
          code: "03 / PESANTREN & FOUNDATION",
          title: "HAFLAH & KHIDMAH AKBAR 2025",
          subtitle: "Commencement Jubilee & Endowment Forum",
          description:
            "Preserving sacred spiritual traditions while providing modern accounting and digital archives for thousands of families.",
          metrics: [
            { value: "8,500", label: "ATTENDEES" },
            { value: "4", label: "EVENT DAYS" },
            { value: "100%", label: "DONOR TRANSPARENCY" },
            { value: "4,100+", label: "ARCHIVED FILES" },
          ],
          deliverables: [
            "Exclusive Haflah Commemorative Book",
            "Endowment Fund & Financial Accountability Report",
            "Class-by-Class High-Resolution Photo Vault",
            "Archived Sermons & Leadership Keynotes",
          ],
          featuredImage: "/src/assets/images/doku_hero_event_1793112376061.jpg",
          status: "HERITAGE VAULT // INDEXED",
          reportPreviewQuote:
            "The report book crafted by DOKU became a permanent historical artifact preserved in the foundation library and presented to distinguished alumni worldwide.",
        },
      ],
      viewDetails: "View Case Study Dossier →",
      closeModal: "Close",
      executiveSummary: "Executive Summary & Reporting Highlights",
    },
    stats: {
      smallLabel: "IMPACT METRICS",
      headline: "THE NUMBERS BEHIND THE STORY",
      items: [
        {
          value: "50+",
          number: 50,
          suffix: "+",
          label: "Events Documented",
          subtext: "From massive national symposiums to academic summits.",
        },
        {
          value: "10K+",
          number: 10000,
          suffix: "+",
          label: "Media Assets Organized",
          subtext: "High-resolution photos, footage, and indexed records.",
        },
        {
          value: "25+",
          number: 25,
          suffix: "+",
          label: "Organizations Supported",
          subtext: "Universities, foundations, NGOs, and collectives.",
        },
        {
          value: "100%",
          number: 100,
          suffix: "%",
          label: "Digital Archive",
          subtext: "All files indexed and readily accessible on demand.",
        },
      ],
    },
    whoWeServe: {
      smallLabel: "CLIENT SECTORS",
      headline: "WHO WE SERVE",
      subline:
        "DOKU's documentation and accountability model adapts cleanly to diverse governance and organizational structures.",
      sectors: [
        {
          code: "01",
          title: "CAMPUS ORGANIZATIONS",
          description:
            "Student unions, representative bodies, departments, and festival committees requiring institutional-grade reports.",
          examples: "Student Councils, Academic Societies, Orientation Boards",
        },
        {
          code: "02",
          title: "SCHOOLS",
          description:
            "Primary through secondary institutions documenting graduations, jubilees, performing arts, and student histories.",
          examples: "High Schools, Commencement Boards, Alumni Associations",
        },
        {
          code: "03",
          title: "PESANTREN & FOUNDATIONS",
          description:
            "Islamic boarding schools and religious foundations requiring endowment stewardship and tradition documentation.",
          examples: "Commencement Jubilees, Waqf Foundations, Heritage Assemblies",
        },
        {
          code: "04",
          title: "COMMUNITIES",
          description:
            "Creative collectives, youth initiatives, and specialized communities seeking to chronicle their cultural evolution.",
          examples: "Creative Collectives, Volunteer Movements, Art Alliances",
        },
        {
          code: "05",
          title: "EVENT ORGANIZERS",
          description:
            "Professional agencies needing premium post-event evaluation dossiers to present to brand sponsors and stakeholders.",
          examples: "Creative Agencies, MICE Operators, Festival Producers",
        },
        {
          code: "06",
          title: "SOCIAL ORGANIZATIONS",
          description:
            "NGOs, charities, and philanthropic institutions committed to transparent, authoritative public impact reporting.",
          examples: "Non-Governmental Organizations, Philanthropic Trusts",
        },
      ],
    },
    whyDoku: {
      smallLabel: "OUR ADVANTAGE",
      headline: "ONE EVENT.\nONE COMPLETE RECORD.",
      subline:
        "Connecting documentary visual artistry with quantitative reporting discipline.",
      pillars: [
        {
          code: "01",
          title: "MORE THAN DOCUMENTATION",
          description:
            "We understand the story behind every activity.",
        },
        {
          code: "02",
          title: "DATA DRIVEN",
          description:
            "Information is organized into useful insights.",
        },
        {
          code: "03",
          title: "PROFESSIONAL REPORTING",
          description:
            "Activities are presented clearly and professionally.",
        },
        {
          code: "04",
          title: "LONG-TERM ARCHIVE",
          description:
            "Your organization's history remains accessible for the future.",
        },
      ],
    },
    annualReport: {
      smallLabel: "SPECIALIZED ENGAGEMENT",
      headline: "TURN A YEAR OF ACTIVITIES INTO ONE STORY.",
      subline:
        "An entire year of leadership produces dozens of initiatives. DOKU condenses every effort, expense, and impact into an authoritative Digital Annual Report.",
      features: [
        "Yearly activities",
        "Event documentation",
        "Financial overview",
        "Program achievements",
        "Statistics",
        "Visual highlights",
        "Organizational milestones",
      ],
      badge: "ANNUAL DOSSIER // HERITAGE",
      sampleTabs: {
        overview: "Annual Summary",
        financials: "Budget & Realization",
        milestones: "Program Timeline",
      },
      mockupKpis: [
        { label: "Total Initiatives Executed", value: "28 Agendas", note: "100% of planned program goals" },
        { label: "Budget Utilization Efficiency", value: "96.4%", note: "Documented and audit-verified" },
        { label: "Cumulative Participants", value: "14,200+", note: "Tracked across digital check-in systems" },
        { label: "Master Archive Status", value: "LOCKED", note: "Ready for leadership transition handover" },
      ],
      cta: "Plan Your Annual Report →",
    },
    pricing: {
      smallLabel: "SERVICE TIERS",
      headline: "ACCOUNTABILITY PACKAGES",
      subline:
        "Transparent investment tiers structured to match your event scale and reporting requirements.",
      badgeMostRequested: "MOST REQUESTED",
      ctaBasic: "GET STARTED",
      ctaComplete: "GET STARTED",
      ctaAnnual: "CUSTOM QUOTE",
      packages: [
        {
          id: "basic",
          name: "DOKU BASIC",
          forWho: "For simple events.",
          priceTag: "Single Event / Standard Scope",
          isFeatured: false,
          features: [
            "Event photography (Full-frame)",
            "Digital documentation curation",
            "Basic event report (Summary PDF)",
            "Organized cloud repository access",
            "5 business days turnaround time",
          ],
        },
        {
          id: "complete",
          name: "DOKU COMPLETE",
          forWho: "For organizations and larger events.",
          priceTag: "Comprehensive / Full Suite",
          isFeatured: true,
          features: [
            "Photography & cinematic videography",
            "Comprehensive Event Report (Editorial PDF)",
            "Data & financial report (Visual infographics)",
            "Structured digital archive with taxonomy",
            "Key participant & stakeholder interviews",
            "Print-ready and interactive digital deliverables",
          ],
        },
        {
          id: "annual",
          name: "DOKU ANNUAL",
          forWho:
            "For organizations that need documentation throughout an entire period.",
          priceTag: "Full Year Partnership / Custom Quote",
          isFeatured: false,
          features: [
            "Multiple event documentation throughout the year",
            "Continuous structured digital archive",
            "Quarterly data reporting & financial overview",
            "Digital & print-ready Annual Report book",
            "Organizational milestone & history documentation",
            "Handover briefing for successor leadership",
          ],
        },
      ],
    },
    about: {
      smallLabel: "ABOUT DOKU®",
      headline: "WE BELIEVE EVERY ACTIVITY HAS VALUE.",
      manifesto:
        "DOKU was created from the idea that documentation should not simply preserve memories. It should help organizations understand what they have done, what they have achieved, and what they can improve.",
      coreIdea:
        "DOKU transforms activities into structured stories, meaningful data, professional reports, and valuable digital archives.",
      principles: [
        {
          title: "Visuals with Narrative",
          text: "Beyond random snaps—a coherent visual language conveying purpose, dignity, and collective effort.",
        },
        {
          title: "Data that Speaks",
          text: "Attendance figures and budgets translated into clear visual evidence for transparent stewardship.",
        },
        {
          title: "Archives that Endure",
          text: "A retrieval taxonomy crafted to remain accessible, organized, and reliable ten years down the road.",
        },
      ],
    },
    testimonials: {
      smallLabel: "TESTIMONIALS",
      headline: "WHAT LEADERS SAY",
      subline:
        "Reflections from committee coordinators and leaders who implemented the DOKU documentation and reporting system.",
      placeholderNote: "Note: This section features representative placeholder testimonials.",
      quotes: [
        {
          text: "DOKU's reporting dossier turned our accountability report from a stack of loose receipts into a prestigious portfolio praised by our faculty deans.",
          author: "Ahmad Fauzan",
          role: "Student Council President",
          organization: "Campus Student Organization",
        },
        {
          text: "Our benefactors and parents were profoundly impressed by the structured digital archive and transparent visual reporting delivered by DOKU.",
          author: "M. Syarifuddin",
          role: "Media & Publication Coordinator",
          organization: "Pesantren & Foundation",
        },
        {
          text: "Partnering with DOKU gave our event production agency a massive competitive edge. Clients receive post-event reporting far beyond standard photography.",
          author: "Sarah Jessica",
          role: "Lead Event Producer",
          organization: "Creative Event Production",
        },
      ],
    },
    contact: {
      smallLabel: "CONTACT DOKU®",
      headline: "HAVE A PROJECT IN MIND?",
      subline:
        "Let's discuss how DOKU can capture your upcoming event and translate it into an audit-grade report and digital archive.",
      form: {
        name: "Full Name",
        namePlaceholder: "Enter your full name",
        org: "Organization / Institution",
        orgPlaceholder: "e.g. Student Council / Social Foundation",
        email: "Email Address",
        emailPlaceholder: "name@organization.id",
        whatsapp: "WhatsApp Number",
        whatsappPlaceholder: "+62 8...",
        projectType: "Project Type",
        types: [
          { id: "campus", label: "Campus / School Event" },
          { id: "foundation", label: "Pesantren & Foundation" },
          { id: "community", label: "Community & Movement" },
          { id: "seminar", label: "Seminar & Conference" },
          { id: "annual", label: "Annual Report (Full Year)" },
          { id: "other", label: "Other" },
        ],
        projectDate: "Project Date",
        tellUs: "Tell us about your project",
        tellUsPlaceholder:
          "Describe your event agenda, expected attendees, and reporting deliverables...",
        btnSubmit: "SEND PROJECT INQUIRY →",
        btnWhatsapp: "Discuss Directly on WhatsApp →",
        orText: "or reach us directly via:",
        successTitle: "Project Inquiry Submitted!",
        successMsg:
          "Thank you for contacting DOKU. Our team will review your project parameters and respond via WhatsApp / Email within 1 business day.",
        selectedPackageNote: "Selected package:",
      },
      identity: {
        basedInLabel: "Operational Base",
        serviceAreaLabel: "Service Coverage",
        officialEmailLabel: "Official Email",
        officialWhatsappLabel: "Official WhatsApp",
        instagramLabel: "Instagram",
        websiteLabel: "Website",
      },
    },
    finalCta: {
      headline: "LET'S DOCUMENT\nWHAT MATTERS.",
      supporting: "Your event ends. Your story doesn't have to.",
      btn: "START A PROJECT →",
    },
    footer: {
      tagline: "Document the Moment. Understand the Data. Show the Impact.",
      navTitle: "Navigation",
      contactTitle: "Contact & Identity",
      legalTitle: "Service Categories",
      copyright: "© 2026 DOKU®. All rights reserved.",
      allRightsReserved: "All rights reserved.",
      language: "Language",
    },
  },
};
