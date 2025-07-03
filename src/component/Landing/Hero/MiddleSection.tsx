import { cardItem } from "../../../utils/heroData"

export default function MiddleSection() {
  return (
    <section className='my-[40px] text-[#121212] flex flex-col items-center w-full h-auto'>
      <h2 className="font-bold text-[22px] text-center uppercase mb-[40px]">What You Can Do</h2>
      <div className="what-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-2 px-[4%] md:px-0">
        {cardItem.map((card, index:number) => {

          const Icon = card.icon

          return (
            <div className="cards w-full flex flex-col justify-between items-center bg-[#fffff0] p-4" key={index}>
              <span><Icon size={30} weight="fill"/></span>
              <div className="text-content w-full">
                <h3 className="font-extrabold text-center">{card.name}</h3>
                <p className="text-center text-[14px] font-[500]">{card.description}</p>
              </div>
            </div>
          )})}
      </div>
    </section>
  )
}