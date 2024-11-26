import Example from "@/app/components/Example/Example";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="w-full h-screen bg-black  flex flex-col justify-center items-center">
      <p className="text-2xl text-white">This is an example of a page</p>
    </div>
  );
}
