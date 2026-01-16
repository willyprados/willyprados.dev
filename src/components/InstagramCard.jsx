import React from "react";
import { BsInstagram } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";

export default function InstagramCard() {
  return (
    <a
      href="https://instagram.com/willyprados"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <div className="flex flex-col justify-center items-center bg-[#ff48c5d3] dark:bg-[#ff48c556] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out">
        <MdOpenInNew className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]" />
        <BsInstagram className="text-4xl md:text-7xl lg:text-9xl text-white dark:text-[#ffffffaa]"/>
      </div>
    </a>
  );
}
