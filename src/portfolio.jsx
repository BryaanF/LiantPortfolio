/* Change this file to get your personal Portfolio */
/* Bilingual format: { en: "...", id: "..." } for translatable strings */

// Import package penting
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
// IMPORT GAMBAR SECARA MANUAL (Vite Style)
import telkomLogo from "./assets/images/telkomSchoolsLogo.png";
import telkomUnivLogo from "./assets/images/telkomUniversityLogo.png";
import lintasartaLogo from "./assets/images/lintasartaLogo.png";
import kejatiLogo from "./assets/images/kejatiJatimLogo.png";
import pedulyLogo from "./assets/images/pedulyLogo.png";
// HRIS IGI Screenshots
import hrisDashboard from "./assets/images/hris-igi/hrisigidashboard.png";
import hrisLogin from "./assets/images/hris-igi/hrisigiloginpage.png";
import hrisDataKaryawan from "./assets/images/hris-igi/hrisigidatakaryawan.png";
import hrisDaftarAbsensi from "./assets/images/hris-igi/hrisigidaftarabsensi.png";
import hrisRiwayatAbsensi from "./assets/images/hris-igi/hrisigiriwayatabsensi.png";
import hrisPengajuanCuti from "./assets/images/hris-igi/hrisigipengajuancuti.png";
import hrisPersetujuanCuti from "./assets/images/hris-igi/hrisigipersetujuancuti.png";
import hrisNotifikasi from "./assets/images/hris-igi/hrisiginotifikasi.png";
import hrisNotifPage from "./assets/images/hris-igi/hrisiginotifpage.png";
import hrisProfile from "./assets/images/hris-igi/hrisigiprofilepage.png";
import hrisPenggajian from "./assets/images/hris-igi/hrisigipenggajian.png";
import hrisPenggajianDetail from "./assets/images/hris-igi/hrisigipenggajiandetail.png";
import hrisRiwayatGaji from "./assets/images/hris-igi/hrisigiriwayatgaji.png";
import hrisSlipGaji from "./assets/images/hris-igi/hrisigislipgaji.png";
import hrisSlipGajiPrint from "./assets/images/hris-igi/hrisigislipgajiprint.png";
import hrisRekrutmen from "./assets/images/hris-igi/hrisigirekrutmen.png";
import hrisRekrutmenDetail from "./assets/images/hris-igi/hrisigirekrutmendetail.png";
import hrisPanduan from "./assets/images/hris-igi/hrisigipanduan.png";
// Kejati Jatim GIS Screenshots
import gisLanding from "./assets/images/kejati-jatim/landingpage.png";
import gisLogin from "./assets/images/kejati-jatim/loginpage.png";
import gisDasborAdmin from "./assets/images/kejati-jatim/dasboradmin.png";
import gisMasterSatuanKerja from "./assets/images/kejati-jatim/mastersatuankerja.png";
import gisMasterJabatan from "./assets/images/kejati-jatim/masterjabatan.png";
import gisMasterJumlahPegawai from "./assets/images/kejati-jatim/masterjumlahpegawai.png";

// Contact Zainzo Screenshots
import zainzoLanding from "./assets/images/contact-zainzo/landingpage.png";
import zainzoLogin from "./assets/images/contact-zainzo/loginpage.png";
import zainzoSignup from "./assets/images/contact-zainzo/signuppage.png";
import zainzoDasbor from "./assets/images/contact-zainzo/dasbor.png";
import zainzoPricelist from "./assets/images/contact-zainzo/pricelist.png";
import zainzoChangelog from "./assets/images/contact-zainzo/changelog.png";
import udemyLogo from "./assets/images/udemyLogo.png";
import bwaLogo from "./assets/images/bwaLogo.png";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1000
};

const illustration = {
  animated: true
};

// Summary And Greeting Section
const greeting = {
  username: "Brilliant Fikri",
  title: {
    en: "Hello, I'm Liant",
    id: "Halo, Saya Liant"
  },
  subTitle: {
    en: "Helping organizations and businesses build reliable web systems. I focus on delivering scalable solutions that solve actual operational problems, not just writing code.",
    id: "Membantu organisasi dan bisnis membangun sistem web yang andal. Saya fokus memberikan solusi skalabel yang menyelesaikan masalah operasional nyata, bukan sekadar menulis kode."
  },
  resumeLink:
    "https://drive.google.com/drive/folders/1o7l_AQx5z2AdFUB2mR1EC2FJ99mu5VLF?usp=drive_link",
  displayGreeting: true
};

