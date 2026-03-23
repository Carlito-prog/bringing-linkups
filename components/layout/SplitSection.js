'use client'
import { motion } from 'framer-motion'

export const SplitSection = ({ reverse, left, right, mobile }) => {

  const leftAnimation = {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  }

  const rightAnimation = {
    initial: { opacity: 0, x: 80 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  }

  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 max-w-[1600px] min-h-[500px] mx-auto md:pt-5">
      
      <motion.div
        {...(reverse ? rightAnimation : leftAnimation)}
        viewport={{ once: true, amount: 0.6 }}
        className={`flex flex-col xs:pb-4 md:px-4 md:pt-4 w-full md:w-1/2 ${mobile?"order-1":"order-2"} ${reverse?"md:order-2":"md:order-1"}`}
      >
        {left}
      </motion.div>

      <motion.div
        {...(reverse ? leftAnimation : rightAnimation)}
        viewport={{ once: true, amount: 0.6 }}
        className={`flex flex-col xs:p-4 md:px-4 md:pt-4 w-full md:w-1/2 ${mobile?"order-2":"order-1"} ${reverse?"md:order-1":"md:order-2"}`}
      >
        {right}
      </motion.div>

    </section>
  )
}