"use client";

import Container from "../common/Container";
import Heading from "../common/Heading";

import { SECTION_IDS } from "@/constants";
import { SKILLS } from "@/data/skills";
import SkillPill from "./SkillPill";

const Skills = () => {
  return (
    <section id={SECTION_IDS.SKILLS} className="secondary-bg-gradient">
      <Container>
        <div className="max-w-4xl mx-auto px-10 sm:px-20 py-24 flex flex-col items-center">
          <Heading className="text-center">
            My <span className="primary-text-gradient">Skills</span>
          </Heading>

          <ul className="flex flex-row flex-wrap mt-10 justify-center gap-x-4 gap-y-3">
            {SKILLS.map((skill, index) => (
              <SkillPill key={skill.id} skill={skill} index={index} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
