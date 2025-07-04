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

  const limit = 150

  return (
    <div className='container h-full px-[10px] md:px-[40px] grid grid-cols-1 md:grid-cols-3 gap-6 pb-[20px] font-bold'>
      {homeData.map((data: HomeData, index: number) => (
        <div className="note" key={index}>
          <div className="spiral"></div>
          <div className="content p-2">
            <div className="top-content h-[60%] w-full">
              <img src={data.imgURL} alt={data.title} className='h-full w-full'/>
            </div>
            <div className="text-content my-2">
              <h2 className='memory-title text-[18px]'>{data.title}</h2>
              <p>{data.description.slice(0, limit)}... &nbsp;&nbsp;&nbsp;<Link to={`/memories/${data.id}`} className='text-[orangered] underline'>Read More</Link></p>
            </div>
            <div className="whoowns flex flex-row justify-between items-center w-[50%]">
              <img src={data.profileURL} alt={data.author+'profile image'} className='w-[44px] h-[44px] rounded-[50%] object-cover'/>
              <p>Memory by {data.author}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}