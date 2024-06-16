import { SubTitleFont } from "@/app/(main)/_components/fonts";
import Image from "next/image";
import { StaggeredText } from "../../_components/animation";

export default function AboutMe() {
  return (
    <div className="w-full h-full flex items-center justify-center my-8 md:my-12 lg:my-20">
      <div className="w-[90%] md:w-[80%] bg-[#F5F5DC] rounded-3xl">
        <div className="flex flex-col w-full h-full p-8 md:p-12 lg:p-20">
          <SubTitleFont className="text-[clamp(2rem,2.5vw+1.5rem,4.5rem)] text-[#3B2F2F]">
            <StaggeredText text="Hello there, I'm Roy" />
          </SubTitleFont>
          <div className="flex flex-col md:flex-row justify-between py-4">
            <div>
              <em className="text-[clamp(1.2rem,1.05vw+0.99rem,2.25rem)] border-2 border-dashed  border-black p-2 rounded-full">
                Also Runanka
              </em>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl py-8 w-full md:w-1/2">
              I am a software developer with a passion for creating and building
              things. I love to learn new things and am always looking for new
              challenges. I have experience with a variety of technologies
              including React, Node.js, and MongoDB.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="rounded-full w-[40%] aspect-square  bg-[#FA8072] translate-y-1/3   ">
            <Image
              src="/profile.jpg"
              fill
              alt="Profile photo"
              className="-translate-y-1/2 -translate-x-1/2 -rotate-[15deg] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
