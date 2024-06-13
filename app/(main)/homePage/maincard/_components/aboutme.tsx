import { SubTitleFont } from "@/app/(main)/_components/fonts";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="w-full h-svh flex items-center justify-center my-20">
      <div className="w-[80%] bg-[#F5F5DC] rounded-3xl">
        <div className="flex flex-col w-full h-full p-20">
          <SubTitleFont className="text-4xl md:text-5xl lg:text-7xl text-[#3B2F2F]">
            Hello there, I&apos;m Roy
          </SubTitleFont>
          <div className="flex flex-col lg:flex-row justify-between py-4">
            <div>
              <em className="text-2xl md:text-3xl lg:text-4xl border-2 border-dashed  border-black p-2 rounded-full">
                Also Runanka
              </em>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl pt-8 w-1/2">
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
