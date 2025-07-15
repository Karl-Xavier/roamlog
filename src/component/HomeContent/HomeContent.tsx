import './css/homecontent.css'
import { homeData } from '../../utils/homeData'
import { Link } from 'react-router-dom';
import { authContext } from '../Store/authContext';

type HomeData = {
  cover: string;
  title: string;
  id: number | string;
  description: string;
  profileURL: string;
  author: string;
}

export default function HomeContent() {

  const limit = 75

  const { isAuthenticated } = authContext()

  return (
    <div className='container h-full px-[10px] md:px-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-[20px] font-bold'>
      {homeData.map((data: HomeData, index: number) => (
        <div className="note" key={index}>
          <div className="spiral"></div>
          <div className="content">
            <div className="top-content h-[60%] w-full pl-[5px]">
              <img src={data.cover} alt={data.title} className='h-full w-full'/>
            </div>
            <div className="text-content my-2 p-[10px]">
              <h2 className='memory-title text-[16px]'>{data.title}</h2>
              <p className='text-[14px]'>{data.description.slice(0, limit)}... &nbsp;&nbsp;&nbsp;<Link to={isAuthenticated ? `/memories/${data.id}` : '/login'} className='text-[#9b5000] underline italic'>Read More</Link></p>
            </div>
            <div className="whoowns flex flex-row justify-between gap-3 items-center w-max px-[10px]">
              <img src={data.profileURL} alt={data.author+'profile image'} className='w-[35px] h-[35px] rounded-[50%] object-cover'/>
              <p className='text-[12px]'>Memory by {data.author}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
