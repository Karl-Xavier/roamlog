import { db } from "@/config/firebaseConfig"
import Head from "@/layout/Head"
import { doc, getDoc, type DocumentData } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function GalleryIdComponent() {

  const { id: idParam } = useParams()
  const navigate = useNavigate()

  const [galleryItem, setGalleryItem] = useState<DocumentData | null>(null)

  useEffect(() => {

    async function getDocument(){
      const idP  = idParam as string

      const filteredDocument = doc(db, 'albums', idP)

      const document = await getDoc(filteredDocument)

      if(document.exists()){
        setGalleryItem({ ...document.data(), id: document.id })
      }else {
        navigate('/home')
      }
    }

    getDocument()

  }, [idParam])

  return (
    <div className="px-[10px] md:px-[5%] lg:px-[10%]">
      <Head title={`${galleryItem?.title} - Gallery Image Collection`} description={galleryItem?.description}/>
      <div className="bg-[#fffff0] w-full h-auto p-[10px]">
        <h2 className="text-[24px] font-bold mb-10px">{galleryItem?.title}</h2>
        <p>{galleryItem?.description}</p>
        <div className="flex w-full flex-row items-center gap-[10px] my-[10px] font-bold text-[13px]">
          {galleryItem?.tags.slice(0, 4).map((tag: string) => <span>#{tag}</span>)}
        </div>
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
          {galleryItem?.album.map((image: string, index: number) => (
            <img src={image} alt={`Travel image ${index+1}`} key={index} loading="lazy"/>
          ))}
        </div>
      </div>
    </div>
  )
}