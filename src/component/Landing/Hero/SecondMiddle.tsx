import { journalSample } from "../../../utils/heroData"

export default function SecondMiddle() {
  return (
    <section className="text-[#121212] mt-[40px] pb-[20px] w-full">
      <h2 className="uppercase text-[22px] font-bold text-center mb-[40px]">Sample Journal Entries</h2>
      <div className="sample grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[10px] w-full">
        {journalSample.map((sample, index: number) => (
          <div key={index} className={`h-[400px] ${index === journalSample.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
            <img src={sample.image} alt={`Sample Image ${index+1}`} className="h-[60%] w-full"/>
            <div className="bottom-illus p-2 flex flex-col gap-[6px] bg-[#fffff0] w-full">
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
