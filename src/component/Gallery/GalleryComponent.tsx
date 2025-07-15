import { albumData } from "@/utils/albumData"
import { Link } from "react-router-dom"

export default function GalleryComponent() {
  return (
    <div className="container px-[10px] md:px-[5%] lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
      {albumData.map((album, index) => (
        <Link to={`/gallery/${album.id}`}>
          <div className="album-card h-[350px]" key={index}>
            <div className="album-img-div h-[70%] w-full">
              <img src={album.album[0]} alt="Album Cover" className="w-full h-full rounded-t-[10px]"/>
            </div>
            <div className="text-context-album h-[30%] p-[10px] w-full bg-[#fffff0] rounded-b-[10px] shadow-[10px] shadow-[#121212] flex flex-col justify-between">
              <h2 className="text-[20px] font-bold">{album.title}</h2>
              <div className="upper w-full flex flex-row justify-between items-center text-[14px]">
                <p className="posted "><span>Posted on:</span>&nbsp;<span>24 June 2025</span></p>
                <p className="image-added"><span>Total Images:</span>&nbsp;<span>{album.album.length}</span></p>
              </div>
              <div className="tags-album w-full flex flex-row flex-wrap items-center gap-[10px] italic text-[13px]">
                {album.tags.slice(0, 4).map(tag => <span>#{tag} </span>)}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}