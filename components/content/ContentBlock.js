
export const ContentBlock = ({isBlue, subtitle, title, content}) => {
  return(
    <section className="flex flex-col max-w-[1600px] mx-auto p-5">
      <h2 className={`uppercase text-lg ${isBlue ? "text-white":"text-[#2d72ff]"} tracking-[.2rem]`}>{subtitle}</h2>
      <h1 className="font-bold font-serif mb-3 py-2 text-5xl md:text-6xl">{title}</h1>
      <p className="text-lg md:text-xl">{content}</p>
    </section>
  )
}