// Introduction Video Section
const introVideo = {
  display: false,
  title: {
    en: "Get to Know Me",
    id: "Perkenalan Singkat"
  },
  subtitle: {
    en: "A quick introduction to how I work and what you can expect when collaborating with me.",
    id: "Pengantar singkat tentang cara saya bekerja dan apa yang bisa Anda harapkan saat berkolaborasi."
  },
  videoUrl: "https://youtu.be/L_8KDkAELJs", // Ganti dengan URL video perkenalan Anda (YouTube embed, Cloudinary, etc.)
  videoType: "youtube", // "youtube" atau "direct" (MP4 URL)
  thumbnail: "" // Opsional: URL thumbnail untuk dark overlay sebelum play
};

// Social Media Links
const socialMediaLinks = {
  display: true,
  github: "https://github.com/BryaanF",
  linkedin: "https://www.linkedin.com/in/brilliantfikri/",
  gmail: "briliantfikri@gmail.com",
  medium: "https://medium.com/@briliantfikri",
  stackoverflow: "https://stackoverflow.com/users/14787789/briliant-fikri",
  whatsapp:
    "https://wa.me/6281331487753?text=Halo%20Liant,%20Saya%20tertarik%20untuk%20diskusi%20terkait%20pengembangan%20sistem..."
};

// Skills Section
const skillsSection = {
  title: {
    en: "Professional Capabilities",
    id: "Kemampuan Profesional"
  },
  subTitle: {
    en: "End-to-end software development with a focus on reliability and clarity. I bridge the gap between complex technical requirements and practical business needs.",
    id: "Pengembangan software end-to-end dengan fokus pada keandalan dan kejelasan. Saya menjembatani kesenjangan antara kebutuhan teknis yang kompleks dan kebutuhan bisnis praktis."
  },
  skills: [
    {
      en: "Developing scalable web applications tailored to streamline business workflows.",
      id: "Mengembangkan aplikasi web skalabel yang disesuaikan untuk menyederhanakan alur kerja bisnis."
    },
    {
      en: "Building and integrating robust APIs, third-party services, and internal systems.",
      id: "Membangun dan mengintegrasikan API yang tangguh, layanan pihak ketiga, dan sistem internal."
    },
    {
      en: "Designing efficient, secure, and maintainable database structures (SQL).",
      id: "Merancang struktur database yang efisien, aman, dan mudah dipelihara (SQL)."
    },
    {
      en: "Ensuring long-term sustainability through comprehensive documentation and technical handover.",
      id: "Memastikan keberlanjutan jangka panjang melalui dokumentasi komprehensif dan serah terima teknis."
    }
  ],
  softwareSkills: [
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "SASS", fontAwesomeClassname: "fab fa-sass"},
    {
      skillName: "JavaScript (React, Node.js)",
      fontAwesomeClassname: "fab fa-js"
    },
    {skillName: "PHP", fontAwesomeClassname: "fab fa-php"},
    {skillName: "Laravel", fontAwesomeClassname: "fab fa-laravel"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "NodeJS", fontAwesomeClassname: "fab fa-node"},
    {skillName: "NPM", fontAwesomeClassname: "fab fa-npm"},
    {skillName: "SQL Database", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Figma", fontAwesomeClassname: "fab fa-figma"}
  ],
  display: true
};

// Top 3 Proficient Stacks
const techStack = {
  viewSkillBars: false,
  experience: [
    {Stack: "Backend Engineering", progressPercentage: "95%"},
    {Stack: "Full-Stack Web Development", progressPercentage: "90%"},
    {Stack: "Network Engineering", progressPercentage: "80%"},
    {Stack: "IT Support & Operations", progressPercentage: "70%"},
    {Stack: "UI / UX Design", progressPercentage: "60%"},
    {Stack: "Mobile Dev (Android)", progressPercentage: "50%"}
  ],
  displayCodersrank: false
};

