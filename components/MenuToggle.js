"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {NavItem} from '../components/content/NavItem'

export const MenuToggle = () => {
  
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <header className="relative flex items-center justify-between">
      <nav className="hidden md:flex flex-1 mx-6 overflow-hidden relative z-10">
        <ul className={`flex justify-center gap-8 font-medium text-white md:text-xl transition-transform duration-300 ${open ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}`}>
          <NavItem onClick={() => setOpen(false)} active={pathname === "/why-blu"}><Link href="/why-blu">Why BLU</Link></NavItem>
          <NavItem onClick={() => setOpen(false)} active={pathname === "/founders"}><Link href="/founders">The Founders</Link></NavItem>
          <NavItem onClick={() => setOpen(false)} active={pathname === "/competitors"}><Link href="/competitors">Competitors</Link></NavItem>
          <NavItem onClick={() => setOpen(false)} active={pathname === "/contact"}><Link href="/contact">Contact Us</Link></NavItem>
        </ul>
      </nav>

      <button onClick={() => setOpen(!open)} className={`relative cursor-pointer flex flex-col gap-1 md:gap-2 transition-all z-50`}>
        <span className={`block h-[5px] w-[40px] md:w-[50px] bg-[#dcff00] transition-all duration-300 ${open ? "translate-y-[12px] md:translate-y-[13px] rotate-45" : ""}`}/>
        <span className={`block h-[5px] w-[40px] md:w-[50px] bg-[#dcff00] transition-all duration-300 ${open ? "opacity-0 translate-x-6" : "-translate-x-3"}`}/>
        <span className={`block h-[5px] w-[40px] md:w-[50px] bg-[#dcff00] transition-all duration-300 ${open ? "-translate-y-[6px] md:-translate-y-[13px] -rotate-45" : ""}`}/>
      </button>

      <div onClick={() => setOpen(false)} className={`fixed inset-0 bg-black/75 transition-[transform-opacity] duration-500 ${open ? "opacity-100 pointer-events-auto z-5" : "opacity-0 pointer-events-none"}`}/>

      <aside onClick={() => setOpen(!open)} className={`fixed top-20 right-4 w-[240px] rounded-sm bg-[#2d72ff] shadow-xl transform transition-transform duration-500 ease-in-out md:hidden z-10 ${open ? "translate-x-0" : "translate-x-[120%]"}`}>
        <ul className="text-xl px-6 py-6 space-y-4 text-white">
          <li className="cursor-pointer border-b border-white/20 pb-3 hover:text-[#dcff00]"><Link href="/why-blu">Why BLU</Link></li>
          <li className="cursor-pointer border-b border-white/20 pb-3 hover:text-[#dcff00]"><Link href="/founders">The Founders</Link></li>
          <li className="cursor-pointer border-b border-white/20 pb-3 hover:text-[#dcff00]"><Link href="/competitors">Competitors</Link></li>
          <li className="cursor-pointer pt-2 hover:text-[#dcff00]"><Link href="/contact">Contact Us</Link></li>
        </ul>
      </aside>
    </header>
  )
}