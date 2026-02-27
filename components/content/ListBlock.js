
export const ListBlock = ({items}) => {
  return(
    <section className="flex flex-col max-w-[1600px] mx-auto px-5 md:px-0">
      <ul>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-10 pb-5 md:text-xl"><span className="w-[30px]">{item.icon}</span>{item.label}</li>
        ))}
      </ul>
    </section>
  )
}