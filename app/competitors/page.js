import Image from "next/image";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LiaMeetup } from "react-icons/lia";
import { SiEventbrite } from "react-icons/si";
import { DotPattern } from "@/components/ui/dot-pattern"

export default function Competitors() {
  return (
    <section className='max-w-[1600px] mx-auto mb-10 p-4 relative'>
      <DotPattern className="absolute -z-1 opacity-10"/>
      <div className="hero flex flex-col justify-center items-center gap-1 min-h-[450px] md:min-h-[500px] relative text-center">
        <div className="hidden md:block absolute content-[''] bg-[url(/images/competitor_1.png)] bg-left-bottom md:bg-size-[35%] bg-no-repeat scale-x-[-1] h-full w-full z-1"></div>
        <h2 className="font-medium text-xl md:text-3xl tracking-[.1rem] md:tracking-[.2rem] uppercase">Built Different</h2>
        <h1 className="font-bold font-serif pb-3 text-[6rem] md:text-[8rem] leading-[1] text-center">
          <span className="text-[#2d72ff] text-center">Us</span> vs Them
        </h1>
        <p className="font-extralight text-lg md:text-2xl">The difference is intention. Blu is built to surface meaningful local experiences, <br/>while others prioritize quantity over connection.</p>
      </div>
      <div className="mx-auto overflow-x-auto">
        <table className="table-fixed min-w-[720px] w-full">
          <thead>
            <tr>
              <th></th>
              <th className="bg-[#dcff00] pt-2 text-black text-center text-xl">&nbsp;</th>
              <th colSpan={2} className="hide"></th>
            </tr>
            <tr className="bg-[#181a1c]">
              <th className="bg-[#2d72ff]"></th>
              <th className="bg-[#dcff00] m-0 text-black text-center text-xl align-top"><Image src="/images/blu-icon_blk.svg" width={30} height={30} alt="BLU icon" className="inline-block mr-2"/>Bringing Link Ups</th>
              <th className="bg-[#2d72ff] p-4 text-center text-xl"><LiaMeetup size={40} className="inline-block mr-2"/>Meetup</th>
              <th className="bg-[#2d72ff] p-4 text-center text-xl"><SiEventbrite size={30} className="inline-block mr-2"/> Eventbrite</th>
            </tr>
          </thead>
          <tbody className="bg-black/60">
            <tr>
              <th className="p-4 text-left">Map View – Nearby Events</th>
              <td className="td-center bg-[#dcff00] p-4 text-center"><IoCheckmarkSharp color="black" size={35} className="inline-block"/></td>
              <td className="p-4 text-center"></td>
              <td className="p-4 text-center"></td>
            </tr>
            <tr>
              <th className="p-4 text-left">Event Flyer Creation</th>
              <td className="td-center bg-[#dcff00] p-4 text-center"><IoCheckmarkSharp color="black" size={35} className="inline-block"/></td>
              <td className="p-4 text-center"></td>
              <td className="p-4 text-center"></td>
            </tr>
            <tr>
              <th className="p-4 text-left">Join Public Events</th>
              <td className="td-center bg-[#dcff00] p-4 text-center"><IoCheckmarkSharp color="black" size={35} className="inline-block"/></td>
              <td className="p-4 text-center"><IoCheckmarkSharp color="white" size={35} className="inline-block"/></td>
              <td className="p-4 text-center"><IoCheckmarkSharp color="white" size={35} className="inline-block"/></td>
            </tr>
            <tr>
              <th className="p-4 text-left">Follow User Profiles</th>
              <td className="td-center bg-[#dcff00] p-4 text-center"><IoCheckmarkSharp color="black" size={35} className="inline-block"/></td>
              <td className="p-4 text-center"><IoCheckmarkSharp color="white" size={35} className="inline-block"/></td>
              <td className="p-4 text-center"><IoCheckmarkSharp color="white" size={35} className="inline-block"/></td>
            </tr>
            <tr>
              <th className="p-4 text-left">Public & Private Events</th>
              <td className="td-center bg-[#dcff00] p-4 text-center"><IoCheckmarkSharp color="black" size={35} className="inline-block"/></td>
              <td className="p-4 text-center"><IoCheckmarkSharp color="white" size={35} className="inline-block"/></td>
              <td className="p-4 text-center"><IoCheckmarkSharp color="white" size={35} className="inline-block"/></td>
            </tr>
            <tr>
              <th className="p-4 text-left">Mobile-First Platform</th>
              <td className="td-center bg-[#dcff00] p-4 text-center"><IoCheckmarkSharp color="black" size={35} className="inline-block"/></td>
              <td className="p-4 text-center"></td>
              <td className="p-4 text-center"></td>
            </tr>
            <tr>
              <th className="p-4 text-left">Built-in Ticketing</th>
              <td className="td-center bg-[#dcff00] p-4 text-center"><IoCheckmarkSharp color="black" size={35} className="inline-block"/></td>
              <td className="p-4 text-center"></td>
              <td className="p-4 text-center"><IoCheckmarkSharp color="white" size={35} className="inline-block"/></td>
            </tr>
            <tr>
              <th className="p-4 text-left">In-App Crowdfunding</th>
              <td className="td-center bg-[#dcff00] p-4 text-center"><IoCheckmarkSharp color="black" size={35} className="inline-block"/></td>
              <td className="p-4 text-center"></td>
              <td className="p-4 text-center"></td>
            </tr>
            <tr>
              <th className="p-4 text-left">In-App Messaging</th>
              <td className="td-center bg-[#dcff00] p-4 text-center"><IoCheckmarkSharp color="black" size={35} className="inline-block"/></td>
              <td className="p-4 text-center"><IoCheckmarkSharp color="white" size={35} className="inline-block"/></td>
              <td className="p-4 text-center"></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="hide"></td>
              <td className="bg-[#dcff00] p-4">&nbsp;</td>
              <td className="hide"></td>
              <td className="hide"></td>
            </tr>
          </tfoot>
        </table>
      </div> 
    </section>
  )
}
