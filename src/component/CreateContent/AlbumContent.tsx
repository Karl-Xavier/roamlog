import type React from "react";
import './css/albumcontent.css'
import { useState } from "react";
import LeftAlbumSection from "./component/Album/LeftAlbumSection";
import RightAlbumSection from "./component/Album/RightAlbumSection";

interface FormData {
  title: string;
  description: string;
  tags: string[];
  albumImages: string[];
}

export default function AlbumContent() {

  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    tags: [],
    albumImages: []
  })
  const [inputValue, setInputValue] = useState<string>('')

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>){
    e.preventDefault()
  }

  return (
    <div className="w-full px-[10px] md:px-[10%]">
      <form className="bg-[#fffff0] p-[20px] w-full grid grid-cols-1 md:grid-cols-2" onSubmit={handleSubmit}>
        <LeftAlbumSection formData={formData} inputValue={inputValue} setInputValue={setInputValue} setFormData={setFormData}/>
        <RightAlbumSection formData={formData} setFormData={setFormData}/>
        <button className="w-[220px] h-[44px] uppercase rounded-[10px] bg-[#4c6f59] text-[#eee] cursor-pointer outline-none mt-[10px]">Create</button>
      </form>
    </div>
  )
}