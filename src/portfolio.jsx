/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

const illustration = {
  animated: true // Set to false to use static SVG
};

// Summary And Greeting Section
const greeting = {
  username: "Brilliant Fikri",
  title: "Hello, I'm Liant",
  subTitle: emoji(
    "🚀 I help organizations, schools, and small businesses build reliable and maintainable web systems. My focus is not just shipping features, but delivering long-term, scalable solutions that actually solve operational problems."
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
    "https://wa.me/6281331487753?text=Halo%20Liant,%20Saya%20tertarik%20untuk%20bekerja%20sama%20terkait%20...",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do as a professional 💻",
  subTitle:
    "I design, build, and maintain software systems with a strong focus on reliability, clarity, and long-term maintainability. I work closely with stakeholders to ensure the solution fits real operational needs, not just technical requirements.",
  skills: [
    emoji(
      "Design and develop scalable web applications tailored to real business workflows"
    ),
    emoji(
      "Build and integrate APIs, third-party services, and internal systems"
    ),
    emoji(
      "Design database structures that are efficient, secure, and easy to maintain"
    ),
    emoji(
      "Provide long-term system support, documentation, and technical handover"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
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
      skillName: "JavaScript (Express, React)",
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
      skillName: "Invision",
      fontAwesomeClassname: "fab fa-invision"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Website Development (Full-Stack)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Network Engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "IT Support",
      progressPercentage: "70%"
    },
    {
      Stack: "UI / UX Design",
      progressPercentage: "60%"
    },
    {
      Stack: "Android Development",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  title: emoji("Education"),
  schools: [
    {
      schoolName: "Telkom Schools Malang",
      logo: telkomLogo,
      subHeader: "Majoring in computer and network engineering",
      duration: "September 2017 - August 2020",
      desc: "Learn many thing about network like tcp / ip, routing, masking, etc. Non academic activity I do is join for IT club and join flag raiser club to hone my discipline.",
      descBullets: [
        "Learn how to crimp the rj45 cable and set (include design, build, and operate) the local area network",
        "Learning little bit about web programming (HTML, CSS, Javascript Basic)",
        "Creating business idea / startup (including make logo, business value, operation scenario, etc)"
      ]
    },
    {
      schoolName: "Telkom University Surabaya",
      logo: telkomUnivLogo,
      subHeader: "Bachelor of Information Systems",
      duration: "September 2020 - November 2024",
      desc: "I learn more about software engineering combine with management skill here. Non academic thing I do besides that is join hackathon, being lab assistant, and being new student introduction (PKKMB) comitee.",
      descBullets: [
        "Learn how to create basic algorithm with python and know data structure",
        "Learn how to build desktop app (little), android app (intermediate), and web development (advance)",
        "Learn about management skill related to IT area and non IT, join the leadership training also that held by the campus"
      ]
    }
  ]
};

// Work Experience Section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  title: emoji("Work Experience"),
  subtitle: "This is my work experience on some great companies / instances!",
  experience: [
    {
      role: "Backend Developer",
      company: "Peduly",
      companylogo: pedulyLogo,
      date: "March 2025 – June 2025",
      desc: "I work as backend developer for peduly to create a website that can handle message broadcaster which is whatsapp and email to send message effectively for the users. In this project I use Laravel and ExpressJs to create the backend API and use MySQL as the database. I contribute pretty much of my time to maintain the robust documentation of the API so that the frontend developer can use it easily and the project can be maintained well for the next developer to come."
    },
    {
      role: "Website Developer Intern",
      company: "Kejaksaan Tinggi Jatim",
      companylogo: kejatiLogo,
      date: "August 2023 – September 2023",
      desc: "I do internship for kejaksaan tinggi jawa timur to create a website (laravel based with jquery to handle the maping) maping availability of personnel in each position in the organization on many location of Kejati office (province level) and kejari office (city or district level)."
    },
    {
      role: "Website Developer Intern",
      company: "Lintasarta",
      companylogo: lintasartaLogo,
      date: "June 2018 – August 2018",
      desc: "Developed an internal web-based customer network database system used by the network engineering team to monitor and manage network data within a local environment.",
      descBullets: [
        "Built a CRUD-based system to manage structured customer network information",
        "Helped simplify internal monitoring workflows for the network engineering team"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: emoji("Big Projects"),
  subtitle: "SOME COMPANIES THAT I HELPED TO BUILD THEIR COOL PROJECTS!",
  projects: [
    {
      image: hrisImage,
      projectName: "Human Resources Information System PT. Indo Global Impex",
      projectDesc:
        "A web-based Human Resources Information System used to manage employee data, attendance, and payroll. This system streamlined HR operations and reduced manual administrative work by centralizing employee information in one platform. Used internally by HR team to manage payroll and attendance efficiently.",
      footerLink: [
        {
          name: "Show Project",
          url: "https://drive.google.com/drive/folders/1jJlkhVb9g3y-d5u3fUa-PQOH4pGvir0b?usp=drive_link"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: echelonmapingprojectimage,
      projectName: "Geographic Information System for Echelon Maping",
      projectDesc:
        "A Geographic Information System used to map personnel availability across provincial and district-level offices. The system helped decision-makers quickly identify staffing distribution and organizational structure across locations. Used by provincial-level decision makers to analyze personnel distribution.",
      footerLink: [
        {
          name: "Show Project",
          url: "https://drive.google.com/drive/folders/1OcKJ93x-dqBF_9f6ei_XfbERiXbS-ekM?usp=drive_link"
        }
      ]
    },
    {
      image: contactzainzoprojectimage,
      projectName: "Contact Zainzo for Broadcasting Message",
      projectDesc:
        "Contact Zainzo is a web based application that can handle broadcasting message to many users using whatsapp and email. This project is build with Laravel, ExpressJS, and Mysql back when I work for Peduly. I ensure the API documentation is well maintained so that the frontend developer and next backend developer can continue the project easily. Used and on going until now and open publicly if you want to try it out yourself.",
      footerLink: [
        {
          name: "Go to Website",
          url: "https://zainzo.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle:
    "Achievements and Certifications that I have acquired during this recent time !",

  achievementsCards: [
    {
      title: "Figma UI UX Design Essentials",
      subtitle:
        "Figma UI / UX essential is course for beginner in UI / UX to know and grasp about the land of designing an app, the mentor daniel walter scott is capable of teaching the subject very clear and can show the good practice for beginner",
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
      title: "Website Development with Laravel",
      subtitle:
        "Developed a website based on laravel that can do transaction inside it.",
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
      title: "Internship at Kejaksaan Tinggi Jawa Timur",
      subtitle:
        "Completed internship at Kejaksaan Tinggi Jawa Timur as website developer to create maping for availability of echelon position in work sub unit of Kejaksaan Tinggi Jawa Timur or known as Kejaksaan Negeri and Kejaksaan Tinggi itself.",
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
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

// Contact Info Section
const contactInfo = {
  title: emoji("Contact Information"),
  subtitle:
    "Have a project in mind or need help evaluating your system requirements? Let's talk and see what solution fits your needs.",
  number: "+62-813-3148-7753",
  email_address: "briliantfikri@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

// Pricing Section
const pricingSection = {
  display: true,
  packages: [
    {
      id: "starter",
      title: "Starter",
      price: 2500000,
      shortPrice: "2.5jt",
      desc: "Starting solution for simple needs and quick delivery.",
      features: [
        "Single Page / Landing Page",
        "Responsive Layout",
        "WhatsApp Integration",
        "3 Days Delivery"
      ]
    },
    {
      id: "business",
      title: "Business",
      price: 5000000,
      shortPrice: "5jt",
      desc: "Ideal for small businesses that need a structured and maintainable website.",
      features: [
        "Up to 8 Pages",
        "CMS Dashboard",
        "Basic SEO",
        "1 Month Maintenance",
        "7 Days Delivery"
      ],
      isPopular: true
    },
    {
      id: "custom",
      title: "Custom App",
      price: 10000000,
      shortPrice: "10jt+",
      desc: "Custom-built system based on business complexity and long-term needs.",
      features: [
        "Web Application",
        "Database & API",
        "Auth System",
        "Complex Logic",
        "14+ Days Delivery"
      ]
    }
  ],

  featuresList: [
    {
      id: "feat_responsive",
      title: "Mobile Optimized",
      desc: "Perfect UI for all devices",
      price: 500000
    },
    {
      id: "feat_darkmode",
      title: "Dark Mode Toggle",
      desc: "Switch theme support",
      price: 800000
    },
    {
      id: "feat_api",
      title: "3rd Party API",
      desc: "Maps, Payment Gateway, etc",
      price: 2000000
    }
  ],

  addonsList: [
    {
      id: "add_seo",
      title: "SEO Advanced",
      desc: "Technical & On-page SEO",
      price: 500000
    },
    {
      id: "add_source",
      title: "Source Code Handover",
      desc: "Get full access to your code",
      price: 2500000
    }
  ]
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
