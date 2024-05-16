import Image from "next/image";

export default function Coffeewave() {
  return (
    <div className="absolute -z-10 top-0 left-0 translate-y-1/2">
        <Image src={"/waves.svg"} fill alt="Illustration of waves"/>
    </div>
  );
}