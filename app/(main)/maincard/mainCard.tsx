import Image from "next/image";

export default function MainCard() {
  return (
    <div className="w-4/5 h-max bg-orange-300 rounded-[32rem] flex flex-col items-center">
      <div className="relative bottom-[12rem] left-[4rem]">
        <Image
          src={"/cup2.svg"}
          height={306}
          width={431}
          alt="Illustration of a coffee cup"
        />
      </div>
      <div className="h-[2000px] w-[200px] bg-black">black</div>
    </div>
  );
}
