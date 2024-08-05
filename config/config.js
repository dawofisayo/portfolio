
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faApple, faYoutube, faResearchgate } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Damilola Awofisayo",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    // {
    //   title: "Resume",
    //   link: "https://docs.google.com/document/d/1xqjRW5OV9jzz4q9QP8pkvcF8RmjG_p4srG5NCmjp658/edit?usp=sharing",
    // },
    // {
    //   title: "Links",
    //   link: "/links",
    // },
    // {
    //   title: "Blog",
    //   link: "https://medium.com/@hashirshoaeb",
    // }
  ],
}
export const intro = {
  title: "Hey, I'm Damilola",
  description: "Passionate about changing the world through technology",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      //resume: require("../editable-stuff/resume.pdf")
      link: "https://docs.google.com/document/d/1xqjRW5OV9jzz4q9QP8pkvcF8RmjG_p4srG5NCmjp658/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "Hi! My name is Damilola Awofisayo. I'm currently a junior at Duke University, majoring in computer science with a minor in business administration at UNC-Chapel Hill. I am a full-ride merit scholarship recipient through the Robertson Scholar Leadership Program. My primary interest lies at the intersection of technology and society. I am passionate about developing and exploring tech projects in these fields, particularly their impact on various communities and institutions worldwide.",
    "In my free time, I enjoy attending hackathons, playing sports, hanging out with friends and family, travelling and exploring new food spots.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Mobile App Development",
      description: "Specializing in iOS development but I have experience with Android Studio and cross-platform app development using React Native",
      icons: null,
    },
    {
      title: "Backend Development",
      description: "Skilled in building robust backend systems with a focus on scalability and security. Proficient in server-side languages, database management, and API integration to support seamless front-to-back connectivity.",
      icons: null,
    },
    {
      title: "Public Speaking",
      description: "From conferences to developer showcases, I've done events both in the United States and Sub-Saharan Africa including diversity in STEM, education, and emerging technologies/entrepreneurship in the US and Africa.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Vision",
      description: "Develops reading skills for students with dyslexia through simulations supported by recent research. Swift Student Challenge Winner 2021; selected as 1 of 12 to present app to Apple CEO, Tim Cook; Featured on the app store for WWDC.",
      icons: [
        {
          icon: faApple,
          link: "https://www.apple.com/newsroom/2021/06/apples-wwdc21-swift-student-challenge-winners-code-to-change-the-world/",
        },
        // {
        //   icon: faGithub,
        //   link: "https://github.com/hashirshoaeb/star_book",
        // },
      ]
    },
    {
      title: "ASLGo",
      description: "An app that helps people learn American Sign Language with step-by-step modules and live feedback. I worked in a group with 3; built and integrated the CoreML model to detect live hand gestures to learn the basics of ASL with live feedback. Submitted to MIT’s hackathon; received the most participant votes out of 70+ projects.",
      icons: [
        // {
        //   icon: faAppStore,
        //   link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        // },
        // {
        //   icon: faGooglePlay,
        //   link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        // },
      ]
    },
    {
      title: "Ask Sam",
      description: "Built a full-stack website and chatbot that can discuss over 20 different political issues and recommend articles and resources to combat the increasing political apathy and division in the US.",
      icons: [
        {
          icon: faYoutube,
          link: "https://youtu.be/njvOgPIJ3ns",
        },
      ]
    },
    {
      title: "Plantry",
      description: "Plantry is an app that helps amateur farmers and gardeners by tracking and organizing home gardens, giving new plant and recipe suggestions, and using machine learning to detect plant diseases and recognize plants the user wants to know about. Built using Swift and CoreML",
      icons: [
        {
          icon: faYoutube,
          link: "https://youtu.be/_gYKkumA2r0",
        },
      ]
    },
    {
      title: "Investyx",
      description: "Investyx is an app that aims to educate future generations on effective investment practice through use of interactive game simulations and personalized ratings for your investments. Built using Swift, Flask and the Plaid API",
      icons: [
        {
          icon: faYoutube,
          link: "https://youtu.be/QOf8FFUuXIg",
        },
      ]
    },
    {
      title: "Dark Pattern Detection",
      description: "Trained ML model employing computer vision and natural language processing techniques to detect dark patterns on web and mobile apps. Worked on data collection using Python to scrape dark patterns from over 1000+ websites. Paper accepted for the 45th IEEE/ACM International Conference on Software Engineering (ICSE 2023)",
      icons: [
        {
          icon: faResearchgate,
          link: "https://www.researchgate.net/publication/372375238_AidUI_Toward_Automated_Recognition_of_Dark_Patterns_in_User_Interfaces",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at damiawofisayo@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:damiawofisayo@gmail.com",
      isPrimary: true,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/damilola-awofisayo/",
      isPrimary: false,
    },
    // {
    //   title: "Schedule Meeting",
    //   link: "https://topmate.io/hashirshoaeb",
    //   isPrimary: false,
    // },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Damilola Awofisayo | Portfolio",
  description: "CS & Business @ Duke/Kenan-Flagler | Robertson Scholar",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@hashirshoaeb",
  description: "Computer Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "My website",
      link: "https://hashirshoaeb.com/",
    },
    {
      title: "QuranTalk App",
      link: "https://www.qurantalk.app/",
    },
    {
      title: "StarBook App",
      link: "https://starbook.dev/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/hashirshoaeb/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/hashirshoaeb/",
    },
  ]
}