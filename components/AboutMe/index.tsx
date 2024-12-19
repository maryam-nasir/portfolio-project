"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";

import Button from "../common/Button";
import Container from "../common/Container";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import TypingEffect from "../common/TypingEffect";
import SocialLink from "./SocialLink";

import { SECTION_IDS } from "@/constants";
import { HEADING_LEVEL } from "@/constants/components";
import { SOCIAL_LINKS } from "@/data/socialAccounts";

const AboutMe = () => {
  const delay: number = 10;

  const firstHeadingText: string = "I'm ";
  const secondHeadingText: string = "Maryam Nasir";
  const thirdHeadingText: string = " !";
  const subHeading: string = "Front-end Developer";
  const paragraph: string =
    "I am a front-end developer with a strong foundation in building responsive and highly interactive web applications using modern technologies like React, Next.js, TypeScript, and Tailwind CSS. I’m passionate about crafting seamless, intuitive interfaces that enhance user experiences and am committed to writing clean, efficient code. With a focus on continuous improvement, I enjoy tackling new challenges and advancing my skills in the fast-evolving world of front-end development.";

  const firstDelay: number = (firstHeadingText.length + 1) * delay;
  const secondDelay: number =
    firstDelay + (secondHeadingText.length + 1) * delay;

  const subHeadingDelay: number =
    secondDelay + (thirdHeadingText.length + 1) * delay;

  const paragraphDelay: number =
    subHeadingDelay + (subHeading.length + 1) * delay;

  return (
    <section id={SECTION_IDS.ABOUT_ME} className="mt-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          {/* Left Section */}
          <div className="flex flex-col justify-between md:w-[55%] px-8 sm:px-20 md:px-0 min-h-[432px] mb-8 md:mb-0">
            <div className="flex flex-row items-center gap-2">
              <Paragraph className="sm:!text-lg !font-bold">Hi there</Paragraph>
              <div className="text-2xl animate-waving-hand-emoji origin-[70%_70%]">
                👋
              </div>
            </div>

            <div className="flex flex-col">
              <Heading level={HEADING_LEVEL.ONE} className="mt-6 mb-4">
                <TypingEffect text={firstHeadingText} />
                <span className="primary-text-gradient">
                  <TypingEffect text={secondHeadingText} delay={firstDelay} />
                </span>
                <TypingEffect text={thirdHeadingText} delay={secondDelay} />
              </Heading>

              <Heading level={HEADING_LEVEL.FOUR} className="!text-grey">
                <TypingEffect text={subHeading} delay={subHeadingDelay} />
              </Heading>

              <Paragraph className="sm:!text-base !text-grey-dark my-12 text-justify">
                <TypingEffect
                  text={paragraph}
                  delay={paragraphDelay}
                  writingDelay={5}
                />
              </Paragraph>
            </div>

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay:
                    (paragraphDelay + (paragraph.length * delay) / 2) / 1000,
                },
              }}
              viewport={{ once: true }}
            >
              <ul className="flex flex-row items-center max-md:justify-center gap-4 flex-wrap">
                {SOCIAL_LINKS.map((link) => (
                  <SocialLink key={link.type} link={link} />
                ))}

                <a
                  href="/pdf/Maryam_Nasir.cv.pdf"
                  download="Maryam_Nasir.cv.pdf"
                  className="ml-4"
                >
                  <Button>
                    <FaDownload />
                    Download CV
                  </Button>
                </a>
              </ul>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="md:w-2/5 px-8 sm:px-20 md:px-0">
            <div className="relative flex items-center justify-center min-h-[230px] min-w-[230px]">
              <Image
                src={"/images/girl.png"}
                alt="Female Software Engineer"
                className="z-10"
                width={230}
                height={230}
                priority
              />
              <div className="absolute w-72 h-64 rounded-tl-[60%] rounded-tr-[45%] rounded-br-[55%] rounded-bl-[45%] primary-bg-gradient animate-hero-image"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
