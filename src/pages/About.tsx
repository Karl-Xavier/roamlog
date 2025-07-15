import { CompassIcon } from "lucide-react";
import { AirplaneTakeoff, Globe } from "phosphor-react";

export default function About() {
  return (
    <div className="container px-[10px] md:px-[5%] lg:px-[10%]">
      <h2 className="font-bold text-[24px]">About Us</h2>
      <div className="description-about">
        <h3>Welcome to Roamlog - Where every Journey becomes a story.</h3>
        <p>At Roamlog, we believe that traveling is more than just visiting places - it's about capturing the <span className="italic">moments, </span><span className="italic">feelings</span> and <span className="italic">lessons </span>that come along the way. This is your space to document adventures, share memories, and inspire others to explore the world.</p><br/>
        <p>Whether uou are backpacking across the continents, road-tripping through hidden gems, or discovering beauty in your city, this platform gives you a digital notebook to preserve your journey.</p><br/>
        <div className="why-created">
          <h2 className="font-bold text-[24px] flex flex-row items-center gap-[10px]"><AirplaneTakeoff size={24} weight="fill"/>Why We Created This</h2>
          <p>We started this project with a simple goal: To make travel journaling easy, beautiful, and meaningful - for everyone.</p><br/>
          <p>In a fast paced world, memories can blur over time. That's why we built a place to:</p><br/>
          <ul className="list-disc pl-[30px]">
            <li>Write freely about your travels</li>
            <li>Add photos, maps, and tags to organize your trips</li>
            <li>Revisit past experience anytime, anywhere</li>
          </ul>
        </div><br/>
        <div className="who-for">
          <h2 className="font-bold text-[24px] flex flex-row items-center gap-[10px]"><CompassIcon fontWeight={'bold'}/> Who This Is For</h2>
          <ul className="list-disc pl-[30px]">
            <li>Curious Explorers</li>
            <li>First-time Travelers</li>
            <li>Experienced Nomads</li>
            <li>Anyone who loves stories and adventure</li>
          </ul>
          <p>You don't need to be a writer - just bring your authentic voice.</p>
        </div><br/>
        <div className="mission">
          <h2 className="font-bold text-[24px] flex flex-row items-center gap-[10px]"><Globe size={24} weight="fill"/> Our Mission</h2>
          <p>To Connect people through stories of discovery and wanderlust. To CelebrateCultures, people, and the joy of finding yourself getting lost.</p>
        </div>
      </div>
    </div>
  )
}
