import Image from "next/image"
import data from "../../data/teamMembers.json"
import {notFound} from 'next/navigation'
import { GridPattern } from "@/components/ui/grid-pattern"
import { LightRays } from "@/components/ui/light-rays"
import { TypingAnimation } from "@/components/ui/typing-animation"
import {AtSignIcon} from '@/components/ui/at-sign'

export default async function FounderProfile({params}){

  const {slug} = await params

  const founder = data.find(person => person.slug === slug)

  if(!founder) return notFound()

  return(
    <section className="max-w-[1600px] h-screen mx-auto pt-[100px] px-4 overflow-y-hidden">
      <LightRays />
      <GridPattern className="opacity-8"/>
      <div className="grid md:grid-cols-2 justify-between items-center gap-30 h-full">
        <div className="founder-image hidden md:block md:h-full relative before:content-[''] before:absolute before:inset-[-2%] before:bg-[url(/images/yellow-ring.svg)] before:bg-no-repeat before:bg-contain before:bg-center before:pointer-events-none before:animate-spin before:[animation-duration:40s] before:z-0 before:overflow-hidden after:content-[''] after:absolute after:inset-[-3%] after:bg-[url(/images/blue-ring.svg)] after:bg-no-repeat after:bg-contain after:bg-center after:pointer-events-none after:animate-spin after:[animation-duration:25s] after:[animation-direction:reverse] after:z-0 after:overflow-hidden">
          <Image src={founder.img} fill sizes="100%" alt={founder.slug} className="object-contain relative z-1"/>
        </div>
        <div className="founder-info">
          <h3 className="font-light text-2xl tracking-wider">{founder.title}</h3>
          <h1 className="font-bold font-serif md:leading-[5.5rem] mt-4 mb-6 text-6xl md:text-8xl">
            {founder.firstName} <br/> <TypingAnimation words={[`${founder.lastName}`]} cursorStyle="underscore" typeSpeed="350" className="text-[#2d72ff]"/>
          </h1>
          <p className="text-lg leading-8">{founder.bio}</p>
          <div className="socials flex items-center mt-10 gap-5">
            <a 
              href={`mailto:${founder.email}`} 
              title="Email" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-serif group flex gap-2 items-center text-lg text-white hover:text-[#dcff00] transition-colors"
            >
              {/* Icon changes from blue to lime green on hover */}
              <AtSignIcon 
                size={35} 
                className="text-[#2d72ff] group-hover:text-[#dcff00] transition-colors"
              /> 
              
              {/* Text color is inherited from the <a> tag hover rule */}
              <span>{founder.email}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}