'use client'

import { motion } from 'framer-motion'

export default function PageTransition({ children, transition }) {
  return (
    <motion.div
      initial={transition.initial}
      animate={transition.animate}
      exit={transition.exit}
      transition={{
        duration: 1.1,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{ height: "100vh" }}
    >
      {children}
    </motion.div>
  )
}