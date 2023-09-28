import React from "react"

type ImageComponentType = {
  alt: string,
  url: string
}

export const ImageComponent:React.FC<ImageComponentType> = ({alt, url}) => {
  return (
    <div className="image">
      <img src={url} alt={alt} width="100%" height="auto"/>
    </div>
  )
}