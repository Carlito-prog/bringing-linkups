"use client"
import { useState } from "react"
import { Highlighter } from "@/components/ui/highlighter"

export const NavItem = ({ children, onClick, active }) => {
  
  const [hovered, setHovered] = useState(false)

  const highlighted = hovered || active

  return (
    <li
      className="cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {highlighted ? (
        <Highlighter action="highlight" color="#2d72ff">
          {children}
        </Highlighter>
      ) : (
        <span>{children}</span>
      )}
    </li>
  )
}