import Head from "../../layout/Head";
import { homeData, type HomeData } from "../../utils/homeData";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CarouselContainer from "./component/Carousel";

interface MemoriesProp {
  cover: '';
  title: string;
  id: number | string;
  description: string;
  profileURL: string;
  author: string;
  tags: string[];
  other_images: string[]
  lat: number;
  lon: number;
  location: string;
}

export default function MemoriesIdComponent() {

  const { id: idParam } = useParams()
  const [memories, setMemories] = useState<MemoriesProp | null | HomeData>(null)

  useEffect(() => {
    const filteredDocument = homeData.find(home => home.id === Number(idParam))

    if(!filteredDocument) return

    setMemories(filteredDocument)
  }, [idParam])

  return (
    <div className="container px-[20px] md:px-[10%] mb-[40px]">
      <Head title={`${memories?.title} a memory by ${memories?.author}`} description={memories?.description} image={memories?.cover} keywords={memories?.tags}/>
      <section className="w-full h-auto grid grid-cols-1 md:grid-cols-[60%_1fr] gap-[15px]">
        <div className="main-section w-full">
          <div className="tags flex flex-row items-center gap-[10px] mb-[20px]">
            {memories?.tags.map((tag, index) => (
              <span className="cursor-pointer font-bold text-[#057948e1] hover:text-[orangered] underline" key={index}>#{tag.toLowerCase()}</span>
            ))}
          </div>
          <div className="memory-header flex flex-col md:flex-row justify-start md:justify-between md:items-center">
            <h2 className="uppercase text-[22px] font-bold">{memories?.title}</h2>
            <span className="italic font-[12px]">Memory of {memories?.author}</span>
          </div>
          <div className="cover-img-div w-full h-[200px] md:h-[400px] my-[20px]">
            <img src={memories?.cover} alt={`Cover Image for ${memories?.title}`} className="w-full h-full"/>
          </div>
          <div className="description-div">
            <p>{memories?.description}</p>
          </div>
        </div>
        <div className="div map-carousel w-full">
            <div className="map-div w-full">
              <div className="w-full h-[200px] md:h-[300px] bg-[#121212]"></div>
              <span className="location-indictor text-right text-[12px] italic font-bold text-[#121212]">Travel Location</span>
            </div>
            <div className="relative w-full mt-[20px]">
              <h2 className="font-bold">Travel Images</h2>
              <CarouselContainer images={memories?.other_images}/>
            </div>
        </div>
      </section>
    </div>
  )
}
