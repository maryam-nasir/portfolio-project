import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaSquareJs,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaPython,
} from "react-icons/fa6";
import {
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { PiFramerLogoFill } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";

import COLORS from "@/tailwind/colors";

const ICON_SIZE = 22;
const BIG_ICON_SIZE = 25;

export type SkillType = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

export const SKILLS: SkillType[] = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: <FaSquareJs size={ICON_SIZE} color={COLORS.javascript} />,
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <BiLogoTypescript size={BIG_ICON_SIZE} color={COLORS.typescript} />,
  },
  {
    id: "react",
    name: "React",
    icon: <FaReact size={ICON_SIZE} color={COLORS.react} />,
  },
  {
    id: "next",
    name: "Next.js",
    icon: <RiNextjsFill size={BIG_ICON_SIZE} color={COLORS.next} />,
  },
  {
    id: "html5",
    name: "HTML5",
    icon: <FaHtml5 size={ICON_SIZE} color={COLORS.html5} />,
  },
  {
    id: "css3",
    name: "CSS3",
    icon: <FaCss3Alt size={ICON_SIZE} color={COLORS.css3} />,
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS",
    icon: (
      <BiLogoTailwindCss size={BIG_ICON_SIZE} color={COLORS["tailwind-css"]} />
    ),
  },
  {
    id: "redux",
    name: "Redux",
    icon: <BiLogoRedux size={ICON_SIZE} color={COLORS.redux} />,
  },
  {
    id: "react-query",
    name: "React Query",
    icon: <SiReactquery size={ICON_SIZE} color={COLORS["react-query"]} />,
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    icon: <PiFramerLogoFill size={20} color={COLORS["framer-motion"]} />,
  },
  {
    id: "react-native",
    name: "React Native",
    icon: <FaReact size={ICON_SIZE} color={COLORS["react-native"]} />,
  },
  {
    id: "python",
    name: "Python",
    icon: <FaPython size={ICON_SIZE} color={COLORS.python} />,
  },
  {
    id: "sql",
    name: "SQL",
    icon: <FaDatabase size={18} color={COLORS.sql} />,
  },
  {
    id: "git",
    name: "Git",
    icon: <FaGitAlt size={ICON_SIZE} color={COLORS.git} />,
  },
  {
    id: "docker",
    name: "Docker",
    icon: <FaDocker size={ICON_SIZE} color={COLORS.docker} />,
  },
];
