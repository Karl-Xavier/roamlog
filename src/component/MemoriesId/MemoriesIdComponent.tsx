import Head from "../../layout/Head";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CarouselContainer from "./component/Carousel";
import MapContain from "./component/MapContainer";
import { doc, getDoc, type DocumentData } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { authContext } from "../Store/authContext";

export default function MemoriesIdComponent() {

  const { id: idParam } = useParams()
  const navigate = useNavigate()
  const { user } = authContext()

  const [memories, setMemories] = useState<DocumentData | null>(null)

  useEffect(() => {

    async function getDocument(){
      const idP  = idParam as string

      const filteredDocument = doc(db, 'memories', idP)

      const document = await getDoc(filteredDocument)

      if(document.exists()){
        setMemories({ ...document.data(), id: document.id })
      }else {
        navigate('/home')
      }
    }

    getDocument()
  }, [idParam])

  return (
    <div className="container px-[20px] md:px-[10%] mb-[40px]">
      <Head title={`${memories?.title} a memory by ${user?.firstName+' '+user?.lastName}`} description={memories?.description} image={memories?.cover} keywords={memories?.tags}/>
      <section className="w-full h-auto grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-[15px]">
        <div className="main-section w-full">
          <div className="tags flex flex-row items-center gap-[10px] mb-[20px]">
            {memories?.tags.map((tag: string, index: number) => (
              <span className="cursor-pointer font-bold text-[#057948e1] hover:text-[orangered] underline" key={index}>#{tag.toLowerCase()}</span>
            ))}
          </div>
          <div className="memory-header flex flex-col md:flex-row justify-start md:justify-between md:items-center">
            <h2 className="uppercase text-[22px] font-bold">{memories?.title}</h2>
            <span className="italic font-[12px]">Memory of {user?.firstName} {user?.lastName}</span>
          </div>
          <div className="cover-img-div w-full h-[200px] md:h-[400px] my-[20px]">
            <img src={memories?.cover} alt={`Cover Image for ${memories?.title}`} className="w-full h-full"/>
          </div>
          <div className="description-div">
            <p>{memories?.description}</p>
          </div>
        </div>
        <div className="div map-carousel w-full">
            <div className="map-div w-full h-[300px]">
              <MapContain lat={memories?.lat} lon={memories?.lon}/>
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
