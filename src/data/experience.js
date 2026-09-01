import summaeduLogo from "../assets/images/summaedu-logo.webp";
import pedulyLogo from "../assets/images/pedulyLogo.png";
import logoigi from "../assets/images/logoigi.png";
import kejatiLogo from "../assets/images/kejatiJatimLogo.png";
import lintasartaLogo from "../assets/images/lintasartaLogo.png";

/* Work Experience Section — newest to oldest */
export const workExperiences = {
  display: true,
  title: {
    en: "Professional Work Experience",
    id: "Pengalaman Bekerja Profesional"
  },
  subtitle: {
    en: "Professional track record in software development and IT infrastructure.",
    id: "Rekam jejak profesional dalam pengembangan software dan infrastruktur TI."
  },
  experience: [
    {
      role: "Programmer",
      company: "Summa Edu",
      companylogo: summaeduLogo,
      date: "June 2025 – Present",
      desc: {
        en: "Lead end-to-end application development for school management systems covering HR, finance, grading, and automated report cards. Also provides cross-functional IT support including server maintenance, printer repairs, and lab PC upkeep.",
        id: "Memimpin pengembangan aplikasi end-to-end untuk sistem manajemen sekolah mencakup kebutuhan SDM, keuangan, penilaian, dan pencetakan rapor otomatis. Juga memberikan dukungan TI lintas fungsi termasuk perawatan server, perbaikan printer, dan pemeliharaan PC laboratorium."
      },
      descBullets: [
        {
          en: "Built full-stack school management applications covering employee data, finance, grading, and automated report card generation.",
          id: "Membangun aplikasi manajemen sekolah full-stack mencakup data karyawan, keuangan, penilaian, dan pencetakan rapor otomatis."
        },
        {
          en: "Developed various analytical reports to support school operational decision-making.",
          id: "Mengembangkan berbagai laporan analitis untuk mendukung pengambilan keputusan operasional sekolah."
        },
        {
          en: "Provided IT infrastructure support including server maintenance, printer repair, and PC lab management.",
          id: "Memberikan dukungan infrastruktur TI termasuk perawatan server, perbaikan printer, dan manajemen lab PC."
        }
      ]
    },
    {
      role: "Backend Developer",
      company: "Peduly",
      companylogo: pedulyLogo,
      date: "March 2025 – June 2025",
      desc: {
        en: "Engineered a high-performance broadcast system capable of handling mass messaging via WhatsApp and Email using Laravel, ExpressJS, and MySQL.",
        id: "Merekayasa sistem broadcast berkinerja tinggi yang mampu menangani pesan massal melalui WhatsApp dan Email menggunakan Laravel, ExpressJS, dan MySQL."
      },
      descBullets: [
        {
          en: "Designed and implemented robust RESTful APIs for the broadcasting module.",
          id: "Merancang dan mengimplementasikan RESTful API yang tangguh untuk modul broadcast."
        },
        {
          en: "Created comprehensive API documentation to ensure seamless handover and scalability for future developers.",
          id: "Membuat dokumentasi API komprehensif untuk memastikan serah terima yang mulus dan skalabilitas bagi developer selanjutnya."
        },
        {
          en: "Optimized database queries to handle high-volume data traffic efficiently.",
          id: "Mengoptimalkan query database untuk menangani lalu lintas data volume tinggi secara efisien."
        }
      ]
    },
    {
      role: "Full Stack Web Developer",
      company: "PT. Indo Global Impex",
      companylogo: logoigi,
      date: "January 2024 – June 2024",
      desc: {
        en: "Developed an end-to-end Human Resources Information System (HRIS) to manage employee data, attendance, leave requests, and payroll automation, streamlining HR operations.",
        id: "Mengembangkan Sistem Informasi Sumber Daya Manusia (HRIS) end-to-end untuk mengelola data karyawan, absensi, perizinan cuti, dan otomatisasi penggajian, menyederhanakan operasional HR."
      },
      descBullets: [
        {
          en: "Built a full-stack HRIS application covering employee master data, attendance tracking, and leave management.",
          id: "Membangun aplikasi HRIS full-stack mencakup data master karyawan, pelacakan absensi, dan manajemen cuti."
        },
        {
          en: "Implemented payroll automation with dynamic salary calculations and integrated reporting.",
          id: "Mengimplementasikan otomatisasi penggajian dengan perhitungan gaji dinamis dan laporan terintegrasi."
        },
        {
          en: "Designed and developed comprehensive system documentation to ensure long-term maintainability.",
          id: "Merancang dan mengembangkan dokumentasi sistem komprehensif untuk memastikan maintainability jangka panjang."
        }
      ]
    },
    {
      role: "Website Developer Intern",
      company: "Kejaksaan Tinggi Jatim",
      companylogo: kejatiLogo,
      date: "August 2023 – September 2023",
      desc: {
        en: "Developed an internal GIS (Geographic Information System) to map personnel availability across provincial and district offices.",
        id: "Mengembangkan GIS (Sistem Informasi Geografis) internal untuk memetakan ketersediaan personel di seluruh kantor provinsi dan kabupaten."
      },
      descBullets: [
        {
          en: "Built the system using Laravel and jQuery for interactive mapping features.",
          id: "Membangun sistem menggunakan Laravel dan jQuery untuk fitur pemetaan interaktif."
        },
        {
          en: "Digitized the organizational data to assist leadership in personnel distribution analysis.",
          id: "Mendigitalisasi data organisasi untuk membantu pimpinan dalam analisis distribusi personel."
        }
      ]
    },
    {
      role: "Website Developer Intern",
      company: "Lintasarta",
      companylogo: lintasartaLogo,
      date: "June 2018 – August 2018",
      desc: {
        en: "Developed a CRUD-based web tool to digitize customer network data, supporting the Network Engineering team's monitoring and management workflows.",
        id: "Mengembangkan web tool berbasis CRUD untuk digitalisasi data jaringan pelanggan, mendukung alur monitoring dan manajemen tim Network Engineering."
      },
      descBullets: [
        {
          en: "Developed a CRUD-based web tool to digitize customer network data, replacing manual logging.",
          id: "Mengembangkan web tool berbasis CRUD untuk mendigitalisasi data jaringan pelanggan, menggantikan pencatatan manual."
        },
        {
          en: "Streamlined internal monitoring workflows, reducing data retrieval time for engineers.",
          id: "Menyederhanakan alur kerja monitoring internal, mengurangi waktu pengambilan data untuk engineer."
        }
      ]
    }
  ]
};
