'use client'

import { useEffect, useState } from 'react'
import data from '../data/teamMembers.json'
import Link from 'next/link'
import Image from 'next/image'
import { GridPattern } from "@/components/ui/grid-pattern"
import { LightRays } from "@/components/ui/light-rays"
import { motion } from 'framer-motion'

export default function Team() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className='flex flex-col justify-center items-center gap-20 max-w-[1600px] h-full md:h-screen mx-auto p-4 mb-5 md:mb-10'>
      <LightRays />
      <GridPattern className="absolute opacity-10 -z-1"/>

      <div className="hero flex flex-col justify-center items-center gap-1 h-[400px] md:h-[650px]">
        <h2 className="font-medium text-xl md:text-3xl tracking-[.1rem] md:tracking-[.2rem] uppercase">Real Ones</h2>
        <h1 className="font-bold font-serif py-3 text-[5rem] md:text-[8rem] leading-[1]">
          The <span className="text-[#2d72ff]">Founders</span>
        </h1>
        <p className="font-extralight text-lg md:text-2xl">
          Built by people who believe connection should feel natural — not forced. <br/>
          We don’t just host events; we design spaces where community actually forms.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-full"
        initial="hidden"
        animate={loaded ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {data.map((team, i) => (
          <motion.div
            key={team.id}
            custom={i}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{
              y: -12,
              scale: 1.03
            }}
            whileTap={{
              scale: 0.97
            }}
            className="relative"
          >
            <Link href={`/founders/${team.slug}`} className="block group">
              <div className="bg-[#1e3266] flex flex-col rounded-xs w-full h-full overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="bg-[#faf4e1] relative w-full h-[400px] overflow-hidden">
                  <Image
                    src={team.thumbnail}
                    alt={team.slug}
                    fill
                    className="object-cover object-[top_center] transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className='flex justify-between p-4'>
                  <h2 className="font-medium text-white text-xl md:text-3xl">
                    {team.firstName} {team.lastName}
                  </h2>
                </div>

              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}