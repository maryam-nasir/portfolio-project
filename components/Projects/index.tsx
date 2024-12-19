"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";

import Container from "../common/Container";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import ProjectItem from "./ProjectItem";

import { SECTION_IDS } from "@/constants";
import { PROJECTS } from "@/data/projects";

const listItemAnimationVariants = {
  initial: (index: number) => ({
    x: (index % 2 == 0 ? 1 : -1) * 150,
    opacity: 0,
  }),
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: index * 0.15,
    },
  }),
};

const Projects = () => {
  return (
    <section id={SECTION_IDS.PROJECTS}>
      <Container>
        <div className="max-w-4xl mx-auto px-6 sm:px-12 py-24 flex flex-col items-center">
          <Heading className="text-center">Projects</Heading>
          <Paragraph className="text-center mt-4 mb-8">
            Check out some of my projects. I always look for new and exciting
            projects to work on.
          </Paragraph>

          <ul className="w-full">
            {PROJECTS.map((project, index) => (
              <motion.li
                variants={listItemAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true }}
                key={project.id}
              >
                <ProjectItem data={project} index={index} />
              </motion.li>
            ))}
          </ul>

          <div className="w-full flex justify-end">
            <Link
              href="https://github.com/maryam-nasir?tab=repositories"
              target="_blank"
            >
              <div className="flex items-center text-primary hover:opacity-80">
                <span>See more projects</span> <TiArrowRight className="mt-1" />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
