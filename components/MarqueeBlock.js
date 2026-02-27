import Marquee from "react-fast-marquee";
import Image from 'next/image'
import { Highlighter } from "@/components/ui/highlighter"

export const MarqueeBlock = () => {
  return (
    <Marquee gradient gradientColor="#111">
      <div className="flex justify-center items-center gap-40 px-20 w-max h-[75px]">
        <Image src={"/images/icons/business.svg"} width={50} height={50} alt="business"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#E81EB7">Business</Highlighter></p>
        <Image src={"/images/icons/college_life.svg"} width={55} height={55} alt="college life"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#dcff00">College Life</Highlighter></p>
        <Image src={"/images/icons/education.svg"} width={50} height={50} alt="education"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#9D4EDD">Education</Highlighter></p>
        <Image src={"/images/icons/food.svg"} width={45} height={45} alt="food"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#FF5528">Food</Highlighter></p>
        <Image src={"/images/icons/funeral.svg"} width={30} height={30} alt="funeral"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#2D72FF">Funeral</Highlighter></p>
        <Image src={"/images/icons/game_night.svg"} width={50} height={50} alt="game night"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#E81EB7">Game Night</Highlighter></p>
        <Image src={"/images/icons/kickback.svg"} width={65} height={65} alt="kick back"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#dcff00">Kickback</Highlighter></p>
        <Image src={"/images/icons/music.svg"} width={50} height={50} alt="music"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#9D4EDD">Music</Highlighter></p>
        <Image src={"/images/icons/other.svg"} width={45} height={45} alt="other"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#FF5528">Other</Highlighter></p>
        <Image src={"/images/icons/party.svg"} width={50} height={50} alt="party"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#2D72FF">Party</Highlighter></p>
        <Image src={"/images/icons/skateboarding.svg"} width={50} height={50} alt="skateboarding"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#E81EB7">Skateboarding</Highlighter></p>
        <Image src={"/images/icons/social_community.svg"} width={50} height={50} alt="social community"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#FF5528">Social Community</Highlighter></p>
        <Image src={"/images/icons/spiritual.svg"} width={45} height={45} alt="spiritual"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#9D4EDD">Spiritual</Highlighter></p>
        <Image src={"/images/icons/ticket.svg"} width={50} height={50} alt="ticket"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#FF5528">Tickets</Highlighter></p>
        <Image src={"/images/icons/travel.svg"} width={25} height={25} alt="travel"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#2D72FF">Travel</Highlighter></p>
        <Image src={"/images/icons/video_games.svg"} width={40} height={40} alt="video games"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#E81EB7">Video Games</Highlighter></p>
        <Image src={"/images/icons/wedding.svg"} width={50} height={50} alt="wedding"/>
        <p className="md:text-lg"><Highlighter action="underline" color="#FF5528">Wedding</Highlighter></p>
      </div>
    </Marquee>
  )
}
