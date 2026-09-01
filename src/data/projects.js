import hrisDashboard from "../assets/images/hris-igi/hrisigidashboard.png";
import hrisLogin from "../assets/images/hris-igi/hrisigiloginpage.png";
import hrisDataKaryawan from "../assets/images/hris-igi/hrisigidatakaryawan.png";
import hrisDaftarAbsensi from "../assets/images/hris-igi/hrisigidaftarabsensi.png";
import hrisRiwayatAbsensi from "../assets/images/hris-igi/hrisigiriwayatabsensi.png";
import hrisPengajuanCuti from "../assets/images/hris-igi/hrisigipengajuancuti.png";
import hrisPersetujuanCuti from "../assets/images/hris-igi/hrisigipersetujuancuti.png";
import hrisNotifikasi from "../assets/images/hris-igi/hrisiginotifikasi.png";
import hrisNotifPage from "../assets/images/hris-igi/hrisiginotifpage.png";
import hrisProfile from "../assets/images/hris-igi/hrisigiprofilepage.png";
import hrisPenggajian from "../assets/images/hris-igi/hrisigipenggajian.png";
import hrisPenggajianDetail from "../assets/images/hris-igi/hrisigipenggajiandetail.png";
import hrisRiwayatGaji from "../assets/images/hris-igi/hrisigiriwayatgaji.png";
import hrisSlipGaji from "../assets/images/hris-igi/hrisigislipgaji.png";
import hrisSlipGajiPrint from "../assets/images/hris-igi/hrisigislipgajiprint.png";
import hrisRekrutmen from "../assets/images/hris-igi/hrisigirekrutmen.png";
import hrisRekrutmenDetail from "../assets/images/hris-igi/hrisigirekrutmendetail.png";
import hrisPanduan from "../assets/images/hris-igi/hrisigipanduan.png";
import gisLanding from "../assets/images/kejati-jatim/landingpage.png";
import gisLogin from "../assets/images/kejati-jatim/loginpage.png";
import gisDasborAdmin from "../assets/images/kejati-jatim/dasboradmin.png";
import gisMasterSatuanKerja from "../assets/images/kejati-jatim/mastersatuankerja.png";
import gisMasterJabatan from "../assets/images/kejati-jatim/masterjabatan.png";
import gisMasterJumlahPegawai from "../assets/images/kejati-jatim/masterjumlahpegawai.png";
import zainzoLanding from "../assets/images/contact-zainzo/landingpage.png";
import zainzoLogin from "../assets/images/contact-zainzo/loginpage.png";
import zainzoSignup from "../assets/images/contact-zainzo/signuppage.png";
import zainzoDasbor from "../assets/images/contact-zainzo/dasbor.png";
import zainzoPricelist from "../assets/images/contact-zainzo/pricelist.png";
import zainzoChangelog from "../assets/images/contact-zainzo/changelog.png";

/* Big Projects Section */
export const bigProjects = {
  title: {
    en: "Professional Projects",
    id: "Proyek Profesional"
  },
  subtitle: {
    en: "DELIVERING IMPACT THROUGH TECHNOLOGY",
    id: "MENGHADIRKAN DAMPAK MELALUI TEKNOLOGI"
  },
  projects: [
    {
      image: hrisDashboard,
      projectName: "HRIS - PT. Indo Global Impex",
      projectDesc: {
        en: "Designed to modernize HR operations. This centralized Human Resources Information System manages employee data, attendance, and payroll automation. It significantly reduced manual administrative workload and minimized data discrepancies.",
        id: "Dirancang untuk memodernisasi operasi HR. Sistem Informasi Sumber Daya Manusia terpusat ini mengelola data karyawan, kehadiran, dan otomatisasi penggajian. Secara signifikan mengurangi beban administrasi manual dan meminimalkan ketidaksesuaian data."
      },
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
      externalUrl: ""
    },
    {
      image: gisDasborAdmin,
      projectName: "Echelon GIS Mapping",
      projectDesc: {
        en: "A Strategic Dashboard for Kejaksaan Tinggi Jatim. This GIS application provides real-time visualization of personnel distribution across East Java. It empowers decision-makers to analyze staffing gaps and optimize organizational structure efficiently.",
        id: "Dashboard Strategis untuk Kejaksaan Tinggi Jatim. Aplikasi GIS ini menyediakan visualisasi real-time distribusi personel di seluruh Jawa Timur. Memberdayakan pengambil keputusan untuk menganalisis kesenjangan staf dan mengoptimalkan struktur organisasi secara efisien."
      },
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
      externalUrl: ""
    },
    {
      image: zainzoLanding,
      projectName: "Zainzo Broadcast System",
      projectDesc: {
        en: "A SaaS-ready broadcasting platform handling WhatsApp and Email campaigns. Built with a microservice approach using Laravel and ExpressJS. Features include contact management, message scheduling, and detailed delivery reports.",
        id: "Platform broadcast siap-SaaS yang menangani kampanye WhatsApp dan Email. Dibangun dengan pendekatan microservice menggunakan Laravel dan ExpressJS. Fitur mencakup manajemen kontak, penjadwalan pesan, dan laporan pengiriman detail."
      },
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
      externalUrl: "https://zainzo.com/contact"
    }
  ],
  display: true
};
