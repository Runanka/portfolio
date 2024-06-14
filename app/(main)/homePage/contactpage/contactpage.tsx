import { SubTitleFont } from "../../_components/fonts";

export default function ContactPage() {
  return (
    <div className="w-full h-svh z-20 flex flex-col justify-center items-center">
      <SubTitleFont className="text-[clamp(1.8rem,8.2vw+0.16rem,10rem)] text-[#3B2F2F]">
        <a href="mailto:runanka@outlook.com">runanka@outlook.com</a>
      </SubTitleFont>
      <div className="flex flex-col"></div>
    </div>
  );
}
