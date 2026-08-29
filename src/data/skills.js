import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faPhp,
  faLaravel,
  faJava,
  faNode,
  faNpm,
  faPython,
  faFigma
} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";

/* Skills Section */
export const skillsSection = {
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
    {skillName: "HTML5", icon: faHtml5},
    {skillName: "CSS3", icon: faCss3Alt},
    {skillName: "SASS", icon: faSass},
    {skillName: "JavaScript (React, Node.js)", icon: faJs},
    {skillName: "PHP", icon: faPhp},
    {skillName: "Laravel", icon: faLaravel},
    {skillName: "Java", icon: faJava},
    {skillName: "NodeJS", icon: faNode},
    {skillName: "NPM", icon: faNpm},
    {skillName: "SQL Database", icon: faDatabase},
    {skillName: "Python", icon: faPython},
    {skillName: "Figma", icon: faFigma}
  ],
  display: true
};

/* Top Proficient Stacks */
export const techStack = {
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