// Education Section
const educationInfo = {
  display: true,
  title: {
    en: "Education",
    id: "Pendidikan"
  },
  schools: [
    {
      schoolName: "Telkom Schools Malang",
      logo: telkomLogo,
      subHeader: {
        en: "Computer and Network Engineering",
        id: "Teknik Komputer dan Jaringan"
      },
      duration: "September 2017 - August 2020",
      desc: {
        en: "Built a strong foundation in Network Infrastructure (TCP/IP, Routing, Switching). Active member of the IT Club and Flag Raiser Squad (Paskibra) honing discipline and teamwork.",
        id: "Membangun fondasi kuat di Infrastruktur Jaringan (TCP/IP, Routing, Switching). Anggota aktif Klub IT dan Paskibra yang mengasah disiplin dan kerja sama tim."
      },
      descBullets: [
        {
          en: "Mastered LAN construction, including crimping, design, and topology implementation.",
          id: "Menguasai konstruksi LAN, termasuk crimping, desain, dan implementasi topologi."
        },
        {
          en: "Gained early proficiency in web fundamentals (HTML, CSS, Basic JS).",
          id: "Memperoleh kemahiran awal dalam fundamental web (HTML, CSS, Basic JS)."
        },
        {
          en: "Developed entrepreneurial skills through startup simulation projects (branding & operations).",
          id: "Mengembangkan keterampilan wirausaha melalui proyek simulasi startup (branding & operasional)."
        }
      ]
    },
    {
      schoolName: "Telkom University Surabaya",
      logo: telkomUnivLogo,
      subHeader: {
        en: "Bachelor of Information Systems",
        id: "Sarjana Sistem Informasi"
      },
      duration: "September 2020 - November 2024",
      desc: {
        en: "Focused on the intersection of Software Engineering and IT Management. Actively involved in Hackathons, Laboratory Assistance, and Student Orientation Committees.",
        id: "Fokus pada perpaduan Software Engineering dan Manajemen TI. Aktif terlibat dalam Hackathon, Asisten Laboratorium, dan Komite Orientasi Mahasiswa."
      },
      descBullets: [
        {
          en: "Advanced algorithmic problem solving with Python and Data Structures.",
          id: "Pemecahan masalah algoritmik lanjutan dengan Python dan Struktur Data."
        },
        {
          en: "Full-cycle development for Android (Intermediate) and Web Applications (Advanced).",
          id: "Pengembangan full-cycle untuk Android (Intermediate) dan Aplikasi Web (Advanced)."
        },
        {
          en: "Honed leadership and project management skills through organizational roles and campus training.",
          id: "Mengasah kepemimpinan dan manajemen proyek melalui peran organisasi dan pelatihan kampus."
        }
      ]
    }
  ]
};

