import { db } from "@/config/firebaseConfig"
import { collection, getDocs, type DocumentData } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function GalleryComponent() {

  const [albumData, setAlbumData] = useState<DocumentData[] | []>([])

  useEffect(()=>{
    async function getAlbum(){
      const collectionRef = collection(db, 'albums')

      try {
        
        const data = await getDocs(collectionRef)

        setAlbumData(data.docs)

      } catch (err: any) {
        console.log(err)
      }
    }

    getAlbum()
  },[])

  return (
    <div className={`container px-[10px] grid grid-cols-1 ${albumData.length > 0 ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-[10px]`}>
      {albumData.length > 0 ? albumData.map((album, index) => (
        <Link to={`/gallery/${album.id}`}>
          <div className="album-card h-[350px]" key={index}>
            <div className="album-img-div h-[70%] w-full">
              <img src={album.album[0]} alt="Album Cover" className="w-full h-full rounded-t-[10px]"/>
            </div>
            <div className="text-context-album h-[30%] p-[10px] w-full bg-[#fffff0] rounded-b-[10px] shadow-[10px] shadow-[#121212] flex flex-col justify-between">
              <h2 className="text-[20px] font-bold">{album.title}</h2>
              <div className="upper w-full flex flex-row justify-between items-center text-[14px]">
                <p className="posted "><span>Posted on:</span>&nbsp;<span>{album.created}</span></p>
                <p className="image-added"><span>Total Images:</span>&nbsp;<span>{album.album.length}</span></p>
              </div>
              <div className="tags-album w-full flex flex-row flex-wrap items-center gap-[10px] italic text-[13px]">
                {album.tags.slice(0, 4).map((tag: string) => <span>#{tag} </span>)}
              </div>
            </div>
          </div>
        </Link>
      )): (
        <div className="flex flex-col gap-[20px] justify-center items-center w-full my-[20px]">
          <p className="font-bold">No Gallery Images, be the first to create an Album</p>
          <Link to={'/new-memories'} className=' h-[40px] px-[10px] bg-[#4c6f59] rounded text-[#eee] flex justify-center items-center'>Create Album</Link>
        </div>
      )}
    </div>
  )
}