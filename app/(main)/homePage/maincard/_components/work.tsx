import Image from "next/image";

import { PiPlusBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import { SubTitleFont } from "@/app/(main)/_components/fonts";

export default function Work() {
  return (
    <div className="w-[90%] md:w-[80%] flex flex-col justify-center mb-16 md:mb-32 lg:mb-64">
      <div className="w-full relative py-[30%]">
        <Image src="/bow.svg" fill alt="Neck Bow Illustration" />
      </div>
      <div className="flex justify-start">
        <SubTitleFont className="text-[clamp(2rem,2.5vw+1.5rem,4.5rem)] text-[#3B2F2F] mb-8 md:mb-16 lg:mb-20">
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
      <div className="w-[50%] p-6 md:p-10 lg:p-12 flex justify-start items-center">
        <em className="text-[clamp(1.2rem,2.5vw+0.7rem,1.9rem)] md:text-[clamp(1.9rem,0.486vw+1.667rem,2.25rem)] font-bold flex">
          {title}
        </em>
      </div>
      <div className="w-[0px] border-2 border-dashed border-[#FA8072] flex justify-center items-center overflow-visible">
        <div className="absolute w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#FA8072] flex justify-center items-center">
          <PiPlusBold className="text-white text-4xl" />
        </div>
      </div>
      <div className="w-[50%] p-6 md:p-10 lg:p-12 flex justify-end items-center">
        <a href={github} target="_blank" rel="noreferrer noopener">
          <em className=" flex justify-center items-center text-[#3B2F2F] border-solid border-2 border-[#3B2F2F] p-2 rounded-full">
            <FaGithub className="mr-2 text-[clamp(1.5rem,0.75vw+1.35rem,2.25rem)]" />
            <span className="hidden md:block text-[clamp(1.5rem,0.417vw+1.3rem,1.8rem)]">
              Github
            </span>
            <FaArrowRight className="ml-2 text-[clamp(1.25rem,0.25vw+1.2rem,1.5rem)]" />
          </em>
        </a>
      </div>
    </div>
  );
}
