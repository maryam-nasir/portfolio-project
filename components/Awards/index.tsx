"use client";

import { motion } from "framer-motion";

import Container from "../common/Container";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

import { SECTION_IDS } from "@/constants";
import { AWARDS } from "@/data/awards";

const listItemAnimationVariants = {
  initial: { x: 150, opacity: 0 },
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: index * 0.1,
    },
  }),
};

const Awards = () => {
  return (
    <section id={SECTION_IDS.AWARDS} className="secondary-bg-gradient">
      <Container>
        <div className="max-w-4xl mx-auto px-10 sm:px-20 py-24 flex flex-col items-center">
          <Heading className="text-center">
            <span className="primary-text-gradient">Awards</span> & Achievements
            <span className="text-3xl"> 🥇</span>
          </Heading>

          <ul className="flex flex-col mt-14 gap-5">
            {AWARDS.map((award, index) => (
              <motion.li
                variants={listItemAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true }}
                key={award}
                className="flex flex-row items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full primary-bg-gradient mt-1.5"></div>
                <Paragraph className="flex-1">{award}</Paragraph>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Awards;
