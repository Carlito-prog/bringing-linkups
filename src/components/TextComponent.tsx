import React from "react"

type textComponentType = {
  title: string,
  text: string
}

export const TextComponent:React.FC<textComponentType> = ( {title, text} ) => {
  return (
    <div className="info">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
