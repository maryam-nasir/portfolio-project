import { createPortal } from "react-dom";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";

import { LINKS } from "@/data/links";

const listItemAnimationVariants = {
  initial: { y: 50, opacity: 0 },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3 + index * 0.05,
    },
  }),
};

type MobileNavigationProps = {
  onClose: () => void;
};

const MobileNavigation = ({ onClose }: MobileNavigationProps) => {
  return createPortal(
    <motion.div
      initial={{ x: -500 }}
      animate={{
        x: 0,
        transition: {
          type: "keyframes",
        },
      }}
      className="fixed top-0 left-0 w-screen h-screen overflow-y-scroll bg-gradient-to-br from-primary to-primary-light z-20"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-end p-4">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                velocity: 500,
              },
            }}
            className="p-2 cursor-pointer"
            onClick={onClose}
          >
            <FaXmark size={24} className="text-white" />
          </motion.div>
        </div>

        <ul role="list" className="flex flex-col gap-6 w-80 max-w-80 mx-auto">
          {LINKS.map((link, index) => (
            <motion.li
              key={link.id}
              className="flex flex-col gap-6"
              variants={listItemAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
            >
              <Link
                href={`#${link.id}`}
                className="font-lato font-bold text-base cursor-pointer text-center text-white hover:opacity-80 active:opacity-80"
                onClick={onClose}
              >
                {link.label}
              </Link>
              {index < LINKS.length - 1 && (
                <div className="h-[0px] bg-white opacity-40"></div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>,
    document.getElementById("mobile-navigation-portal")!
  );
};

export default MobileNavigation;
