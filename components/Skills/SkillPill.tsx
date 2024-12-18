import { motion } from "framer-motion";

import { SkillType } from "@/data/skills";

const skillItemAnimationVariants = {
  initial: { y: 80, opacity: 0 },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.05,
    },
  }),
};

type SkillPillProps = {
  skill: SkillType;
  index: number;
};

const hoverClasses: Record<string, string> = {
  javascript: "hover:shadow-javascript/50",
  typescript: "hover:shadow-typescript/50",
  react: "hover:shadow-react/50",
  next: "hover:shadow-next/30",
  html5: "hover:shadow-html5/50",
  css3: "hover:shadow-css3/50",
  "tailwind-css": "hover:shadow-tailwind-css/50",
  redux: "hover:shadow-redux/50",
  "react-query": "hover:shadow-react-query/50",
  "framer-motion": "hover:shadow-framer-motion/50",
  "react-native": "hover:shadow-react-native/50",
  python: "hover:shadow-python/50",
  sql: "hover:shadow-sql/50",
  git: "hover:shadow-git/50",
  docker: "hover:shadow-docker/50",
};

const SkillPill = ({ skill, index }: SkillPillProps) => {
  return (
    <motion.li
      variants={skillItemAnimationVariants}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{ once: true }}
      className={`flex flex-row items-center py-2 px-4 border border-solid border-grey-lighter rounded-full gap-2 bg-white hover:shadow-skillPill ${
        hoverClasses[skill.id]
      }`}
    >
      {skill.icon}
      <span className="text-sm text-grey">{skill.name}</span>
    </motion.li>
  );
};

export default SkillPill;
