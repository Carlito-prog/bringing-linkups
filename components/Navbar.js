import Link from 'next/link'
import {MenuToggle} from '../components/MenuToggle'
import Image from "next/image"

export const Navbar = () => {
  return (
    <section className="flex justify-between items-center">
      <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] z-50">
        <Link href="/"><Image src="/images/blu-icon.svg" fill alt="logo" /></Link>
      </div>
      <MenuToggle />
    </section>
  )
}