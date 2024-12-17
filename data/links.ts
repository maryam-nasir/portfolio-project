import { SECTION_IDS } from "@/constants";

export type LinkType = {
  id: string;
  label: string;
  shortLabel?: string;
};

export const LINKS: LinkType[] = [
  {
    id: SECTION_IDS.ABOUT_ME,
    label: "About Me",
  },
  {
    id: SECTION_IDS.WORK_EXPERIENCE,
    label: "Work Experience & Education",
    shortLabel: "Work Experience",
  },
  {
    id: SECTION_IDS.SKILLS,
    label: "Skills",
  },
  {
    id: SECTION_IDS.PROJECTS,
    label: "Projects",
  },
  {
    id: SECTION_IDS.AWARDS,
    label: "Awards & Achievements",
    shortLabel: "Awards",
  },
  {
    id: SECTION_IDS.CONTACT_ME,
    label: "Contact Me",
  },
];
