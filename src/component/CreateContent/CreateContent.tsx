import { Image, NotePencil } from "phosphor-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function CreateContent() {

  const [isSelected, setIsSelected] = useState('')

  function highlightSelected(name: string){
    setIsSelected(name)
  }

  return (
    <div className="w-full h-full relative">
      <section className="upper-section px-[10px] md:px-[60px]">
        {isSelected !== '' && (
          <div className="w-full flex flex-row justify-end">
            <Link to={isSelected === 'memory' ? '/new-memories/memory' : '/new-memories/album'} className="">
              <button className="w-[120px] h-[40px] text-[#eee] bg-[#4c6f59] rounded cursor-pointer outline-none">Continue</button>
            </Link>
          </div>
        )}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 px-[20px] md:px-[7%] lg:px-[15%] mt-[30px] gap-4">
          <div className={`new-memory cursor-pointer bg-[#fffff0] p-[20px] w-full flex flex-col items-center justify-center gap-4 ${isSelected === 'memory' ? 'border-[#4c6f59] border-[1px]' : ''} h-[300px] rounded-[7px]`} onClick={() => highlightSelected('memory')}>
            <NotePencil size={30} weight={isSelected === 'memory' ? "fill" : 'bold'}/>
            <h3 className="text-[20px] font-bold">Start a New Memory</h3>
            <p className="text-center">Write About your experience and pin a map location</p>
          </div>
          <div className={`new-album cursor-pointer bg-[#fffff0] p-[20px] w-full flex flex-col items-center justify-center gap-4 ${isSelected === 'album' ? 'border-[#4c6f59] border-[1px]' : ''} h-[300px] rounded-[7px]`} onClick={() => highlightSelected('album')}>
            <Image size={30} weight={isSelected === 'album' ? "fill" : 'bold'}/>
            <h3 className="text-[20px] font-bold">Create a New Photo Album</h3>
            <p className="text-center">Create a Collection of Images for a travel journey</p>
          </div>
        </div>
      </section>
    </div>
  )
}