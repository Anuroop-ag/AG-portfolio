/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Anuroop Gubbala",
  logo_name: "Anuroop Gubbala",
  nickname: "AG",
  full_name: "Anuroop Gubbala",
  subTitle: "Full Stack and Web Developer.",
  subTitle2:
    "I am a Graduate student at Stony Brook University currently pursuing Master's in Computer Science. I  have experience in building projects from scratch and ownership over my products.",
  subTitle3:
    "I am actively looking for an Software Developer Internship. Let's Connect and Have Fun",
  resumeLink:
    "https://drive.google.com/file/d/1c1hKeDASCyf6FJgVdW1nMVaG_LKG8_3q/view?usp=sharing",
  mail: "mailto:anuroop.gubbala@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Anuroop-ag",
  linkedin: "https://www.linkedin.com/in/anuroop-g",
  gmail: "anuroop.gubbala@gmail.com",
  // gitlab: " ",
  // facebook: " ",
  // twitter: "https://twitter.com/hrishi_55",
  // instagram: "https://www.instagram.com/picleric/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "Building responsive website front end using ReactJS",
        "Developing mobile applications using Flutter and native Android",
        "Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "akar-icons:css-fill",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "ion:logo-javascript",
          style: {
            // backgroundColor: "#FFFFFF",
            color: "#E34F26",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "Angular",
          fontAwesomeClassname: "logos:spring",
          style: {
            color: "#F95006",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "C",
          fontAwesomeClassname: "logos:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Android App Development",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "vscode-icons:file-type-firebase",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Api",
          fontAwesomeClassname: "eos-icons:api",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#ffffff",
          },
        },
      ],
    },
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "Experience of working with Data Analysis & Modelling Techniques",
        // "~ ",
        "Predicting Carcadian Cycles based on Tweet Patterns",
      ],
      softwareSkills: [
        // {
        //   skillName: "Tensorflow",
        //   fontAwesomeClassname: "logos-tensorflow",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Keras",
        //   fontAwesomeClassname: "simple-icons:keras",
        //   style: {
        //     backgroundColor: "white",
        //     color: "#D00000",
        //   },
        // },
        // {
        //   skillName: "PyTorch",
        //   fontAwesomeClassname: "logos-pytorch",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#ff7b25",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "file-icons:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#ff7b25",
          },
        },
        {
          skillName: "scikit",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#ff7b25",
          },
        },
      ],
    },
    {
      title: "Human Computer Interaction",
      fileName: "CloudInfraImg",
      skills: [
        " Experience  on designing UI/UX components based on Fitt's Law, Affordances, etc.",
        " Improving User Experience by Heuristic Approach Analysis",
        " Experience on using OpenCV, Dlib to create handsfree Gestures based on Human Expressions",
        " Build Custom Keyboard Swipe Algorithm to increase usability",
        " Interactive Design Component",
      ],
      softwareSkills: [
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#ff7b25",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Dlib",
          fontAwesomeClassname: "simple-icons:dlib",
          style: {
            color: "#86af49",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "SUNY - Stony Brook University",
      subtitle: "Masters in Science in Computer Science ",
      logo_path: "sbu.png",
      alt_name: "SBU",
      duration: "2021 - Present",
      descriptions: [
        " I have studied core subjects like Data Science Fundamentals, Computer Networks, Human Computer Interaction etc.",
        " I have also built projects on Web Development, Mobile App Development, etc.",
      ],
      website_link: "https://www.stonybrook.edu/",
    },
    {
      title: "National Institute of Technology",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "nit.png",
      alt_name: "NIT D",
      duration: "2015 - 2019",
      descriptions: [
        " I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        " I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        " I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://www.sal.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
      alt_name: "deeplearning.ai",
      color_code: "#E2405F",
    },
    {
      title: "Machine Learning",
      subtitle: "deeplearning.ai",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
      alt_name: "Google",
      color_code: "#7A7A7A",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Android Developer Nanodegree",
      subtitle: "Part of Google India Scholarship Program",
      logo_path: "100.png",
      certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
      alt_name: "Google",
      color_code: "#C5E2EE",
    },
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "Google Code-In Student",
      subtitle: "2014-2017",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#1e70c1",
    },
    {
      title: "Google Summer of Code Mentor",
      subtitle: "2017 / 2018 / 2020",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffbfae",
    },
    {
      title: "InOut 4.0 Winner #2",
      subtitle: "2017",
      logo_path: "ino.png",
      certificate_link: " ",
      alt_name: "InOut",
      color_code: "#fffbf3",
    },
    {
      title: "Google Code-In Mentor",
      subtitle: "2017 / 2018 / 2019",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#b190b0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    'I have 2 years experience building full stack applications at "CHALO". I\'ve mostly done projects from scratch and I am actively looking for internships. I have expertise in developing user interactive applications in Android, iOS and Web Platforms. I am looking for a worplace where I can grow my skills further and have fun.',
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Chalo",
          company_url: "https://chalo.com/",
          logo_path: "chalo.jpeg",
          duration: "September 2019 - August 2021",
          location: "Mumbai, IN",
          description:
            "Chalo is India's #1 bus transport technology company that provides live bus tracking services and contactless payment solutions to transform everyday bus travel into a safer and more reliable experience.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Summer Developer Intern",
          company: "Wipro Ltd",
          company_url: "https://wipro.com/",
          logo_path: "wipro-logo.png",
          duration: "May 2018 - July 2018",
          location: "Bangalore, IN",
          description:
            'Designed and Built the "Leave Management System" to manage different leaves in hierarchical multinational organisations with employees.',
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack , Websites and App development projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hrishi2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
  //   link: "https://medium.com/@hrishipatel99",
  //   avatar_image_path: "blogs_image.svg",
  // },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Adaptive K-Push for HTTP 2.0 & HTTP 3.0 ",
      url: "https://github.com/Hrishi1999/opPortfolio",
      description:
        "Designed an adaptive server push algorithm on top of HTTP/2 server which pushes the additional segments for a request from client. Implemented QUIC protocol server and performed comparative study between latency and bandwidth among all protocols for adaptive video streaming",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos:ubuntu",
        },
        {
          name: "ReactJS",
          iconifyClass: "carbon:http",
        },
      ],
    },

    {
      id: "1",
      name: "Predict Circadian Cycle",
      url: "https://github.com/Anuroop-ag/PredictCircadianCycle",
      description:
        "Predict the sleep pattern of the people based on their profession, weather effects and geographical locations from the twitter tweet patterns. ",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
      ],
    },
    {
      id: "2",
      name: "Device Control using Eye Gestures for Quadriplegic People",
      url: "https://github.com/Anuroop-ag/GazeScroller",
      description:
        "Developed a application which reads eye movements and thereby allows to trigger device controls and features. ",
      languages: [
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "bx:bxl-flask",
        },
      ],
    },

    {
      id: "3",
      name: "Faster SHARK2 for Gestures",
      url: "http://anuroop.pythonanywhere.com/",
      description:
        "An improved version to the SHARK 2 algorithm for gestures on keyboard swipes.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "bx:bxl-flask",
        },
        {
          name: "HTML",
          iconifyClass: "logos:html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos:css-3",
        },
      ],
    },
    {
      id: "4",
      name: "Dynamic XDL App System ",
      url: " ",
      description:
        "A System for dynamic XDL files containing VLSI components for user custom applications with 99% accuracy.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "XDL",
          iconifyClass: "simple-icons:xilinx",
        },
      ],
    },
    {
      id: "5",
      name: "Game Development",
      url: "https://github.com/Anuroop-ag/THREEjs-Web-Animations",
      description:
        "Interactive Educational Games in 3D using Three.js for ekShiksha Organization under the Eklavya Program, IIT Bombay .",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "Adobe Illustrator",
          iconifyClass: "cib:adobe-illustrator",
        },
        {
          name: "HTML",
          iconifyClass: "logos:html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos:css-3",
        },
      ],
    },
    {
      id: "6",
      name: "Chat Application ",
      url: "https://github.com/Anuroop-ag/ChatApp",
      description: " An android chat application",
      languages: [
        {
          name: "MongoDB",
          iconifyClass: "logos-android",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
