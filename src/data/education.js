import telkomLogo from "../assets/images/telkomSchoolsLogo.png";
import telkomUnivLogo from "../assets/images/telkomUniversityLogo.png";

/* Education Section */
export const educationInfo = {
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
