"use client";
import Image from "next/image";
import { Socials } from "@/constants";

export default function Header() {
  const handleSocialClick = (link: string) => {
    // Redirect to the specified link
    window.open(link);
  };

  return (
    <>
      <h1 className="px-3 sm:px-20 md:px-26 lg:px-30 py-4">
        <Image
          src="/icons/favicon.svg"
          alt="Logo"
          width={148}
          height={44}
          className="md:text-center flex"
        />
      </h1>
      <div className="flex flex-row gap-5 pr-8 md:pr-8">
        <button
          type="submit"
          className="bg-[#0067B1] text-white my-4 px-2 py-2 rounded-full hover:bg-[#007cb1] transition-all font-semibold border border-white cursor-pointer w-full md:w-[8rem]"
        >
          Contact Us
        </button>
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={26}
            height={26}
            onClick={() => handleSocialClick(social.link)}
            className="cursor-pointer"
          />
        ))}
      </div>
    </>
  );
}