// Work Experience Section
const workExperiences = {
  display: true,
  title: {
    en: "Experience",
    id: "Pengalaman"
  },
  subtitle: {
    en: "Professional track record in software development and IT infrastructure.",
    id: "Rekam jejak profesional dalam pengembangan software dan infrastruktur TI."
  },
  experience: [
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
      role: "Network Engineer Intern",
      company: "Lintasarta",
      companylogo: lintasartaLogo,
      date: "June 2018 – August 2018",
      desc: {
        en: "Assisted the Network Engineering team in managing and monitoring local network infrastructure.",
        id: "Membantu tim Network Engineering dalam mengelola dan memonitor infrastruktur jaringan lokal."
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

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Big Projects Section
const bigProjects = {
  title: {
    en: "Professional Projects",
    id: "Proyek Profesional"
  },
  subtitle: "DELIVERING IMPACT THROUGH TECHNOLOGY",
  projects: [
    {
      image: hrisDashboard,
      projectName: "HRIS - PT. Indo Global Impex",
      projectDesc: {
        en: "Designed to modernize HR operations. This centralized Human Resources Information System manages employee data, attendance, and payroll automation. It significantly reduced manual administrative workload and minimized data discrepancies.",
        id: "Dirancang untuk memodernisasi operasi HR. Sistem Informasi Sumber Daya Manusia terpusat ini mengelola data karyawan, kehadiran, dan otomatisasi penggajian. Secara signifikan mengurangi beban administrasi manual dan meminimalkan ketidaksesuaian data."
      },
      /* Gallery screenshots for ProjectShowcase modal */
      mediaGallery: [
        {
          type: "image",
          url: hrisLogin,
          caption: {en: "Login page", id: "Halaman login"}
        },
        {
          type: "image",
          url: hrisDashboard,
          caption: {
            en: "HR Dashboard — employee data overview",
            id: "Dashboard HR — tampilan data karyawan"
          }
        },
        {
          type: "image",
          url: hrisDataKaryawan,
          caption: {
            en: "Employee master data management",
            id: "Manajemen data master karyawan"
          }
        },
        {
          type: "image",
          url: hrisDaftarAbsensi,
          caption: {en: "Attendance list view", id: "Daftar absensi"}
        },
        {
          type: "image",
          url: hrisRiwayatAbsensi,
          caption: {en: "Attendance history", id: "Riwayat absensi"}
        },
        {
          type: "image",
          url: hrisPengajuanCuti,
          caption: {en: "Leave request form", id: "Form pengajuan cuti"}
        },
        {
          type: "image",
          url: hrisPersetujuanCuti,
          caption: {
            en: "Leave approval management",
            id: "Manajemen persetujuan cuti"
          }
        },
        {
          type: "image",
          url: hrisNotifikasi,
          caption: {en: "Push notifications", id: "Notifikasi push"}
        },
        {
          type: "image",
          url: hrisNotifPage,
          caption: {en: "Notification center", id: "Pusat notifikasi"}
        },
        {
          type: "image",
          url: hrisProfile,
          caption: {en: "Employee profile page", id: "Halaman profil karyawan"}
        },
        {
          type: "image",
          url: hrisPenggajian,
          caption: {en: "Payroll overview", id: "Ringkasan penggajian"}
        },
        {
          type: "image",
          url: hrisPenggajianDetail,
          caption: {en: "Payroll details", id: "Detail penggajian"}
        },
        {
          type: "image",
          url: hrisRiwayatGaji,
          caption: {en: "Salary history", id: "Riwayat gaji"}
        },
        {
          type: "image",
          url: hrisSlipGaji,
          caption: {en: "Payslip digital view", id: "Slip gaji digital"}
        },
        {
          type: "image",
          url: hrisSlipGajiPrint,
          caption: {en: "Payslip print layout", id: "Tampilan cetak slip gaji"}
        },
        {
          type: "image",
          url: hrisRekrutmen,
          caption: {en: "Recruitment management", id: "Manajemen rekrutmen"}
        },
        {
          type: "image",
          url: hrisRekrutmenDetail,
          caption: {
            en: "Recruitment detail & pipeline",
            id: "Detail rekrutmen & pipeline"
          }
        },
        {
          type: "image",
          url: hrisPanduan,
          caption: {
            en: "User guide & documentation",
            id: "Panduan & dokumentasi"
          }
        }
      ],
      /* Optional external URL for "Visit Website" link in modal header */
      externalUrl: ""
    },
    {
      image: gisDasborAdmin,
      projectName: "Echelon GIS Mapping",
      projectDesc: {
        en: "A Strategic Dashboard for Kejaksaan Tinggi Jatim. This GIS application provides real-time visualization of personnel distribution across East Java. It empowers decision-makers to analyze staffing gaps and optimize organizational structure efficiently.",
        id: "Dashboard Strategis untuk Kejaksaan Tinggi Jatim. Aplikasi GIS ini menyediakan visualisasi real-time distribusi personel di seluruh Jawa Timur. Memberdayakan pengambil keputusan untuk menganalisis kesenjangan staf dan mengoptimalkan struktur organisasi secara efisien."
      },
      /* Gallery screenshots for ProjectShowcase modal */
      mediaGallery: [
        {
          type: "image",
          url: gisLanding,
          caption: {
            en: "Landing page — login portal",
            id: "Halaman portal login"
          }
        },
        {
          type: "image",
          url: gisLogin,
          caption: {en: "Admin login form", id: "Form login admin"}
        },
        {
          type: "image",
          url: gisDasborAdmin,
          caption: {
            en: "Admin dashboard — personnel overview",
            id: "Dashboard admin — ringkasan personel"
          }
        },
        {
          type: "image",
          url: gisMasterSatuanKerja,
          caption: {en: "Work unit management", id: "Manajemen satuan kerja"}
        },
        {
          type: "image",
          url: gisMasterJabatan,
          caption: {en: "Position management", id: "Manajemen jabatan"}
        },
        {
          type: "image",
          url: gisMasterJumlahPegawai,
          caption: {
            en: "Personnel count per region",
            id: "Jumlah pegawai per wilayah"
          }
        }
      ],
      /* Internal project — no public URL */
      externalUrl: ""
    },
    {
      image: zainzoLanding,
      projectName: "Zainzo Broadcast System",
      projectDesc: {
        en: "A SaaS-ready broadcasting platform handling WhatsApp and Email campaigns. Built with a microservice approach using Laravel and ExpressJS. Features include contact management, message scheduling, and detailed delivery reports.",
        id: "Platform broadcast siap-SaaS yang menangani kampanye WhatsApp dan Email. Dibangun dengan pendekatan microservice menggunakan Laravel dan ExpressJS. Fitur mencakup manajemen kontak, penjadwalan pesan, dan laporan pengiriman detail."
      },
      /* Gallery screenshots for ProjectShowcase modal */
      mediaGallery: [
        {
          type: "image",
          url: zainzoLanding,
          caption: {en: "Landing page", id: "Halaman utama"}
        },
        {
          type: "image",
          url: zainzoLogin,
          caption: {en: "Login page", id: "Halaman login"}
        },
        {
          type: "image",
          url: zainzoSignup,
          caption: {en: "Sign up page", id: "Halaman daftar"}
        },
        {
          type: "image",
          url: zainzoDasbor,
          caption: {
            en: "Dashboard — campaign management",
            id: "Dashboard — manajemen kampanye"
          }
        },
        {
          type: "image",
          url: zainzoPricelist,
          caption: {en: "Pricing & packages", id: "Harga & paket"}
        },
        {
          type: "image",
          url: zainzoChangelog,
          caption: {en: "Changelog & version history", id: "Riwayat perubahan"}
        }
      ],
      /* External contact URL */
      externalUrl: "https://zainzo.com/contact"
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: {
    en: "Certifications & Achievements",
    id: "Sertifikasi & Pencapaian"
  },
  subtitle: {
    en: "Continuous learning and professional validation.",
    id: "Pembelajaran berkelanjutan dan validasi profesional."
  },
  achievementsCards: [
    {
      title: "Figma UI/UX Essentials",
      subtitle: {
        en: "Mastered the fundamentals of User Interface and User Experience design. Learned to create high-fidelity prototypes, wireframes, and design systems to bridge the gap between design and development.",
        id: "Menguasai fundamental desain User Interface dan User Experience. Belajar membuat prototipe high-fidelity, wireframe, dan sistem desain untuk menjembatani kesenjangan antara desain dan pengembangan."
      },
      image: udemyLogo,
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Show Certificate",
          url: "https://www.udemy.com/certificate/UC-798ad0c7-a839-4216-830e-bead6e44d858/"
        },
        {
          name: "View Prototype",
          url: "https://www.figma.com/proto/kqXK6yEMDOvLCTeUAqP5c9/Liants-Audio-Experience-Mobile-Apps?node-id=64-14&t=4d0XqofVf0WLWYNm-1&scaling=scale-down&content-scaling=fixed&page-id=64%3A10&starting-point-node-id=290%3A50&show-proto-sidebar=1"
        }
      ]
    },
    {
      title: "Full-Stack Laravel Development",
      subtitle: {
        en: "Advanced course on building complex transactional websites. Covered MVC architecture, database migrations, middleware security, and payment gateway integration.",
        id: "Kursus lanjutan membangun website transaksional kompleks. Mencakup arsitektur MVC, migrasi database, keamanan middleware, dan integrasi payment gateway."
      },
      image: bwaLogo,
      imageAlt: "BuildwithAngga Logo",
      footerLink: [
        {
          name: "Show Certificate",
          url: "https://drive.google.com/file/d/1zbuLFEeMzO_2d0-Kc777-mKIqQRCPlXf/view?usp=sharing"
        },
        {
          name: "Show Project",
          url: "https://drive.google.com/drive/folders/11gSoG0N_vbzZ3ZC6Y8U-CnXBX7_WrYlR?usp=drive_link"
        }
      ]
    },
    {
      title: "Internship Excellence",
      subtitle: {
        en: "Successfully completed professional internship at Kejaksaan Tinggi Jawa Timur, delivering a functional GIS application that was adopted for internal reporting.",
        id: "Berhasil menyelesaikan magang profesional di Kejaksaan Tinggi Jawa Timur, menghasilkan aplikasi GIS fungsional yang diadopsi untuk pelaporan internal."
      },
      image: kejatiLogo,
      imageAlt: "Kejati Jatim Logo",
      footerLink: [
        {
          name: "Show Certificate",
          url: "https://drive.google.com/file/d/1ZE-ye8t4ea-8fGL5btvS92pV_vhJD_Kt/view?usp=sharing"
        },
        {
          name: "Show Project",
          url: "https://drive.google.com/drive/folders/1OcKJ93x-dqBF_9f6ei_XfbERiXbS-ekM?usp=drive_link"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section (Hidden)
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://blog.usejournal.com",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

// Talks Sections (Hidden)
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Surabaya 2019",
      slides_url: "https://bit.ly/liant",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section (Hidden)
const podcastSection = {
  title: emoji("Podcast"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: ["https://youtube.com"],
  display: false
};

// Resume Section
const resumeSection = {
  title: {
    en: "Resume",
    id: "Resume"
  },
  subtitle: {
    en: "Feel free to download my full professional resume",
    id: "Silakan unduh resume profesional lengkap saya"
  },
  display: true
};

// Contact Info Section
const contactInfo = {
  title: {
    en: "Contact Me",
    id: "Hubungi Saya"
  },
  subtitle: {
    en: "Have a project in mind or need a technical consultation? Let's discuss how we can create value for your business.",
    id: "Punya proyek atau butuh konsultasi teknis? Mari diskusikan bagaimana kita bisa menciptakan nilai untuk bisnis Anda."
  },
  number: "+62-813-3148-7753",
  email_address: "briliantfikri@gmail.com"
};

// Twitter Section (Hidden)
const twitterDetails = {
  userName: "twitter",
  display: false
};

// Pricing Section
const pricingSection = {
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
      shortPrice: {en: "2.5M", id: "2.5jt"},
      idealFor: {
        en: "Personal Brand, Single-Product MSMEs",
        id: "Personal Brand, UMKM Produk Tunggal"
      },
      screenshots: [],
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
        revisions: "2 Rounds (Major)",
        warranty: "1 Week (Asset Fix)",
        techStack: "React / HTML5 + Tailwind",
        delivery: "Deployed URL / Zip"
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
        {en: "Domain & Hosting Purchase", id: "Domain & Hosting Purchase"}
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
            en: "Upload to server & handover",
            id: "Upload ke server & serah terima"
          }
        }
      ],
      // Add-ons per paket Starter
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
      title: {en: "Dynamic CMS Profile", id: "Dynamic CMS Profile"},
      price: 5000000,
      shortPrice: {en: "5M", id: "5jt"},
      idealFor: {
        en: "Company Profile, Agencies, Clinics",
        id: "Company Profile, Agensi, Klinik"
      },
      screenshots: [
        {
          url: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw",
          caption: {
            en: "Example of a dynamic CMS profile website with custom admin panel.",
            id: "Contoh website profil CMS dinamis dengan panel admin kustom."
          }
        }
      ],
      desc: {
        en: "Multi-page website with private Admin Panel (CMS) to update news / careers.",
        id: "Website multipage dengan Admin Panel (CMS) privat untuk update berita/karir."
      },
      longDesc: {
        en: "A professional solution to build credibility. Comes with a lightweight, secure admin panel (not WordPress) so your team can easily update articles, galleries, or job postings.",
        id: "Solusi profesional untuk membangun kredibilitas. Dilengkapi panel admin khusus (bukan WordPress) yang ringan dan aman, memudahkan staf Anda mengupdate artikel, galeri, atau lowongan kerja."
      },
      specs: {
        duration: "7-14 Days Work",
        revisions: "3 Rounds (Major)",
        warranty: "2 Weeks (Bug Fix)",
        techStack: "WordPress Self Hosted / Laravel CMS",
        delivery: "Source Code + Server Setup"
      },
      features: [
        "Up to 8 Dynamic Pages",
        "Secure Admin Dashboard (No Plugins)",
        "Dynamic Blog / News System",
        "SEO On-Page Optimization",
        "Contact Form to Email"
      ],
      notIncluded: [
        {
          en: "Cloud VPS Fee (Est. 100k/mo)",
          id: "Cloud VPS Fee (Est. 100k/mo)"
        },
        {en: "Logo Design", id: "Logo Design"}
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
      // Add-ons per paket Business
      addons: [
        {
          id: "biz_express",
          title: "Express Delivery",
          desc: {
            en: "Priority delivery (30% Faster)",
            id: "Prioritas pengerjaan (30% Lebih Cepat)"
          },
          price: 1500000
        },
        {
          id: "biz_maintain",
          title: "Extended Care (1 Year)",
          desc: {
            en: "Server maintenance & update guarantee",
            id: "Jaminan maintenance server & update"
          },
          price: 2500000
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
      title: {en: "Custom SaaS / Web App", id: "Custom SaaS / Web App"},
      price: 10000000,
      shortPrice: {en: "10M+", id: "10jt+"},
      idealFor: {
        en: "Startups, School Systems, Inventory",
        id: "Startups, Sistem Sekolah, Inventory"
      },
      screenshots: [],
      desc: {
        en: "Complex business applications. Custom logic tailored to your SOP (HRIS, SIS, Booking).",
        id: "Aplikasi bisnis kompleks. Logika spesifik sesuai SOP perusahaan (HRIS, SIS, Booking)."
      },
      longDesc: {
        en: "Not just an informational website — a digital work tool. We build systems with tiered access (Admin/User/Staff), automated reports, and third-party API integration.",
        id: "Bukan sekadar website informasi, tapi alat bantu kerja digital. Kami membangun sistem dengan hak akses bertingkat (Admin/User/Staff), laporan otomatis, dan integrasi API pihak ketiga."
      },
      specs: {
        duration: "1 Month+",
        revisions: "Unlimited (Dev Phase)",
        warranty: "3 Months (Priority)",
        techStack: "Full Stack Laravel",
        delivery: "Full IP Rights + Docs"
      },
      features: [
        "Complex Database Architecture",
        "Multi-Role Access (RBAC)",
        "API Integration (Payment/Maps)",
        "Real-time Data Processing",
        "Scalable Infrastructure"
      ],
      notIncluded: [
        {en: "3rd Party API Costs", id: "3rd Party API Costs"},
        {en: "App Store Fees", id: "App Store Fees"}
      ],
      // Add-ons per paket Custom SaaS
      addons: [
        {
          id: "custom_express",
          title: "Express Delivery",
          desc: {
            en: "Priority delivery (30% Faster)",
            id: "Prioritas pengerjaan (30% Lebih Cepat)"
          },
          price: 2500000
        },
        {
          id: "custom_maintain",
          title: "Extended Care (1 Year)",
          desc: {
            en: "Server maintenance & update guarantee",
            id: "Jaminan maintenance server & update"
          },
          price: 4000000
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
          title: {en: "Prototype", id: "Prototype"},
          desc: {en: "Wireframe of app flow", id: "Wireframe alur aplikasi"}
        },
        {
          title: {en: "Sprint", id: "Sprint"},
          desc: {
            en: "Incremental work per feature",
            id: "Pengerjaan bertahap per fitur"
          }
        },
        {
          title: {en: "UAT", id: "UAT"},
          desc: {
            en: "User Acceptance Test (try it out)",
            id: "User Acceptance Test (Coba langsung)"
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
      desc: {
        en: "Toggle light/dark theme",
        id: "Opsi ganti tema terang/gelap"
      },
      price: 800000
    },
    {
      id: "feat_lang",
      title: "Multi-Language",
      desc: {
        en: "Support EN/ID (2 languages)",
        id: "Support ID/EN (2 Bahasa)"
      },
      price: 1500000
    }
  ],

  // addonsList now empty — Express & Extended Care moved to per-package addons
  addonsList: []
};

const isHireable = true;

export {
  illustration,
  greeting,
  introVideo,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  pricingSection
};
