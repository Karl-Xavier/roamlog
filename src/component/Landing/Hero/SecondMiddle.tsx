import { journalSample } from "../../../utils/heroData"

export default function SecondMiddle() {
  return (
    <section className="text-[#121212] my-[40px] w-full">
      <h2 className="uppercase text-[22px] font-bold text-center mb-[40px]">Sample Journal Entries</h2>
      <div className="sample overflow-x-auto whitespace-nowrap md:whitespace-normal md:grid md:overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[10px] w-full">
        {journalSample.map((sample, index: number) => (
          <div key={index} className='h-[400px] inline-block md:block w-[300px] md:w-full mx-2 md:mx-0'>
            <img src={sample.image} alt={`Sample Image ${index+1}`} className="h-[50%] w-full"/>
            <div className="bottom-illus p-2 flex flex-col gap-[6px] bg-[#fffff0] w-full whitespace-normal">
              <h3 className="text-[18px] font-extrabold">{sample.title}</h3>
              <span className="text-[12px] italic font-medium">{sample.date}</span>
              <p className="text-[14px]">{sample.description}</p>
              <span className="text-[14px] italic font-bold">--{sample.author}</span>
              </div>
          </div>
        ))}
      </div>
    </section>
  )
}
