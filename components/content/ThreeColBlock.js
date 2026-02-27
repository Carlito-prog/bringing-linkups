
export const ThreeColBlock = ({iconOne, titleOne, contentOne, iconTwo, titleTwo, contentTwo, iconThree, titleThree, contentThree}) => {
  return(
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-evenly font-serif gap-10 max-w-[1600px] min-h-[500px] mx-auto p-5 text-center">
      <div className="flex flex-col items-center gap-3">
        {iconOne}
        <h3 className="font-bold font-serif text-4xl">{titleOne}</h3>
        <p className="font-sans text-md md:text-2xl">{contentOne}</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        {iconTwo}
        <h3 className="font-bold font-serif text-4xl">{titleTwo}</h3>
        <p className="font-sans text-md md:text-2xl">{contentTwo}</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        {iconThree}
        <h3 className="font-bold font-serif text-4xl">{titleThree}</h3>
        <p className="font-sans text-md md:text-2xl">{contentThree}</p>
      </div>
    </section>
  )
}