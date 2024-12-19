export type ProjectType = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  codeLink: string;
  websiteLink: string;
  skills: string[];
};

export const PROJECTS: ProjectType[] = [
  {
    id: "intelli-prompts",
    title: "IntelliPrompts",
    description:
      "A personal project built using Next.js which allows users to discover AI prompts shared by the community and to create their own prompts to share with the world and to save for later use.",
    imageUrl: "/images/intelliprompts.png",
    codeLink: "https://github.com/maryam-nasir/intelli-prompts",
    websiteLink: "https://intelli-prompts.vercel.app",
    skills: ["Next.js", "React", "JavaScript", "Tailwind CSS", "MongoDB"],
  },
  {
    id: "travel-app",
    title: "Travel Website",
    description:
      "Landing page which shows the different sections that can make a travel website truly outstanding.",
    imageUrl: "/images/travel-app.png",
    codeLink: "https://github.com/maryam-nasir/travel-app",
    websiteLink: "https://travel-app-six-amber.vercel.app",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "product-list-page",
    title: "Product list with cart",
    description:
      "Frontend Mentor challenge solution to create a mini desserts ordering app.",
    imageUrl: "/images/product-list.png",
    codeLink: "https://github.com/maryam-nasir/fm-product-list-with-cart",
    websiteLink: "https://fm-product-list-with-cart-one.vercel.app",
    skills: ["React", "React Context", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "nike-landing-page",
    title: "Nike Landing Page",
    description:
      "A simpler version of a Nike landing page and contains various interesting and beautiful sections. I have developed this project as part of learning Tailwind CSS.",
    imageUrl: "/images/nike.png",
    codeLink: "https://github.com/maryam-nasir/nike-clone",
    websiteLink: "https://nike-clone-pi-ashy.vercel.app",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "notifications-page",
    title: "Notifications page",
    description:
      "Frontend Mentor challenge solution to create a notifications page.",
    imageUrl: "/images/notifications.png",
    codeLink: "https://github.com/maryam-nasir/fm-notifications-page",
    websiteLink: "https://fm-notifications-page-xi.vercel.app",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
];
