export const EXPERIENCE_TYPE = {
  EDUCATION: "education",
  WORK_EXPERIENCE: "work_experience",
} as const;

export type WorkExperienceType = {
  company: string;
  duration: string;
  positions: {
    title: string;
    duration?: string;
    responsibilities: string[];
  }[];
};

export type EducationType = {
  university: string;
  degree: string;
  duration: string;
  details: string[];
};

type ExperienceType = {
  id: string;
  type: (typeof EXPERIENCE_TYPE)[keyof typeof EXPERIENCE_TYPE];
  data: WorkExperienceType | EducationType;
};

export const EXPERIENCES: ExperienceType[] = [
  {
    id: "makula",
    type: EXPERIENCE_TYPE.WORK_EXPERIENCE,
    data: {
      company: "Makula Technology GmbH",
      duration: "July 2024 - Present",
      positions: [
        {
          title: "Software Engineer",
          duration: "",
          responsibilities: [
            "Working as a Front-End Engineer, specializing in React, Tailwind CSS, and TypeScript. Leading the optimization and refactoring of the web application by migrating it to TypeScript and Tailwind CSS, while eliminating unoptimized code to improve performance and maintainability.",
          ],
        },
      ],
    },
  },
  {
    id: "securiti.ai",
    type: EXPERIENCE_TYPE.WORK_EXPERIENCE,
    data: {
      company: "Securiti.ai",
      duration: "October 2023 - June 2024",
      positions: [
        {
          title: "Senior Software Dev Engineer",
          duration: "",
          responsibilities: [
            "Contributed to the back-end development of a company product, utilizing Java, AWS, and Go.",
          ],
        },
      ],
    },
  },
  {
    id: "folio3",
    type: EXPERIENCE_TYPE.WORK_EXPERIENCE,
    data: {
      company: "Folio3",
      duration: "October 2019 - October 2023",
      positions: [
        {
          title: "Senior Software Engineer",
          duration: "January 2022 - October 2023",
          responsibilities: [
            "Worked on multiple projects including Game Golf web app (React.js), Folio3 Resource Management tool backend (Node.js) and Cargill Dairy Entelligen mobile app (React Native). Got the opportunity to lead Game Golf project as front-end lead and also lead the Cargill mobile app team while the techincal lead was away on 3 months leave.",
            "Among all my projects at Folio3, the most challenging was the Game Golf web app. I singlehandedly developed several complex graphs to display golf ball trajectories, consolidating that data into a single comprehensive graph. To enhance user interaction, I implemented blur animations and hover effects, enabling users to filter shots by categories and matches. This project required a deep focus on data visualization and an interactive user experience.",
            "Nominated 2 times for Employee of the Month award.",
            "Voluntarily interviewed fresh graduates, designed screening technical tests, and conducted coding competitions and internship programs for students.",
          ],
        },
        {
          title: "Software Engineer",
          duration: "October 2019 - December 2021",
          responsibilities: [
            "Worked on multiple projects including Menu Inc mobile and web applications using React.js and React Native, Thrive web app (React.js), and Field Sales App using Flutter.",
            "Nominated for Employee of the Month award while working on Thrive web app.",
            "Got 1st position in Code Wars 2021 (Problem Solving, SQL), Code Wars 2020 (Problem Solving) and 2nd position in Code Wars 2019 (Problem Solving). Code Wars is an annual coding competition hosted by Folio3 on HackerRank.",
            "Delivered multiple sessions on problem solving, and coding competitions for the employees and internship students of Folio3.",
          ],
        },
      ],
    },
  },
  {
    id: "intellisense",
    type: EXPERIENCE_TYPE.WORK_EXPERIENCE,
    data: {
      company: "Intellisense Solutions",
      duration: "October 2018 - February 2019",
      positions: [
        {
          title: "Trainee Software Engineer",
          duration: "",
          responsibilities: [
            "Developed Android ‘Review’ application using Java which lets the customers review the items they consumed at the restaurant.",
            "Also, worked on ‘E-Prescription’, a web application using Angular framework to let patients connect with doctors. The basic purpose of this web-app was to keep record of patient prescriptions online, so that it can be useful to the doctor at the time of appointment or can provide information about the patient’s health to the new doctor.",
          ],
        },
      ],
    },
  },
  {
    id: "bcit",
    type: EXPERIENCE_TYPE.EDUCATION,
    data: {
      university: "NED University Of Engineering & Technology",
      degree: "Bachelor of Computer Science And IT",
      duration: "January 2016 - December 2019",
      details: [
        "Awarded merit Gold Medal for getting first position in the entire department. Graduated with 3.943/4.0 CGPA (98%).",
      ],
    },
  },
];
