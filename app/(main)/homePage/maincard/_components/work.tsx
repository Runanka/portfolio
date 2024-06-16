import Image from "next/image";

import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoHtml5,
} from "react-icons/io5";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

import { SubTitleFont } from "@/app/(main)/_components/fonts";
import { useState } from "react";
import { StaggeredText } from "../../_components/animation";

export default function Work() {
  return (
    <div className="w-[90%] md:w-[80%] flex flex-col justify-center mb-16 md:mb-32 lg:mb-64">
      <div className="w-full relative py-[30%]">
        <Image src="/bow.svg" fill alt="Neck Bow Illustration" />
      </div>
      <div className="flex justify-start">
        <SubTitleFont className="text-[clamp(2rem,2.5vw+1.5rem,4.5rem)] text-[#3B2F2F] mb-8 md:mb-16 lg:mb-20">
          <StaggeredText text="Projects I've worked on" />
        </SubTitleFont>
      </div>
      <WorkTile
        title="Kanban Web"
        description="KanbanWeb is a collaborative, web-based kanban board application. It features user authentication, organization management, board management, and collaboration."
        github="https://github.com/Runanka/kanbanweb"
        components={[
          <SiTailwindcss key="tailwind" />,
          <SiNextdotjs key="nextjs" />,
          <SiReact key="react" />,
          <SiPostgresql key="postgresql" />,
          <SiPrisma key="prisma" />,
        ]}
      />
      <WorkTile
        title="Trip Plannar"
        description="Trip Planning Web App - Plan your personalized trip based on the current weather in any city using OpenAI GPT-3.5-Turbo model."
        github="https://github.com/Runanka/Holiday-Plan"
        components={[
          <IoLogoCss3 key="css3" />,
          <IoLogoJavascript key="js" />,
          <IoLogoNodejs key="nodejs" />,
          <IoLogoHtml5 key="html" />,
        ]}
      />
      <WorkTile
        title="Chat Application"
        description="A server-client chat application that features a GUI of a messenger, and is built using C++ and QT."
        github="https://github.com/Runanka/Chat-Application"
        components={[
          <span
            className="font-bold text-[clamp(1rem,0.5vw+0.9rem,1.5rem)]"
            key="c++"
          >
            C++
          </span>,
          <span
            className="font-bold text-[clamp(1rem,0.5vw+0.9rem,1.5rem)]"
            key="qt"
          >
            QT
          </span>,
          <span
            className="font-bold text-[clamp(1rem,0.5vw+0.9rem,1.5rem)]"
            key="qml"
          >
            QML
          </span>,
        ]}
      />
    </div>
  );
}

function WorkTile({
  title,
  description,
  github,
  components,
}: {
  title: string;
  description: string;
  github: string;
  components?: React.ReactNode[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full flex bg-[#F5F5DC]  rounded-3xl my-8 border-4 border-solid border-[#3B2F2F]">
      <div className="w-[50%] p-6 md:p-10 lg:p-12 flex flex-col justify-start items-start">
        <em className="text-[clamp(1.2rem,2.5vw+0.7rem,1.9rem)] md:text-[clamp(1.9rem,0.486vw+1.667rem,2.25rem)] font-bold flex">
          {title}
        </em>
        {isExpanded && (
          <p className="text-[clamp(1rem,0.5vw+0.9rem,1.5rem)] mt-4">
            {description}
          </p>
        )}
      </div>
      <div className="w-[0px] border-2 border-dashed border-[#3B2F2F] flex justify-center items-center overflow-visible">
        <div
          onClick={handleClick}
          className="absolute w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#FA8072] flex justify-center items-center"
        >
          {isExpanded ? (
            <PiMinusBold className="text-white text-[clamp(1.5rem,0.75vw+1.35rem,2.25rem)]" />
          ) : (
            <PiPlusBold className="text-white text-[clamp(1.5rem,0.75vw+1.35rem,2.25rem)]" />
          )}
        </div>
      </div>
      <div className="w-[50%] p-6 md:p-10 lg:p-12 flex flex-col justify-between items-end">
        {isExpanded && (
          <div className="flex flex-wrap gap-0 md:gap-2 justify-end">
            {components?.map((Component, index) => (
              <span
                key={index}
                className="flex justify-center items-center text-[clamp(1.5rem,0.417vw+1.3rem,1.8rem)] text-[#3B2F2F] border-2 border-dotted border-[#3B2F2F] p-2 rounded-full"
              >
                {Component}
              </span>
            ))}
          </div>
        )}
        <a href={github} target="_blank" rel="noreferrer noopener">
          <em className=" flex justify-center items-center text-[#3B2F2F] border-solid border-2 border-[#3B2F2F] p-2 rounded-full mt-4">
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
