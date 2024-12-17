import Link from "next/link";
import { motion } from "framer-motion";

import { LinkType } from "@/data/links";

const listItemAnimationVariants = {
  initial: { y: 50, opacity: 0 },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.05,
    },
  }),
};

type NavLinkProps = {
  link: LinkType;
  index: number;
};

const NavLink = ({ link, index }: NavLinkProps) => {
  return (
    <motion.li
      variants={listItemAnimationVariants}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{ once: true }}
      className="group flex flex-col font-lato font-bold text-sm cursor-pointer gap-2 text-grey hover:text-grey-dark active:text-grey-dark"
    >
      <Link href={`#${link.id}`} className="px-2">
        {link.shortLabel || link.label}
      </Link>

      <div className="h-1 w-0 group-hover:animate-header-link-hover bg-primary rounded-sm"></div>
    </motion.li>
  );
};

export default NavLink;
