import HeroSection from '../components/home/HeroSection.jsx'
import ImpactStats from '../components/home/ImpactStats.jsx'
import FocusAreas from '../components/home/FocusAreas.jsx'
import LatestEvents from '../components/home/LatestEvents.jsx'
import VideoSection from '../components/home/VideoSection.jsx'
import GetInvolved from '../components/home/GetInvolved.jsx'
import FinalCTA from '../components/home/FinalCTA.jsx'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <FocusAreas />
    
      <LatestEvents />
     
      <VideoSection />
        <FinalCTA />
      <GetInvolved />
    
    </>
  )
}
