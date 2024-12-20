import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

import { HEADING_LEVEL } from "@/constants/components";
import { WorkExperienceType } from "@/data/work-experience";

type WorkExperienceItemProps = {
  data: WorkExperienceType;
};

const WorkExperienceItem = ({ data }: WorkExperienceItemProps) => {
  return (
    <div className="w-full flex flex-col px-6 py-10 bg-white rounded-xl shadow-xl mb-5 border border-solid border-gray-200">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <Heading level={HEADING_LEVEL.FOUR}>{data.company}</Heading>
        <Paragraph className="italic text-grey-light">
          {data.duration}
        </Paragraph>
      </div>
      <div className="flex flex-col gap-4 divide-y divide-dashed divide-grey-lighter">
        {data.positions.map((position) => (
          <div
            key={`${data.company}-${position.title}`}
            className="flex flex-col"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 mb-2">
              <h5 className="text-lg font-bold text-primary">
                {position.title}
              </h5>
              <Paragraph className="italic text-grey-light text-xs">
                {position.duration}
              </Paragraph>
            </div>
            <ul className="flex flex-col gap-2">
              {position.responsibilities.map((keyPoint, index) => (
                <li
                  key={`${data.company}-${position.title}-${index}`}
                  className="flex flex-row items-start gap-3"
                >
                  <div className="w-2 h-[2px] primary-bg-gradient mt-2.5"></div>
                  <Paragraph className="flex-1 text-justify">
                    {keyPoint}
                  </Paragraph>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceItem;
