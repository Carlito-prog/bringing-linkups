'use client'
import { FaApple, FaGooglePlay } from "react-icons/fa6"
import { Plus_Jakarta_Sans } from "next/font/google"
import { WordRotate } from "@/components/ui/word-rotate"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap"
})

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 px-5 h-[500px] md:h-[650px] text-center">
      <h2 className="font-medium text-xl md:text-3xl pb-2 tracking-[.1rem] md:tracking-[.2rem] uppercase">Bringing Link Ups</h2>
      <hr className="bg-[#fff]/75 border-0 h-[1px] w-[15%]"/>
      <h1 className="font-bold font-serif -mt-2 text-[5rem] md:text-[8rem] leading-[1]">
        Your <span className="align-text-bottom inline-block text-[#2d72ff] text-center">
          <WordRotate words={["Interests", "City", "People"]} />
        </span>
      </h1>
      <p className="font-light text-lg md:text-2xl ">
        BLU is a social event platform that helps you discover people, media,<br className="hidden md:block"/>and events aligned to your interests and location — all in one place.
      </p>

      <div className="flex flex-col sm:flex-row mt-4 md:mt-8 gap-4 md:gap-6">
        <button className="border-[.25px] border-white cursor-pointer flex items-center justify-center gap-2 rounded-sm text-sm md:text-lg w-[185px] h-[60px] hover:bg-[#2d72ff] hover:border-black hover:text-white">
          <FaApple size={45} className="fill-[#dcff00]"/>
          <span className="flex flex-col items-start">
            <span className="text-sm/3">Download on the</span>
            <span className="text-xl md:text-2xl/7">App Store</span> 
          </span>
        </button>

        <button className={`${jakarta.variable} border-[.25px] border-white cursor-pointer flex items-center justify-center gap-2 font-medium rounded-sm text-sm md:text-lg w-[185px] h-[60px] hover:bg-[#2d72ff] hover:border-black hover:text-white`}>
          <FaGooglePlay size={40} className="fill-[#dcff00]"/>
          <span className="flex flex-col items-start">
            <span className="md:text-base/4 uppercase">Get it on</span>
            <span className=" md:text-xl/7">Google Play</span> 
          </span>
        </button>
      </div>
    </div>
  )
}