"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Container from "../common/Container";
import Heading from "../common/Heading";
import EducationItem from "./EducationItem";
import Indicator from "./Indicator";
import WorkExperienceItem from "./WorkExperienceItem";

import { SECTION_IDS } from "@/constants";
import {
  EducationType,
  EXPERIENCE_TYPE,
  EXPERIENCES,
  WorkExperienceType,
} from "@/data/work-experience";

const listItemAnimationVariants = {
  initial: { x: 150, opacity: 0 },
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: index * 0.15,
    },
  }),
};

const WorkExperience = () => {
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <section id={SECTION_IDS.WORK_EXPERIENCE}>
      <Container>
        <div className="max-w-4xl mx-auto px-6 sm:px-12 py-24 flex flex-col items-center">
          <Heading className="text-center">
            <span className="primary-text-gradient">Work Experience</span> &
            Education
          </Heading>

          <div className="relative mt-14 w-full">
            <div className="absolute h-full left-0 flex py-11">
              <div
                className={`w-2.5 border-r border-dashed border-gray-300 ${
                  animationStarted ? "animate-timeline-border" : ""
                }`}
              ></div>
            </div>
            <ul className="flex flex-col w-full">
              {EXPERIENCES.map((experience, index) => (
                <motion.li
                  variants={listItemAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  viewport={{ once: true }}
                  key={experience.id}
                >
                  <div className="flex flex-row gap-4">
                    <Indicator />
                    {experience.type === EXPERIENCE_TYPE.EDUCATION ? (
                      <EducationItem data={experience.data as EducationType} />
                    ) : (
                      <WorkExperienceItem
                        data={experience.data as WorkExperienceType}
                      />
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkExperience;
