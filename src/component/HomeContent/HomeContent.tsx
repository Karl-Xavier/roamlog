import './css/homecontent.css'
import { homeData } from '../../utils/homeData'
import { Link } from 'react-router-dom';

type HomeData = {
  imgURL: string;
  title: string;
  id: number | string;
  description: string;
  profileURL: string;
  author: string;
}

export default function HomeContent() {

  const limit = 75

  return (
    <div className='container h-full px-[10px] md:px-[40px] grid grid-cols-1 md:grid-cols-3 gap-6 pb-[20px] font-bold'>
      {homeData.map((data: HomeData, index: number) => (
        <div className="note" key={index}>
          <div className="spiral"></div>
          <div className="content">
            <div className="top-content h-[60%] w-full pl-[5px]">
              <img src={data.imgURL} alt={data.title} className='h-full w-full'/>
            </div>
            <div className="text-content my-2 p-[10px]">
              <h2 className='memory-title text-[18px]'>{data.title}</h2>
              <p>{data.description.slice(0, limit)}... &nbsp;&nbsp;&nbsp;<Link to={`/memories/${data.id}`} className='text-[#9b5000] underline'>Read More</Link></p>
            </div>
            <div className="whoowns flex flex-row justify-between gap-3 items-center w-max px-[10px]">
              <img src={data.profileURL} alt={data.author+'profile image'} className='w-[44px] h-[44px] rounded-[50%] object-cover'/>
              <p>Memory by {data.author}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
