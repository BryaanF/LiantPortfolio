/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Brilliant Fikri",
  title: "Hello, I'm Liant",
  subTitle: emoji(
    "I am a Full Stack Web and Mobile Application Developer 🚀 having an experience of building Web, Mobile, and desktop applications with JavaScript (React.js) / PHP (Laravel) / React Native / Java and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1o7l_AQx5z2AdFUB2mR1EC2FJ99mu5VLF?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/BryaanF",
  linkedin: "https://www.linkedin.com/in/brilliantfikri/",
  gmail: "briliantfikri@gmail.com",
  medium: "https://medium.com/@briliantfikri",
  stackoverflow: "https://stackoverflow.com/users/14787789/briliant-fikri",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do 💻",
  subTitle: "I do full stack development of web and mobile applications",
  skills: [
    emoji(
      "⚡ Develop responsive and user friendly web and mobile applications match your business needs"
    ),
    emoji(
      "⚡ Integration of third party services like hosting / API integration / etc"
    ),
    emoji(
      "⚡ Setting up and managing SQL or NoSQL databases based on the application's requirements"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html 5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css 3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "invision",
      fontAwesomeClassname: "fab fa-invision"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Telkom Schools Malang",
      logo: require("./assets/images/telkomSchoolsLogo.png"),
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
      logo: require("./assets/images/telkomUniversityLogo.png"),
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

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Website Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Android Development",
      progressPercentage: "70%"
    },
    {
      Stack: "UI / UX Design",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  subtitle: "This is my work experience on some great companies / instances!",
  experience: [
    {
      role: "Website Developer Intern",
      company: "Lintasarta",
      companylogo: require("./assets/images/lintasartaLogo.png"),
      date: "June 2018 – Agusut 2018",
      desc: "I build customer database management to handle a network data to be monitor by network engineer team. Build for local network with vanila HTML, CSS, and Javascript with database Mysql.",
      descBullets: [
        "Ensure website run well to do CRUD (Create, Read, Update, Delete) for customer network data",
        "Communicate and collaborate with developer team from same school as me"
      ]
    },
    {
      role: "Website Developer Intern",
      company: "Kejaksaan Tinggi Jatim",
      companylogo: require("./assets/images/kejatiJatimLogo.png"),
      date: "August 2023 – September 2023",
      desc: "I do internship for kejaksaan tinggi jawa timur to create a website (laravel based with jquery to handle the maping) maping availability of personnel in each position in the organization on many location of Kejati office (province level) and kejari office (city or district level)."
    },
    {
      role: "Lab Assistant ",
      company: "Tel U Surabaya",
      companylogo: require("./assets/images/telkomUniversityLogo.png"),
      date: "Janary 2024 – June 2024",
      desc: "I work part time as lab assistant to teaching about framework programming and basic computer network subjet. I learn many from this experience how to communicate the material to the student and collaborate with other lab assitant to ensure quality of teaching."
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
  title: "Big Projects 🚀",
  subtitle: "SOME COMPANIES THAT I HELPED TO BUILD THEIR COOL PROJECTS!",
  projects: [
    {
      image: require("./assets/images/logoigi.png"),
      projectName: "Human Resources Information System PT. Indo Global Impex",
      projectDesc:
        "HRIS IGI is a web based application that can handle the employee data, attendance, and payroll. This project is build with Laravel and Mysql for PT. Indo Global Impex.",
      footerLink: [
        {
          name: "Show Portfolio",
          url: "https://drive.google.com/drive/folders/1jJlkhVb9g3y-d5u3fUa-PQOH4pGvir0b?usp=drive_link"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/kejatiJatimLogo.png"),
      projectName: "Geographic Information System for Echelon Maping",
      projectDesc:
        "GIS for echelon maping is a web based application that can handle the availability of personnel in each position in the organization on many location of Kejati office (province level) and kejari office (city or district level). This project is build with Laravel and Mysql for Kejaksaan Tinggi Jawa Timur.",
      footerLink: [
        {
          name: "Show Portfolio",
          url: "https://drive.google.com/drive/folders/1OcKJ93x-dqBF_9f6ei_XfbERiXbS-ekM?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements and Certifications that I have done !",

  achievementsCards: [
    {
      title: "Figma UI UX Design Essentials",
      subtitle:
        "Figma UI / UX essential is course for beginner in UI / UX to know and grasp about the land of designing an app, the mentor daniel walter scott is capable of teaching the subject very clear and can show the good practice for beginner",
      image: require("./assets/images/udemyLogo.png"),
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
      image: require("./assets/images/bwaLogo.png"),
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
      image: require("./assets/images/kejatiJatimLogo.png"),
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
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
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

const contactInfo = {
  title: emoji("📞 My Contact Information"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all!",
  number: "📱 +62-813-3148-7753",
  email_address: " 📧 briliantfikri@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  resumeSection
};
