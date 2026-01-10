/* Change this file to get your personal Portfolio */

// Import package penting
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
// IMPORT GAMBAR SECARA MANUAL (Vite Style)
import telkomLogo from "./assets/images/telkomSchoolsLogo.png";
import telkomUnivLogo from "./assets/images/telkomUniversityLogo.png";
import lintasartaLogo from "./assets/images/lintasartaLogo.png";
import kejatiLogo from "./assets/images/kejatiJatimLogo.png";
import pedulyLogo from "./assets/images/pedulyLogo.png";
import hrisImage from "./assets/images/HRISIGIProject.jpg";
import echelonmapingprojectimage from "./assets/images/echelonMapingProject.png";
import contactzainzoprojectimage from "./assets/images/contactZainzoProject.png";
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
  title: "Hello, I'm Liant",
  // REVISI: Dipersingkat agar lebih punchy. Menghapus kata-kata filler.
  subTitle: emoji(
    "Helping organizations and businesses build reliable web systems. I focus on delivering scalable solutions that solve actual operational problems, not just writing code."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1o7l_AQx5z2AdFUB2mR1EC2FJ99mu5VLF?usp=drive_link",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/BryaanF",
  linkedin: "https://www.linkedin.com/in/brilliantfikri/",
  gmail: "briliantfikri@gmail.com",
  medium: "https://medium.com/@briliantfikri",
  stackoverflow: "https://stackoverflow.com/users/14787789/briliant-fikri",
  whatsapp:
    "https://wa.me/6281331487753?text=Halo%20Liant,%20Saya%20tertarik%20untuk%20diskusi%20terkait%20pengembangan%20sistem...", // Sedikit formalisasi greeting WA
  display: true
};

// Skills Section
const skillsSection = {
  // REVISI: Judul lebih profesional.
  title: "Professional Capabilities 💻",
  subTitle:
    "End-to-end software development with a focus on reliability and clarity. I bridge the gap between complex technical requirements and practical business needs.",
  skills: [
    emoji(
      "Developing scalable web applications tailored to streamline business workflows."
    ),
    emoji(
      "Building and integrating robust APIs, third-party services, and internal systems."
    ),
    emoji(
      "Designing efficient, secure, and maintainable database structures (SQL)."
    ),
    emoji(
      "Ensuring long-term sustainability through comprehensive documentation and technical handover."
    )
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript (React, Node.js)", // Digabung agar lebih compact
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Figma", // Invision jarang dipakai sekarang, fokus ke Figma saja jika memang kuat di sana
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true
};

// Top 3 Proficient Stacks
const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Backend Engineering", // 'Engineering' terdengar lebih kuat dari 'Development'
      progressPercentage: "95%"
    },
    {
      Stack: "Full-Stack Web Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Network Engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "IT Support & Operations",
      progressPercentage: "70%"
    },
    {
      Stack: "UI / UX Design",
      progressPercentage: "60%"
    },
    {
      Stack: "Mobile Dev (Android)",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false
};

// Education Section
const educationInfo = {
  display: true,
  title: emoji("Education"),
  schools: [
    {
      schoolName: "Telkom Schools Malang",
      logo: telkomLogo,
      subHeader: "Computer and Network Engineering", // Hilangkan 'Majoring in'
      duration: "September 2017 - August 2020",
      // REVISI: Ubah dari "belajar apa" menjadi "menguasai apa".
      desc: "Built a strong foundation in Network Infrastructure (TCP/IP, Routing, Switching). Active member of the IT Club and Flag Raiser Squad (Paskibra) honing discipline and teamwork.",
      descBullets: [
        "Mastered LAN construction, including crimping, design, and topology implementation.",
        "Gained early proficiency in web fundamentals (HTML, CSS, Basic JS).",
        "Developed entrepreneurial skills through startup simulation projects (branding & operations)."
      ]
    },
    {
      schoolName: "Telkom University Surabaya",
      logo: telkomUnivLogo,
      subHeader: "Bachelor of Information Systems",
      duration: "September 2020 - November 2024",
      // REVISI: Lebih highlight kombinasi Technical + Management.
      desc: "Focused on the intersection of Software Engineering and IT Management. Actively involved in Hackathons, Laboratory Assistance, and Student Orientation Committees.",
      descBullets: [
        "Advanced algorithmic problem solving with Python and Data Structures.",
        "Full-cycle development for Android (Intermediate) and Web Applications (Advanced).",
        "Honed leadership and project management skills through organizational roles and campus training."
      ]
    }
  ]
};

