import type React from "react";
import './css/albumcontent.css'
import { useState } from "react";
import LeftAlbumSection from "./component/Album/LeftAlbumSection";
import RightAlbumSection from "./component/Album/RightAlbumSection";
import type { ToastInterface } from "../Auth/component/Register/FormBox";
import { createNewAlbum } from "@/service/memoryForm";
import Toast from "../Toast/Toast";
import { ClipLoader } from "react-spinners";

export interface AlbumFormData {
  title: string;
  description: string;
  tags: string[];
  albumImages: string[];
}

export default function AlbumContent() {

  const [formData, setFormData] = useState<AlbumFormData>({
    title: '',
    description: '',
    tags: [],
    albumImages: []
  })
  const [inputValue, setInputValue] = useState<string>('')
  const [toast, setToast] = useState<ToastInterface>({
    message: null,
    type: ''
  })
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>){
    e.preventDefault()

    setLoading(true)
    const data = await createNewAlbum(formData)
    setLoading(false)

    if(data?.error){
      setToast({
        message: data.error,
        type: 'error'
      })
    }else {
      setToast({
        message: data?.message as string,
        type: 'success'
      })
    }
  }

  return (
    <div className="w-full px-[10px] md:px-[10%]">
      <form className="bg-[#fffff0] p-[20px] w-full grid grid-cols-1 lg:grid-cols-2" onSubmit={handleSubmit}>
        <LeftAlbumSection formData={formData} inputValue={inputValue} setInputValue={setInputValue} setFormData={setFormData}/>
        <RightAlbumSection formData={formData} setFormData={setFormData}/>
        <button className="w-[220px] h-[44px] uppercase rounded-[10px] bg-[#4c6f59] text-[#eee] cursor-pointer outline-none mt-[10px]"disabled={loading}>{loading ? <span className='text-[16px] normal-case flex flex-row justify-center items-center gap-[4px]'>Creating <ClipLoader color='#eee' size={30}/></span> : 'Create'}</button>
      </form>
      {toast.message && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: null, type: '' })}/>}
    </div>
  )
}