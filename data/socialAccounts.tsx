import {
  FaXTwitter,
  FaLinkedin,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";

export const SOCIAL_ACCOUNT_TYPE = {
  GITHUB: "github",
  LINKED_IN: "linked-in",
  X: "X",
  FE_MENTOR: "FE-Mentor",
} as const;

export type SocialLinkType = {
  type: (typeof SOCIAL_ACCOUNT_TYPE)[keyof typeof SOCIAL_ACCOUNT_TYPE];
  label: string;
  link: string;
  icon: React.JSX.Element;
  footerIcon: React.JSX.Element;
};

export const SOCIAL_LINKS: SocialLinkType[] = [
  {
    type: SOCIAL_ACCOUNT_TYPE.GITHUB,
    label: "GitHub",
    link: "https://github.com/maryam-nasir",
    icon: <FaGithub size={22} />,
    footerIcon: <FaGithub size={18} />,
  },
  {
    type: SOCIAL_ACCOUNT_TYPE.LINKED_IN,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/maryam-nasir/",
    icon: <FaLinkedinIn size={22} />,
    footerIcon: <FaLinkedin size={18} />,
  },
  {
    type: SOCIAL_ACCOUNT_TYPE.X,
    label: "X",
    link: "https://x.com/maryamnasir555",
    icon: <FaXTwitter size={22} />,
    footerIcon: <FaXTwitter size={18} />,
  },
  {
    type: SOCIAL_ACCOUNT_TYPE.FE_MENTOR,
    label: "Frontend Mentor",
    link: "https://www.frontendmentor.io/profile/maryam-nasir",
    icon: <SiFrontendmentor size={20} />,
    footerIcon: <SiFrontendmentor size={16} />,
  },
];