// Work Experience Section
const workExperiences = {
  display: true,
  title: emoji("Experience"),
  subtitle:
    "Professional track record in software development and IT infrastructure.",
  experience: [
    {
      role: "Backend Developer",
      company: "Peduly",
      companylogo: pedulyLogo,
      date: "March 2025 – June 2025",
      // REVISI: Menggunakan Power Verbs (Engineered, Designed, Maintained).
      desc: "Engineered a high-performance broadcast system capable of handling mass messaging via WhatsApp and Email using Laravel, ExpressJS, and MySQL.",
      descBullets: [
        // Saya pindahkan detail ke bullets agar lebih mudah dibaca
        "Designed and implemented robust RESTful APIs for the broadcasting module.",
        "Created comprehensive API documentation to ensure seamless handover and scalability for future developers.",
        "Optimized database queries to handle high-volume data traffic efficiently."
      ]
    },
    {
      role: "Website Developer Intern",
      company: "Kejaksaan Tinggi Jatim",
      companylogo: kejatiLogo,
      date: "August 2023 – September 2023",
      // REVISI: Memperbaiki grammar 'maping' -> 'mapping'.
      desc: "Developed an internal GIS (Geographic Information System) to map personnel availability across provincial and district offices.",
      descBullets: [
        "Built the system using Laravel and jQuery for interactive mapping features.",
        "Digitized the organizational data to assist leadership in personnel distribution analysis."
      ]
    },
    {
      role: "Network Engineer Intern", // Judul disesuaikan dengan deskripsi
      company: "Lintasarta",
      companylogo: lintasartaLogo,
      date: "June 2018 – August 2018",
      desc: "Assisted the Network Engineering team in managing and monitoring local network infrastructure.",
      descBullets: [
        "Developed a CRUD-based web tool to digitize customer network data, replacing manual logging.",
        "Streamlined internal monitoring workflows, reducing data retrieval time for engineers."
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
  title: emoji("Key Projects"),
  subtitle: "DELIVERING IMPACT THROUGH TECHNOLOGY",
  projects: [
    {
      image: hrisImage,
      projectName: "HRIS - PT. Indo Global Impex",
      // REVISI: Struktur Masalah -> Solusi.
      projectDesc:
        "Designed to modernize HR operations. This centralized Human Resources Information System manages employee data, attendance, and payroll automation. It significantly reduced manual administrative workload and minimized data discrepancies.",
      footerLink: [
        {
          name: "View Documentation",
          url: "https://drive.google.com/drive/folders/1jJlkhVb9g3y-d5u3fUa-PQOH4pGvir0b?usp=drive_link"
        }
      ]
    },
    {
      image: echelonmapingprojectimage,
      projectName: "Echelon GIS Mapping",
      projectDesc:
        "A Strategic Dashboard for Kejaksaan Tinggi Jatim. This GIS application provides real-time visualization of personnel distribution across East Java. It empowers decision-makers to analyze staffing gaps and optimize organizational structure efficiently.",
      footerLink: [
        {
          name: "View Project",
          url: "https://drive.google.com/drive/folders/1OcKJ93x-dqBF_9f6ei_XfbERiXbS-ekM?usp=drive_link"
        }
      ]
    },
    {
      image: contactzainzoprojectimage,
      projectName: "Zainzo Broadcast System",
      // REVISI: Hapus "Back when I work for...", langsung ke fitur teknis.
      projectDesc:
        "A SaaS-ready broadcasting platform handling WhatsApp and Email campaigns. Built with a microservice approach using Laravel and ExpressJS. Features include contact management, message scheduling, and detailed delivery reports.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://zainzo.com"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Certifications & Achievements"),
  subtitle: "Continuous learning and professional validation.",

  achievementsCards: [
    {
      title: "Figma UI/UX Essentials",
      // REVISI: Fokus ke skill, bukan review kursus.
      subtitle:
        "Mastered the fundamentals of User Interface and User Experience design. Learned to create high-fidelity prototypes, wireframes, and design systems to bridge the gap between design and development.",
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
      subtitle:
        "Advanced course on building complex transactional websites. Covered MVC architecture, database migrations, middleware security, and payment gateway integration.",
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
      subtitle:
        "Successfully completed professional internship at Kejaksaan Tinggi Jawa Timur, delivering a functional GIS application that was adopted for internal reporting.",
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
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
      subtitle: "Codelab at GDG DevFest Karachi 2019",
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

  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my full professional resume", // Sedikit diperjelas
  display: true
};

// Contact Info Section
const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Have a project in mind or need a technical consultation? Let's discuss how we can create value for your business.",
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
  packages: [
    {
      id: "starter",
      // REVISI: Nama paket lebih menjual.
      title: "Essential Landing",
      price: 2500000,
      shortPrice: "2.5jt",
      // Fokus ke manfaat: 'Professional presence'
      desc: "Perfect for establishing a professional digital presence quickly.",
      features: [
        "Single Page / Landing Page",
        "Fully Responsive (Mobile Ready)",
        "WhatsApp Direct Integration",
        "3 Days Fast Delivery"
      ]
    },
    {
      id: "business",
      title: "Business Pro",
      price: 5000000,
      shortPrice: "5jt",
      // Fokus ke manfaat: 'Growth' dan 'CMS'
      desc: "Designed for growing businesses needing content management flexibility.",
      features: [
        "Up to 8 Pages",
        "Admin/CMS Dashboard",
        "Basic SEO Optimization",
        "1 Month Support & Maintenance",
        "7 Days Delivery"
      ],
      isPopular: true
    },
    {
      id: "custom",
      title: "Custom System",
      price: 10000000,
      shortPrice: "10jt+",
      desc: "Tailor-made web applications for complex operational needs.",
      features: [
        "Full Web Application (SaaS/Internal)",
        "Custom Database & API Design",
        "Secure Authentication System",
        "Complex Business Logic",
        "Documented Handover"
      ]
    }
  ],

  featuresList: [
    {
      id: "feat_responsive",
      title: "Mobile First Design",
      desc: "Optimized experience for all screen sizes",
      price: 500000
    },
    {
      id: "feat_darkmode",
      title: "Dark Mode Support",
      desc: "Modern aesthetic switch",
      price: 800000
    },
    {
      id: "feat_api",
      title: "API Integration",
      desc: "Maps, Payment Gateways, WA Blaster",
      price: 2000000
    }
  ],

  addonsList: [
    {
      id: "add_seo",
      title: "Technical SEO",
      desc: "Improve visibility on Search Engines",
      price: 500000
    },
    {
      id: "add_source",
      title: "Full Source Code",
      desc: "Intellectual property ownership handover",
      price: 2500000
    }
  ]
};

const isHireable = true;

export {
  illustration,
  greeting,
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
