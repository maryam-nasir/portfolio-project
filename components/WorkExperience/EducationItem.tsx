import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

import { HEADING_LEVEL } from "@/constants/components";
import { EducationType } from "@/data/work-experience";

type EducationItemProps = {
  data: EducationType;
};

const EducationItem = ({ data }: EducationItemProps) => {
  return (
    <div className="w-full flex flex-col px-6 py-10 bg-white rounded-xl shadow-xl mb-5">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <Heading level={HEADING_LEVEL.FOUR}>{data.degree}</Heading>
        <Paragraph className="italic text-grey-light">
          {data.duration}
        </Paragraph>
      </div>

      <div className="flex flex-col">
        <h5 className="text-lg font-bold my-3">
          <span className="text-primary">{data.university}</span>
        </h5>
        <ul className="flex flex-col gap-2">
          {data.details.map((keyPoint, index) => (
            <li
              key={`${data.degree}-${index}`}
              className="flex flex-row items-start gap-3"
            >
              <div className="w-2 h-[2px] primary-bg-gradient mt-2.5"></div>
              <Paragraph className="flex-1 text-justify">{keyPoint}</Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationItem;
