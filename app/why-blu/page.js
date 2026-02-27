import {SplitSection} from '../../components/layout/SplitSection'
import {ContentBlock} from '../../components/content/ContentBlock'
import {ImageBlock} from '../../components/content/ImageBlock'

export default function WhyBlu(){
  return(
    <div>
      <header className="hero bg-[url(/images/map-lines.svg)] bg-no-repeat bg-cover flex flex-col justify-center items-center gap-1 min-h-[500px] md:min-h-[650px] relative text-center">
        <h2 className="font-medium text-xl md:text-3xl tracking-[.1rem] md:tracking-[.2rem] uppercase">We Don't Do Ordinary</h2>
        <h1 className="font-bold font-serif pb-3 text-[6rem] md:text-[8rem] leading-[1] text-center">
          Why <span className="text-[#2d72ff] text-center">BLU</span><span className='font-sans'>?</span>
        </h1>
        <p className="font-extralight text-lg md:text-2xl">BLU is designed to support real connection by prioritizing <br/> <span className='font-semibold'>people</span>, <span className='font-semibold'>presence</span>, and <span className='font-semibold'>purpose</span>.</p>
      </header>
      <div>
        <section className="bg-[#2d72ff] bg-[url(/images/blu-text-pattern.svg)] bg-cover">
          <SplitSection reverse={false} mobile={true} left={<ContentBlock isBlue={true} subtitle="Live Events" title="Find What’s Happening" content="Discover trending rooms and experiences happening around you."/>} right={<ImageBlock url="/images/live-events.png" title="live events"/>}/>
        </section>
    
        <SplitSection reverse={true} mobile={true} left={<ContentBlock isBlue={false} subtitle="Filter & Search" title="Search with Intention" content="Filter by date, location, or interest to find your people faster."/>} right={<ImageBlock url="/images/search-filter.png" title="search and filter"/>}/>

        <section className="bg-[#2d72ff] bg-[url(/images/blu-text-pattern.svg)] bg-cover">
          <SplitSection reverse={false} mobile={true} left={<ContentBlock isBlue={true} subtitle="Mapped Events" title="Happening Near You" content="View events on the map and connect locally in real time."/>} right={<ImageBlock url="/images/near-you.png" title="happening near you"/>}/>
        </section>

        <SplitSection reverse={true} mobile={true} left={<ContentBlock isBlue={false} subtitle="Room Preview" title="Know Before You Join" content="Preview room details, vibe & activity before committing."/>} right={<ImageBlock url="/images/know-before.png" title="know before you join"/>}/>

        <section className="bg-[#2d72ff] bg-[url(/images/blu-text-pattern.svg)] bg-cover">
          <SplitSection reverse={false} mobile={true} left={<ContentBlock isBlue={true} subtitle="Real-Time Updates" title="Live Feed" content="Scroll photos, clips, and real moments from active rooms."/>} right={<ImageBlock url="/images/live-feed.png" title="live feed"/>}/>
        </section>
      </div>
    </div>
  )
} 
