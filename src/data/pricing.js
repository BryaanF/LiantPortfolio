import nomadsLanding from "../assets/images/nomadsbyliant/landingpage.png";
import nomadsProfile from "../assets/images/nomadsbyliant/profilepage.png";
import nomadsCheckout from "../assets/images/nomadsbyliant/checkoutsuccessmidtrans.png";
import nomadsAllTicket from "../assets/images/nomadsbyliant/allticket.png";
import nomadsPrintTicket from "../assets/images/nomadsbyliant/printticket.png";
import nomadsSuccessCheckout from "../assets/images/nomadsbyliant/succescheckoutpage.png";
import nomadsAdminDashboard from "../assets/images/nomadsbyliant/admindashboard.png";
import nomadsAdminPaketTravel from "../assets/images/nomadsbyliant/adminpakettravel.png";
import nomadsAdminGaleriTravel from "../assets/images/nomadsbyliant/admingaleritravel.png";
import nomadsAdminTransaksi from "../assets/images/nomadsbyliant/admintransaksi.png";
import nomadsAdminProfile from "../assets/images/nomadsbyliant/adminprofile.png";
import nomadsTripDetail from "../assets/images/nomadsbyliant/tripdetail.png";
import nomadsJoinTrip from "../assets/images/nomadsbyliant/jointrip.png";
import nomadsPaymentMidtrans from "../assets/images/nomadsbyliant/paymentmidtrans.png";
import hrisDashboard from "../assets/images/hris-igi/hrisigidashboard.png";
import hrisDataKaryawan from "../assets/images/hris-igi/hrisigidatakaryawan.png";
import hrisPenggajian from "../assets/images/hris-igi/hrisigipenggajian.png";
import hrisRekrutmen from "../assets/images/hris-igi/hrisigirekrutmen.png";
import hrisSlipGaji from "../assets/images/hris-igi/hrisigislipgaji.png";
import hrisPanduan from "../assets/images/hris-igi/hrisigipanduan.png";
import zainzoLanding from "../assets/images/contact-zainzo/landingpage.png";

