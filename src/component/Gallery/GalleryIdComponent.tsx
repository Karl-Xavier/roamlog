import Head from "@/layout/Head"
import { albumData, type AlbumDataProps } from "@/utils/albumData"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function GalleryIdComponent() {

  const { id: idParam } = useParams()

  const [galleryItem, setGalleryItem] = useState<AlbumDataProps | null>(null)

  useEffect(() => {

    const filteredDocument = albumData.find(album => album.id === Number(idParam))

    setGalleryItem(filteredDocument ?? null)

    console.log(idParam)

  }, [idParam])

  return (
    <div className="px-[10px] md:px-[5%] lg:px-[10%]">
      <Head title={`${galleryItem?.title} - Gallery Image Collection`} description={galleryItem?.description}/>
      <div className="bg-[#fffff0] w-full h-auto p-[10px]">
        <h2 className="text-[24px] font-bold mb-10px">{galleryItem?.title}</h2>
        <p>{galleryItem?.description}</p>
        <div className="flex w-full flex-row items-center gap-[10px] my-[10px] font-bold text-[13px]">
          {galleryItem?.tags.slice(0, 4).map(tag => <span>#{tag}</span>)}
        </div>
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
          {galleryItem?.album.map((image, index) => (
            <img src={image} alt={`Travel image ${index+1}`} key={index} loading="lazy"/>
          ))}
        </div>
      </div>
    </div>
  )
}