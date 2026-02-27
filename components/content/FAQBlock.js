"use client"
import faq from '@/app/data/faq.json'
import { useState } from "react"
import { FaChevronDown } from "react-icons/fa";

export const FAQBlock = () => {

	const [expanded,setExpanded]=useState(null)
  const [isActive, setIsActive] = useState("general")

	// const faqCategories = faq.reduce((acc,item)=>{
	// 	acc[item.category]=acc[item.category]||[]
	// 	acc[item.category].push(item)
	// 	return acc
	// },{})

	return (
		<section className="flex flex-col gap-10 max-w-[1600px] mx-auto p-4 md:py-10">
			<div className='text-center'>
				<h2 className={`uppercase text-lg tracking-[.2rem]`}>Frequently Asked Questions</h2>
				<h1 className="font-bold font-serif mb-3 py-2 text-5xl md:text-6xl">Your questions answered here.</h1>
			</div>
      <div className='flex gap-10'>
        <div className='faq-titles bg-[#181a1c]/30 flex flex-col w-1/3 md:w-1/5'>
          <h2 className={`${isActive==="general"?"bg-[#181a1c]":""} capitalize cursor-pointer p-2 text-white md:text-2xl text-center`} onClick={() =>setIsActive("general")}>General</h2>
          <h2 className={`${isActive==="app"?"bg-[#181a1c]":""} capitalize cursor-pointer p-2 text-white md:text-2xl text-center`} onClick={() => setIsActive("app")}>App</h2>
          <h2 className={`${isActive==="safety"?"bg-[#181a1c]":""} capitalize cursor-pointer p-2 text-white md:text-2xl text-center`} onClick={() => setIsActive("safety")}>Safety</h2>
        </div>
        <div className='faq-wrapper cursor-pointer w-2/3 md:w-full min-h-[500px]'>
          {faq.map((faqItem,index)=>(
            <div key={index} className={`${faqItem.category===isActive?"block":"hidden "} faq border-t-[.25] border-[#181a1c] overflow-hidden p-2 cursor-pointer`} onClick={()=>setExpanded(expanded===`${index}`?null:`${index}`)}>
              <div className='flex justify-between items-center py-4'>
                <h3 className={`font-medium md:text-2xl`}>{faqItem.question}</h3>
                <span>{expanded===`${index}`?<FaChevronDown color="white" className="translate-all rotate-180 ease-in-out duration-300"/>:<FaChevronDown color="white" className="translate-all rotate-0 ease-in-out duration-300"/>}</span>
              </div>
              <p className={`${expanded===`${index}`?"h-full py-2":"h-0 opacity-0 overflow-hidden"} transition-all duration-300 text-white md:text-xl`}>{faqItem.answer}</p>
            </div>
          ))}
			  </div>
      </div>
		</section>
	)
}