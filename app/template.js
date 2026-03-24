"use client"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Template({ children }) {
  const pathname = usePathname()

  const directions = [
    { x: 800, y: 0 },
    { x: -800, y: 0 },
    { x: 0, y: 800 },
    { x: 0, y: -800 }
  ]

  const random = directions[Math.floor(Math.random() * directions.length)]

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} style={{ overflow: "hidden", width: "100%" }}>
        <motion.div
          initial={{
            x: random.x,
            y: random.y,
            opacity: 0,
            scale: 0.96
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1
          }}
          exit={{
            x: -random.x,
            y: -random.y,
            opacity: 0,
            scale: 1.04
          }}
          transition={{
            duration: 0.7,
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
      </div>
    </AnimatePresence>
  )
}