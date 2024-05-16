"use client";

import { use, useEffect, useState } from "react";

import Image from "next/image";

export default function LoadingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  } , []);

  if (!loading) {
    return null;
  }

  return (
    <div className="absolute w-screen h-screen  overflow-clip z-50 bg-white">
        <div className="flex w-full h-full justify-center items-center z-10">
            <Image src={"/cup.svg"} height={184} width={261} alt="Illustration of a coffee cup"/>
        </div>
        <div className="absolute top-1/4 left-0 h-full w-full -z-10">
            <Image src={"/waves.svg"} fill alt="Illustration of waves"/>
        </div>
    </div>
  );
}