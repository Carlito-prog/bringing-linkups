
export const SplitSection = ({ reverse, left, right, mobile }) => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 max-w-[1600px] min-h-[500px] mx-auto md:pt-5">
      <div className={`flex flex-col xs:pb-4 md:px-4 md:pt-4 w-full md:w-1/2 ${mobile?"order-1":"order-2"} ${reverse?"md:order-2":"md:order-1"}`}>{left}</div>
      <div className={`flex flex-col xs:p-4 md:px-4 md:pt-4 w-full md:w-1/2 ${mobile?"order-2":"order-1"} ${reverse?"md:order-1":"md:order-2"}`}>{right}</div>
    </section>
  )
}