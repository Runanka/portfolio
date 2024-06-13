import Image from "next/image";

import { PiPlusBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import { SubTitleFont } from "@/app/(main)/_components/fonts";

export default function Work() {
  return (
    <div className="w-[80%] flex flex-col justify-center mb-64">
      <div className="w-full relative py-[30%]">
        <Image src="/bow.svg" fill alt="Neck Bow Illustration" />
      </div>
      <div className="flex justify-start">
        <SubTitleFont className="text-4xl md:text-5xl lg:text-7xl text-[#3B2F2F] mb-20">
          Projects I&apos;ve worked on
        </SubTitleFont>
      </div>
      <WorkTile
        title="Kanban Web"
        github="https://github.com/Runanka/kanbanweb"
      />
      <WorkTile
        title="Trip Plannar"
        github="https://github.com/Runanka/Holiday-Plan"
      />
      <WorkTile
        title="Chat Application"
        github="https://github.com/Runanka/Chat-Application"
      />
    </div>
  );
}

function WorkTile({ title, github }: { title: string; github: string }) {
  return (
    <div className="w-full flex bg-[#E0F2E9]  rounded-3xl my-8">
      <div className="w-[50%] p-12 flex justify-start">
        <em className="text-2xl md:text-3xl lg:text-4xl font-bold flex">
          {title}
        </em>
      </div>
      <div className="w-[0px] border-2 border-dashed border-[#FA8072] flex justify-center items-center overflow-visible">
        <div className="absolute w-12 h-12 rounded-full bg-[#FA8072] flex justify-center items-center">
          <PiPlusBold className="text-white text-4xl" />
        </div>
      </div>
      <div className="w-[50%] p-12 flex justify-end">
        <a href={github} target="_blank" rel="noreferrer noopener">
          <em className="text-lg md:text-xl lg:text-2xl flex text-[#3B2F2F] border-solid border-2 border-[#3B2F2F] p-2 rounded-full">
            <FaGithub className="m-2" />
            Github
            <FaArrowRight className="m-2" />
          </em>
        </a>
      </div>
    </div>
  );
}
