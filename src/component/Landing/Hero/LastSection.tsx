import image from '../../../assets/Travel images/photo-8.jpg'

export default function LastSection() {
  return (
    <section className='w-full mt-[40px] pb-[40px] grid grid-cols-1 lg:grid-cols-2 text-[#121212] font-bold gap-3'>
      <img src={image} alt="Landing_Image_192883" className='w-full' />
      <h2 className='text-[16px] md:text-[22px] lg:text-[26px] italic lg:w-[400px] lg:text-right'>Your Journey is worth remembering - Every step, every sight, every story. Start documenting your adventures today and turn moments into memories that last a lifetime.</h2>
    </section>
  )
}