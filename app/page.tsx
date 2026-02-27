import {Hero} from '../components/Hero'
import {MarqueeBlock} from "../components/MarqueeBlock"
import {SplitSection} from '../components/layout/SplitSection'
import {ImageBlock} from '../components/content/ImageBlock'
import {ContentBlock} from '../components/content/ContentBlock'
import {ListBlock} from '../components/content/ListBlock'
import {ThreeColBlock} from '../components/content/ThreeColBlock'
import {FAQBlock} from '../components/content/FAQBlock'
import { MapPinIcon } from '@/components/ui/map-pin'
import { PartyPopperIcon } from '@/components/ui/party-popper'
import { GalleryThumbnailsIcon } from '@/components/ui/gallery-thumbnails'
import { CalendarDaysIcon } from '@/components/ui/calendar-days'

export default function Home() {
  return (
    <main className='h-full'>
      <section className="before:content-[''] before:absolute before:h-[800px] before:w-full before:bg-[linear-gradient(to_top,rgba(17,17,17,.7)_0%,rgba(17,17,17,.25)_100%),url('/images/blu-icon-grid.svg')] before:-top-0 before:left-0 before:-z-1">
        <div className="max-w-[1600px] mx-auto flex flex-col justify-center p-4">
          <Hero/>
        </div>
      </section>
      
      <section className="bg-[#171717] hidden md:block">
       <MarqueeBlock />
      </section>

      <section className="bg-[#2d72ff] bg-[url(/images/blu-text-pattern.svg)] bg-cover">
        <SplitSection reverse={true} mobile={false} left={<ListBlock items={[
          {icon:<MapPinIcon size={40} className="text-[#2a4797]"/>, label: "Finding events and coordinating plans often means juggling multiple apps, group chats, and calendars."},{icon:<MapPinIcon size={40} className="text-[#dcff00]"/>, label: "Technology meant to connect us has turned simple plans into friction‑filled tasks."},{icon:<MapPinIcon size={40} className='text-white'/>, label: "Busy schedules and vague plans lead to missed moments and connections that never happen."}]}/>} right={<ContentBlock isBlue={true} subtitle="The Dilemma" title={`Connection is Easy, \n Coordination is Not.`} content="Blu helps surface experiences that align with what you enjoy, so you spend less time searching and more time showing up."/>}/>
      </section>

      <SplitSection reverse={false} mobile={false} left={<ImageBlock url="/images/trend-discover.png" title="live events"/>} right={<ContentBlock isBlue={false} subtitle="The Solution" title={<>One Place to Plan, <br/> Share, and <span className='text-[#dcff00]'>Link Up</span></>} content="BLU creates one place to discover, coordinate, and experience events — built around shared interests so linking up feels natural."/>}/>

      <section className="bg-[#2d72ff] bg-[url(/images/blu-text-pattern.svg)] bg-cover">
        <SplitSection reverse={true} mobile={false} left={<ImageBlock url="/images/community.png" title="community"/>} right={<ContentBlock isBlue={true} subtitle="The Culture" title={<>Community is Everything</>} content={<>BLU is built around shared interests and proximity — not followers, likes, or algorithms.</>}/>}/>
      </section>
      
      <ThreeColBlock iconOne={<PartyPopperIcon size={50} className='text-[#dcff00]'/>} titleOne="Discover & create events" contentOne={`Find what’s happening nearby — or start \n something in seconds.`} iconTwo={<GalleryThumbnailsIcon size={50} className="text-[#dcff00]"/>} titleTwo="Share moments & media" contentTwo={`Posts, clips, chats, and rooms — all connected \n to real plans.`} iconThree={<CalendarDaysIcon size={50} className="text-[#dcff00]"/>} titleThree="Schedule, chat & show up" contentThree={`Schedule events, get reminders, and map \n your way there—all in one place.`}/>

      <section className="bg-[#2d72ff] bg-[url(/images/blu-text-pattern.svg)] bg-cover">
        <FAQBlock />
      </section> 
    </main>
  );
}
