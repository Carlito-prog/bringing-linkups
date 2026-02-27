import data from '../data/teamMembers.json'
import Link from 'next/link'
import Image from 'next/image'
import { GridPattern } from "@/components/ui/grid-pattern"
import { LightRays } from "@/components/ui/light-rays"

export default function Team() {
  return (
    <section className='flex flex-col justify-center items-center gap-20 max-w-[1600px] h-full md:h-screen mx-auto p-4'>
      <LightRays />
      <GridPattern className="absolute opacity-10 -z-1"/>
      <div className="hero flex flex-col justify-center items-center gap-1 h-[400px] md:h-[650px]">
        <h2 className="font-medium text-xl md:text-3xl tracking-[.1rem] md:tracking-[.2rem] uppercase">Real Ones</h2>
        <h1 className="font-bold font-serif py-3 text-[5rem] md:text-[8rem] leading-[1]">
          The <span className="text-[#2d72ff]">Founders</span>
        </h1>
        <p className="font-extralight text-lg md:text-2xl">
          Built by people who believe connection should feel natural — not forced. <br/>We don’t just host events; we design spaces where community actually forms.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-full">
        {data.map(team => (
          <Link key={team.id} href={`/founders/${team.slug}`} className='translate-all ease-in-out duration-300 hover:scale-105'>
            <div  className="bg-[#1e3266] flex flex-col rounded-xs w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
              <div className="bg-[#faf4e1] relative w-full h-full overflow-hidden">
                  <Image
                    src={team.thumbnail}
                    alt={team.slug}
                    fill
                    className="object-cover object-[top_center]"
                  />
              </div>
              <div className='flex justify-between p-4'>
                <div className="info">
                  <h2 className="font-medium text-white text-xl md:text-3xl">{team.firstName} {team.lastName}</h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
