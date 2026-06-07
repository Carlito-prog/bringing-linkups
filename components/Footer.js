import Link from 'next/link'
import {InstagramIcon} from '@/components/ui/instagram'
import {LinkedinIcon} from '@/components/ui/linkedin'
import {TwitterIcon} from '@/components/ui/twitter'

export const Footer = () => {
  return (
    <section className="xs:flex-col md:flex justify-between items-center mt-[20px] max-w-[1600px] mx-auto p-4 space-y-1 md:space-y-0">
      <div className='text-sm md:text-base'>© 2024 - 2026 Bringing Link Ups LLC. All Rights Reserved.</div>
      <div className='text-sm md:text-base'><Link href="/terms-of-service" className='text-[#dcff00] hover:underline'>Terms of Service</Link> | <Link href="/privacy-policy" className='text-[#dcff00] hover:underline'>Privacy Policy</Link></div>
      <div className="socials flex gap-2 md:gap-4">
        <a href="https://www.instagram.com/bringinglinkups" target="_blank"><InstagramIcon size={20} className="text-[#dcff00]"/></a>
        <a href="https://x.com/BringingLink" target="_blank"><TwitterIcon size={20} className="text-[#dcff00]"/></a>
        <a href="https://www.linkedin.com/company/bringing-linkups" target="_blank"><LinkedinIcon size={20} className="text-[#dcff00]"/></a>
      </div>
    </section>
  )
}
