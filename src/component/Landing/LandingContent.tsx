import LastSection from "./Hero/LastSection";
import MiddleSection from "./Hero/MiddleSection";
import SecondMiddle from "./Hero/SecondMiddle";
import TopSection from "./Hero/TopSection";
import './index.css'

export default function LandingContent() {
  return (
    <div className='container landing px-[2%] md:px-[7%] lg:px-[10%]'>
      <TopSection/>
      <MiddleSection/>
      <SecondMiddle/>
      <LastSection/>
    </div>
  )
}