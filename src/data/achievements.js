import udemyLogo from "../assets/images/udemyLogo.png";
import bwaLogo from "../assets/images/bwaLogo.png";
import kejatiLogo from "../assets/images/kejatiJatimLogo.png";
import pedulyLogo from "../assets/images/pedulyLogo.png";
import pedulyCertificate from "../assets/images/certificate/pedulycertificate.png";

/* Achievement Section */
export const achievementSection = {
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
          name: "Show Project",
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
          url: "https://github.com/BryaanF/NomadsByLiant"
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
      imageAlt: "Kejaksaan Tinggi Jawa Timur Logo",
      footerLink: [
        {
          name: "Show Certificate",
          url: "https://drive.google.com/file/d/1ZE-ye8t4ea-8fGL5btvS92pV_vhJD_Kt/view?usp=sharing"
        },
        {
          name: "Show Project",
          url: "https://github.com/BryaanF/hris-igi"
        }
      ]
    },
    {
      title: "Backend Developer – Peduly",
      subtitle: {
        en: "Served as Backend Developer at Peduly, engineering a high-performance broadcast system capable of handling mass messaging via WhatsApp and Email using Laravel, ExpressJS, and MySQL.",
        id: "Bekerja sebagai Backend Developer di Peduly, merekayasa sistem broadcast berkinerja tinggi yang mampu menangani pesan massal melalui WhatsApp dan Email menggunakan Laravel, ExpressJS, dan MySQL."
      },
      image: pedulyLogo,
      imageAlt: "Peduly Logo",
      mediaGallery: [
        {
          type: "image",
          url: pedulyCertificate,
          caption: {
            en: "Backend Developer Certificate – Peduly",
            id: "Sertifikat Backend Developer – Peduly"
          }
        }
      ],
      footerLink: [
        {
          name: "Show Certificate",
          url: ""
        },
        {
          name: "Show Project",
          url: "https://zainzo.com/contact"
        }
      ]
    }
  ],
  display: true
};
