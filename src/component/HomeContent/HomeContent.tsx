import './css/homecontent.css'
import { Link } from 'react-router-dom';
import { authContext } from '../Store/authContext';
import { useEffect, useState } from 'react';
import { collection, getDocs, type DocumentData } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';

export default function HomeContent() {

  const [homeData, setHomeData] = useState<DocumentData[] | []>([])

  const limit = 75

  const { isAuthenticated, user } = authContext()

  useEffect(() => {
    async function getMemories(){
      const collectionRef = collection(db, 'memories')

      try {
        const memoryData = await getDocs(collectionRef)
        
        setHomeData(memoryData.docs)
      } catch (err: any) {
        console.log(err)
      }
    }

    getMemories()
  }, [])

  return (
    <div className={`container h-full px-[10px] md:px-[40px] grid grid-cols-1 ${homeData.length > 0 ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-6 pb-[20px] font-bold`}>
      {homeData.length > 0 ? homeData.map((data) => (
        <div className="note" key={data.memoryId}>
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
              <img src={user?.profileImage} alt={user?.firstName+'profile image'} className='w-[35px] h-[35px] rounded-[50%] object-cover'/>
              <p className='text-[12px]'>Memory by {user?.firstName} {user?.lastName}</p>
            </div>
          </div>
        </div>
      )): (
        <div className="flex flex-col gap-[20px] justify-center items-center w-full my-[20px]">
            <p className='font-bold'>No Memories, be the first to create a memory</p>
            <Link to={'/new-memories'} className=' h-[40px] px-[10px] bg-[#4c6f59] rounded text-[#eee] flex justify-center items-center'>Create Memory</Link>
          </div>
      )}
    </div>
  )
}
