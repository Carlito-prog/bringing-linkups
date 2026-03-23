'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Template({ children }) {
  const pathname = usePathname()
  const [direction, setDirection] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const directions = [
      { x: 800, y: 0 },
      { x: -800, y: 0 },
      { x: 0, y: 800 },
      { x: 0, y: -800 }
    ]

    const random = directions[Math.floor(Math.random() * directions.length)]
    setDirection(random)

    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{
          x: direction.x,
          y: direction.y,
          opacity: 0,
          scale: 0.95,
          filter: "blur(6px)"
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)"
        }}
        exit={{
          x: -direction.x,
          y: -direction.y,
          opacity: 0,
          scale: 1.05,
          filter: "blur(6px)"
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1]
        }}
        style={{
          minHeight: "100vh",
          width: "100%",
          position: "relative"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}