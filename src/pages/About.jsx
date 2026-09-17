

import HeroSection from "../components/about/HeroSection.jsx";
import OurImpact from "../components/about/OurImpact.jsx";
import OurMission from "../components/about/OurMission.jsx";
import OurStory from "../components/about/OurStory.jsx";
import PresidentMessage from "../components/about/PresidentMessage.jsx";
import OurLeader from "../components/about/OurLeader.jsx"
import SecretaryMessage from '../components/about/SecretaryMessage.jsx';
export default function About() {
  return (
    <>
      <HeroSection />
      <OurMission/>
      <OurStory/>
      <OurImpact/>
      <PresidentMessage/>
       <SecretaryMessage />
      <OurLeader/>
    </>
  );
}
