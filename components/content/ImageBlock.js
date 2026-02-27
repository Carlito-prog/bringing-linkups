import Image from 'next/image'

export const ImageBlock = ({url, title}) => {
  return(
    <section className="overflow-hidden relative w-full h-[300px] md:min-h-[500px]">
      <Image src={url} alt={title} fill sizes="100%" className='object-cover object-top'/>
    </section>
  )
}