/* Pricing Section */
export const pricingSection = {
  display: true,
  title: {
    en: "Investment Plans",
    id: "Paket Investasi"
  },
  description: {
    en: "Transparent pricing designed around real business needs. Every package includes professional development, documentation, and direct communication with me — no hidden fees, no sugarcoating, just real solution.",
    id: "Harga transparan yang dirancang sesuai kebutuhan bisnis nyata. Setiap paket mencakup pengembangan profesional, dokumentasi, dan komunikasi langsung dengan saya — tanpa biaya tersembunyi, tanpa basa-basi, hanya solusi nyata."
  },

  packages: [
    {
      id: "starter",
      title: {en: "Static Landing Page", id: "Static Landing Page"},
      price: 2500000,
      shortPrice: {en: "IDR 2.5M", id: "2.5jt"},
      idealFor: {
        en: "Personal Brand, Single-Product MSMEs",
        id: "Personal Brand, UMKM Produk Tunggal"
      },
      screenshots: [
        {
          url: nomadsLanding,
          caption: {
            en: "Nomadsbyliant — travel booking landing page",
            id: "Nomadsbyliant — halaman utama booking travel"
          }
        },
        {
          url: zainzoLanding,
          caption: {
            en: "Zainzo — broadcast SaaS landing page",
            id: "Zainzo — halaman utama broadcast SaaS"
          }
        }
      ],
      desc: {
        en: "Ultra-fast web page for marketing campaigns. Focused on sales conversion.",
        id: "Halaman web ultra-cepat untuk kampanye marketing. Fokus pada konversi penjualan."
      },
      longDesc: {
        en: "Designed for < 2 sec load time. No heavy database, highly secure against hacks — perfect for a digital business card or product landing page.",
        id: "Paket ini dirancang untuk kecepatan loading < 2 detik. Tanpa database yang berat, sangat aman dari hack, dan cocok untuk Anda yang butuh kartu nama digital atau landing page penawaran produk."
      },
      specs: {
        duration: "3-5 Days Work",
        revisions: "2 Rounds (Major UI)",
        warranty: "1 Week (Asset Fix)",
        techStack: "React / HTML5 + Tailwind",
        delivery: "Managed PaaS (Vercel/Netlify)"
      },
      features: [
        "Single Long-Scroll Page (Max 5 Sections)",
        "Mobile-First Responsive Design",
        "WhatsApp Direct Link Integration",
        "Google Analytics Basic Setup",
        "High Performance (Lighthouse 90+)"
      ],
      notIncluded: [
        {
          en: "Copywriting (Client Provides)",
          id: "Copywriting (Teks dari Klien)"
        },
        {en: "Domain Name Purchase", id: "Pembelian Nama Domain"},
        {en: "Custom Visual Assets", id: "Aset Visual Kustom (Ilustrasi/Ikon)"}
      ],
      workflow: [
        {
          title: {en: "Briefing", id: "Briefing"},
          desc: {
            en: "Discuss target audience & design references",
            id: "Diskusi target audiens & referensi desain"
          }
        },
        {
          title: {en: "Content", id: "Content"},
          desc: {
            en: "Collect text & photo assets",
            id: "Pengumpulan aset teks & foto"
          }
        },
        {
          title: {en: "Dev", id: "Dev"},
          desc: {
            en: "Coding process & asset optimization",
            id: "Proses coding & optimasi aset"
          }
        },
        {
          title: {en: "Live", id: "Live"},
          desc: {
            en: "PaaS Deployment & handover",
            id: "Deployment PaaS & serah terima"
          }
        }
      ],
      addons: [
        {
          id: "starter_express",
          title: "Express Delivery",
          desc: {
            en: "Priority delivery (30% Faster)",
            id: "Prioritas pengerjaan (30% Lebih Cepat)"
          },
          price: 800000
        },
        {
          id: "starter_maintain",
          title: "Extended Care (1 Year)",
          desc: {
            en: "Asset & content maintenance",
            id: "Pemeliharaan aset & konten"
          },
          price: 1500000
        },
        {
          id: "starter_custom",
          title: "Custom Illustrations",
          desc: {
            en: "2 custom SVG illustrations",
            id: "2 ilustrasi SVG kustom"
          },
          price: 500000
        }
      ]
    },
    {
      id: "business",
      title: {en: "Dynamic CMS Website", id: "Dynamic CMS Website"},
      price: 7500000,
      shortPrice: {en: "IDR 7.5M", id: "7.5jt"},
      idealFor: {
        en: "Medium Enterprises, Agencies, Institutions",
        id: "Perusahaan Menengah, Agensi, Instansi"
      },
      screenshots: [
        {
          url: nomadsProfile,
          caption: {
            en: "Frontend profile page — displays travel packages managed via CMS",
            id: "Halaman profil — menampilkan paket travel yang dikelola via CMS"
          }
        },
        {
          url: nomadsTripDetail,
          caption: {
            en: "Trip detail page — shows full itinerary, price & booking info",
            id: "Halaman detail trip — menampilkan itinerary, harga & info booking"
          }
        },
        {
          url: nomadsJoinTrip,
          caption: {
            en: "Join trip — multi-traveler form before payment",
            id: "Ikut trip — form multi-traveler sebelum pembayaran"
          }
        },
        {
          url: nomadsPaymentMidtrans,
          caption: {
            en: "Midtrans payment popup — secure payment gateway integration",
            id: "Popup pembayaran Midtrans — integrasi payment gateway aman"
          }
        },
        {
          url: nomadsCheckout,
          caption: {
            en: "Checkout page — Midtrans payment gateway integration",
            id: "Halaman checkout — integrasi payment gateway Midtrans"
          }
        },
        {
          url: nomadsSuccessCheckout,
          caption: {
            en: "Successful checkout confirmation page",
            id: "Halaman konfirmasi checkout berhasil"
          }
        },
        {
          url: nomadsAllTicket,
          caption: {
            en: "My Tickets page — user's booking history synced from admin",
            id: "Halaman tiket saya — riwayat booking pengguna sinkron dari admin"
          }
        },
        {
          url: nomadsPrintTicket,
          caption: {
            en: "Print ticket feature — generated from transaction data",
            id: "Fitur cetak tiket — dihasilkan dari data transaksi"
          }
        },
        {
          url: nomadsAdminDashboard,
          caption: {
            en: "Admin dashboard — manage travel packages & content",
            id: "Dashboard admin — kelola paket travel & konten"
          }
        },
        {
          url: nomadsAdminPaketTravel,
          caption: {
            en: "Travel package management in admin panel",
            id: "Manajemen paket travel di panel admin"
          }
        },
        {
          url: nomadsAdminGaleriTravel,
          caption: {
            en: "Gallery management — upload & organize travel photos",
            id: "Manajemen galeri — upload & atur foto travel"
          }
        },
        {
          url: nomadsAdminTransaksi,
          caption: {
            en: "Transaction management — all bookings visible from admin side",
            id: "Manajemen transaksi — semua booking terlihat dari sisi admin"
          }
        },
        {
          url: nomadsAdminProfile,
          caption: {
            en: "Admin profile & settings page",
            id: "Halaman profil & pengaturan admin"
          }
        }
      ],
      desc: {
        en: "Multi-page website with private Admin Panel (CMS) to update news, careers, etc.",
        id: "Website multipage dengan Admin Panel (CMS) privat untuk update berita, karir, dan lainnya."
      },
      longDesc: {
        en: "A professional solution to build credibility. Comes with a lightweight, secure admin panel (not WordPress) so your team can easily update articles, galleries, or job postings.",
        id: "Solusi profesional untuk membangun kredibilitas. Dilengkapi panel admin khusus (bukan WordPress) yang ringan dan aman, memudahkan staf Anda mengupdate artikel, galeri, atau lowongan kerja."
      },
      specs: {
        duration: "14-21 Days Work",
        revisions: "3 Rounds (UI & Flow)",
        warranty: "2 Weeks (Bug Fix)",
        techStack: "Laravel / CodeIgniter + MySQL",
        delivery: "VPS / Shared Hosting Setup"
      },
      features: [
        "Up to 8 Dynamic Pages",
        "Secure Admin Dashboard (Custom)",
        "Dynamic Blog / News System",
        "SEO On-Page Optimization",
        "Contact Form to Email"
      ],
      notIncluded: [
        {en: "Cloud VPS / Hosting Fee", id: "Biaya Cloud VPS / Hosting"},
        {en: "Logo Design", id: "Desain Logo"}
      ],
      workflow: [
        {
          title: {en: "Sitemap", id: "Sitemap"},
          desc: {
            en: "Plan menu & page structure",
            id: "Perancangan struktur menu"
          }
        },
        {
          title: {en: "UI Mockup", id: "UI Mockup"},
          desc: {en: "Preview visual design", id: "Preview desain visual"}
        },
        {
          title: {en: "CMS Dev", id: "CMS Dev"},
          desc: {
            en: "Build admin panel & database",
            id: "Pengerjaan panel admin & database"
          }
        },
        {
          title: {en: "Training", id: "Training"},
          desc: {
            en: "Guide on how to input content",
            id: "Panduan cara input konten"
          }
        }
      ],
      isPopular: true,
      addons: [
        {
          id: "biz_express",
          title: "Express Delivery",
          desc: {
            en: "Priority delivery (30% Faster)",
            id: "Prioritas pengerjaan (30% Lebih Cepat)"
          },
          price: 2500000
        },
        {
          id: "biz_maintain",
          title: "Extended Care (1 Year)",
          desc: {
            en: "Server maintenance & update guarantee",
            id: "Jaminan maintenance server & update"
          },
          price: 3500000
        },
        {
          id: "biz_email",
          title: "Email Template Design",
          desc: {
            en: "Custom branded email template (1 design)",
            id: "Template email branded kustom (1 desain)"
          },
          price: 800000
        }
      ]
    },
    {
      id: "custom",
      title: {en: "Custom Web / SaaS App", id: "Custom Web / SaaS App"},
      isCustomQuote: true,
      price: 15000000,
      shortPrice: {en: "Starts at IDR 15M+", id: "Mulai Rp 15jt+"},
      idealFor: {
        en: "Startups, Corporate Operations, B2B",
        id: "Startups, Operasional Korporat, B2B"
      },
      screenshots: [
        {
          url: hrisDashboard,
          caption: {
            en: "HRIS IGI — custom SaaS HR dashboard with multi-role access",
            id: "HRIS IGI — dashboard HR SaaS kustom dengan akses multi-role"
          }
        },
        {
          url: hrisDataKaryawan,
          caption: {
            en: "Employee master data management module",
            id: "Modul manajemen data master karyawan"
          }
        },
        {
          url: hrisPenggajian,
          caption: {
            en: "Payroll automation with dynamic calculations",
            id: "Otomatisasi penggajian dengan perhitungan dinamis"
          }
        },
        {
          url: hrisRekrutmen,
          caption: {
            en: "Recruitment pipeline management",
            id: "Manajemen pipeline rekrutmen"
          }
        },
        {
          url: hrisSlipGaji,
          caption: {
            en: "Digital payslip and salary history",
            id: "Slip gaji digital dan riwayat gaji"
          }
        },
        {
          url: hrisPanduan,
          caption: {
            en: "Comprehensive system documentation",
            id: "Dokumentasi sistem komprehensif"
          }
        }
      ],
      desc: {
        en: "Complex business applications. Custom logic tailored to your SOP (HRIS, SIS, Booking).",
        id: "Aplikasi bisnis kompleks. Logika spesifik sesuai SOP perusahaan (HRIS, SIS, Booking)."
      },
      longDesc: {
        en: "Not just an informational website — a digital work tool. We build systems with tiered access (Admin/User/Staff), automated reports, and third-party API integration.",
        id: "Bukan sekadar website informasi, tapi alat bantu kerja digital. Kami membangun sistem dengan hak akses bertingkat (Admin/User/Staff), laporan otomatis, dan integrasi API pihak ketiga."
      },
      specs: {
        duration: "1-3 Months+",
        revisions: "SLA Based (Dev Phase)",
        warranty: "3 Months (Priority Support)",
        techStack: "Fullstack Laravel / ExpressJS",
        delivery: "Dockerized VPS Setup + Full IP"
      },
      features: [
        "Complex Database Architecture",
        "Multi-Role Access (RBAC)",
        "API Integration (Payment/Maps)",
        "Real-time Data Processing",
        "Scalable Infrastructure"
      ],
      notIncluded: [
        {en: "3rd Party API Costs", id: "Biaya Layanan API Pihak Ketiga"},
        {
          en: "Cloud Infrastructure Fees",
          id: "Biaya Infrastruktur Cloud (AWS/DO)"
        }
      ],
      addons: [
        {
          id: "custom_express",
          title: "Express Delivery",
          desc: {
            en: "Priority development (Weekend coding)",
            id: "Prioritas pengerjaan (Weekend coding)"
          },
          price: 5000000
        },
        {
          id: "custom_maintain",
          title: "SLA Maintenance (1 Year)",
          desc: {
            en: "Server maintenance, backup & bug monitoring",
            id: "Maintenance server, backup & pantauan bug"
          },
          price: 8000000
        },
        {
          id: "custom_api",
          title: "API Documentation",
          desc: {
            en: "Postman collection + Swagger docs",
            id: "Koleksi Postman + dokumentasi Swagger"
          },
          price: 2000000
        },
        {
          id: "custom_deploy",
          title: "Staging Environment Setup",
          desc: {
            en: "Docker CI/CD + staging server config",
            id: "Docker CI/CD + konfigurasi server staging"
          },
          price: 3000000
        }
      ],
      workflow: [
        {
          title: {en: "Analysis", id: "Analysis"},
          desc: {
            en: "Break down workflow & business needs",
            id: "Bedah alur kerja & masalah bisnis"
          }
        },
        {
          title: {en: "System Design", id: "System Design"},
          desc: {
            en: "Database schema & wireframing",
            id: "Skema database & wireframing UI"
          }
        },
        {
          title: {en: "Sprint", id: "Sprint"},
          desc: {
            en: "Incremental work per feature",
            id: "Pengerjaan bertahap per fitur"
          }
        },
        {
          title: {en: "UAT & Live", id: "UAT & Live"},
          desc: {
            en: "User Acceptance Test & Production release",
            id: "User Acceptance Test & Rilis Produksi"
          }
        }
      ]
    }
  ],

  featuresList: [
    {
      id: "feat_anim",
      title: "Advanced Animations",
      desc: {
        en: "Premium scroll interactions (GSAP)",
        id: "Interaksi scroll premium (GSAP)"
      },
      price: 1000000
    },
    {
      id: "feat_dark",
      title: "Dark Mode System",
      desc: {en: "Toggle light/dark theme", id: "Opsi ganti tema terang/gelap"},
      price: 800000
    },
    {
      id: "feat_lang",
      title: "Multi-Language",
      desc: {en: "Support EN/ID (2 languages)", id: "Support ID/EN (2 Bahasa)"},
      price: 1500000
    }
  ],

  addonsList: []
};
