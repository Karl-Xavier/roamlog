import { Link } from 'react-router-dom'
import './css/toplanding.css'
import { ArrowRight } from 'phosphor-react'

export default function TopSection() {
  return (
    <section className="hero-section-intro w-full h-[440px] relative overflow-hidden">
      <div className="text-container w-full h-full relative flex flex-col justify-center items-center text-[#eee] gap-[7px] px-[10px] md:px-0">
        <h2 className='font-bold text-[28px] md:text-[40px] text-center'>Capture Every Mile. <br/> Relieve Every Moment.</h2>
        <p className='text-center mt-[10px]'>Your Travel Journal. Create memories, share stories and journey with everyone.</p>
        <div className="actions flex flex-row justify-between items-center w-[300px] mt-[15px] text-[14px]">
          <Link to={'/register'} >
            <button className=' text-center cursor-pointer outline-none px-2 h-[40px] rounded-sm bg-[#9b5000] text-[#eee] font-bold'>Start your Journal</button>
          </Link>
          <Link to={'/home'}>
            <button className='flex flex-row justify-between items-center gap-2 cursor-pointer outline-none px-2 h-[40px] rounded-sm bg-[#eee] text-[#121212] font-bold'>Explore Others <ArrowRight size={20} weight='bold'/></button>
          </Link>
        </div>
      </div>
    </section>
  )
}