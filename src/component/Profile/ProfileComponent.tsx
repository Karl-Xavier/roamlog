import { Pencil, SignOut, Trash } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs, query, where, type DocumentData } from 'firebase/firestore'
import BioModal from './Modal/BioModal'
import { db } from '@/config/firebaseConfig'
import { authContext } from '../Store/authContext'

export default function ProfileComponent() {

  const { user, userId } = authContext()

  const [memoriesAlbum, setMemoriesAlbum] = useState<DocumentData[] | []>([])
  const [showBioModal, setShowBioModal] = useState(false)

  useEffect(() => {

    async function getUserMemories(){

      const memoryCollection = collection(db, 'memories')
      // const albumCollection = collection(db, 'albums')

      const queries = query(memoryCollection, where('userId', '==', userId))

      try {
        
        const data = await getDocs(queries)

        setMemoriesAlbum(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

      } catch (err: any) {
        console.log(err)
      }

    }

    getUserMemories()

  }, [])

  return (
    <div className={`container ${!showBioModal ? 'px-[20px] md:px-[5%] lg:px-[10%]' : ''}`}>
      <section className="account-info bg-[#fffff0] w-full p-[20px] rounded-[5px] mb-[10px]">
        <h2 className='mb-[20px] text-[16px] md:text-[22px] font-semibold'>Personal Information</h2>
        <div className="img-name-div w-full md:w-[70%] lg:[50%] flex flex-row items-end gap-[12px]">
          <img src={user?.profileImage} alt="Profile Image" className='w-[100px] h-[100px] md:w-[170px] md:h-[170px] rounded-[50%] object-cover'/>
          <div className="name-others w-full">
            <h2 className='text-[17px] md:text-[22px] font-[600] overflow-ellipsis overflow-hidden whitespace-nowrap md:overflow-none md:whitespace-normal w-[200px] md:w-full'>{user?.firstName} {user?.lastName}</h2>
            <p className="email-add text-[13px] italic">{user?.email}</p>
            <div className="buttons-action">
              <button className="logout-button w-[100px] cursor-pointer outline-none flex flex-row items-center gap-[10px] h-[38px] md:h-[40px] rounded bg-[#4c6f59] text-[#eee] justify-center my-[10px]">Logout <SignOut size={20} weight='bold'/></button>
            </div>
          </div>
        </div>
        <div className="bio mt-[20px]">
            <h2 className='mb-[20px] text-[16px] md:text-[22px] font-semibold'>Bio</h2>
            {!user?.bio && <button className="add-bio flex flex-row items-center w-[100px] h-[40px] gap-[10px] bg-[#4c6f59] rounded text-[#eee] justify-center cursor-pointer outline-none" onClick={() => setShowBioModal(true)}>Add Bio <Pencil size={20} weight='bold'/></button>}
            {user?.bio && (
              <p className='text-[14px]'>{user?.bio}</p>
            )}
          </div>
      </section>
      <section className="created-memories bg-[#fffff0] w-full p-[20px] rounded-[5px]">
        <h2 className='mb-[20px] text-[16px] md:text-[22px] font-semibold'>Created memories</h2>
        <div className="memories-albums w-full">
          {memoriesAlbum.length > 0 ? memoriesAlbum.map((memAl, index) => {
            const limit = 150
            return (
              <Link to={`/memories/${memAl.id}`}>
                <div className="memAl-card w-full grid grid-cols-1 md:grid-cols-[35%_1fr] gap-[13px] p-[10px] h-auto bg-[#ececd0f5] mb-[20px] rounded-[7px]" key={index}>
                  <img src={memAl.cover} alt={memAl.title} className='w-full h-[200px]'/>
                  <div className="tit-des w-full h-auto flex flex-col gap-[20px]">
                    <h2 className='font-bold text-[20px]'>{memAl.title}</h2>
                    <p className='text-[14px]'>{memAl.description.slice(0, limit)}...</p>
                    <span className='text-[12px] font-bold italic'>{memAl.created}</span>
                    <div className="action-btn w-full py-[10px]">
                      <button className="delete-button flex flex-row items-center gap-[10px] justify-center text-[#c80404] border-[1px] border-[#c80404] w-[100px] h-[40px] outline-none cursor-pointer rounded">Delete <Trash size={20} weight='bold'/></button>
                    </div>
                  </div>
                </div>
              </Link>
            )
          }) : (
            <div className="flex flex-col gap-[20px] justify-center items-center w-full my-[20px]">
              <p>You have no Memory and Albums</p>
              <Link to={'/new-memories'} className=' h-[40px] px-[10px] bg-[#4c6f59] rounded text-[#eee] flex justify-center items-center'>Create Memory</Link>
            </div>
          )}
        </div>
      </section>
      {showBioModal && <BioModal setShowBioModal={setShowBioModal}/>}
    </div>
  )
}