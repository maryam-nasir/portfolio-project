import Link from "next/link";
import Image from "next/image";
import { TiArrowRight } from "react-icons/ti";

import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

import { ProjectType } from "@/data/projects";
import { HEADING_LEVEL } from "@/constants/components";

type ProjectItemProps = {
  data: ProjectType;
  index: number;
};

const ProjectItem = ({ data, index }: ProjectItemProps) => {
  return (
    <div
      className={`w-full flex flex-col ${
        index % 2 == 0 ? "sm:flex-row" : "sm:flex-row-reverse"
      } items-center px-8 py-10 gap-5 bg-white rounded-xl shadow-xl mb-5 border border-solid border-gray-200`}
    >
      <Link
        href={data.websiteLink}
        target="_blank"
        className="relative w-full sm:w-2/5 max-w-64 h-48 rounded-lg flex items-center justify-center overflow-hidden"
      >
        <Image
          src={data.imageUrl}
          alt={data.title}
          fill
          className="hover:scale-110 duration-500"
        />
      </Link>
      <div className="w-full sm:w-3/5 flex flex-col">
        <Link href={data.websiteLink} target="_blank" className="w-fit">
          <Heading
            level={HEADING_LEVEL.FOUR}
            className="text-primary hover:opacity-80"
          >
            {data.title}
          </Heading>
        </Link>

        <Paragraph className="mt-4 mb-6">{data.description}</Paragraph>

        <ul className="flex flex-row flex-wrap gap-x-2 gap-y-3">
          {data.skills.map((skill) => (
            <li
              key={`${data.title}-${skill}`}
              className={`py-1.5 px-3 border border-solid border-grey-lighter rounded-full bg-white text-xs text-grey`}
            >
              {skill}
            </li>
          ))}
        </ul>

        <div className="flex mt-4">
          <Link href={data.codeLink} target="_blank" className="w-fit">
            <div className="flex items-center text-primary hover:opacity-80">
              <span>View Code</span> <TiArrowRight className="mt-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
