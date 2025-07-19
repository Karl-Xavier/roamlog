import './css/memorycontent.css'
import React, { useState } from 'react'
import RightSection from "./component/Memory/RightSection";
import LeftSection from "./component/Memory/LeftSection";
import type { ToastInterface } from '../Auth/component/Register/FormBox';
import Toast from '../Toast/Toast';
import { createNewMemory } from '@/service/memoryForm';
import { ClipLoader } from 'react-spinners';

export interface MemoryFormData {
  title: string;
  description: string;
  cover: string | null;
  tags: string[];
  location: string;
  other_images: string[];
  lat: number | null;
  lon: number | null;
}

export default function MemoryContent() {

  const [inputValue, setInputValue] = useState('')
  const [img, setImg] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const [formData, setFormData] = useState<MemoryFormData>({
    title: '',
    description: '',
    cover: null,
    tags: [],
    location: '',
    other_images: [],
    lat: null,
    lon: null,
  })
  const [toast, setToast] = useState<ToastInterface>({
    message: null,
    type: ''
  })
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target

    setFormData(prev => ({ ...prev, [name]: value }))
  }


  // To add tags when the user clicks on enter
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>){
    if(e.key === 'Enter'){
      const newTags = inputValue
       .split(/[ ,]+/)
       .map(tag => tag.trim())
       .filter(tag => tag.length > 0)

        setFormData(prev => ({ ...prev, tags: [...newTags] }))
    }
  }

  // To add tags when the user leaves the input

  function addTagsFromInput(){
    const newTags = inputValue
     .split(/[ ,]+/)
     .map(tag => tag.trim())
     .filter(tag => tag.length > 0)
    
     setFormData(prev => ({ ...prev, tags: [...newTags] }))
  }

  // Multiple Images

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>){
    const files = e.target.files

    if(files){

      const fileArray = Array.from(files)

      Promise.all(fileArray.map(fileToBase64))
       .then((base64Images) => {
        setFormData((prev) => ({
          ...prev, other_images: [...prev.other_images, ...base64Images]
        }))
       })
        .catch(err => console.log('Image Conversion Failed', err))
    }
  }

  function fileToBase64(file: File): Promise<string>{
    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.readAsDataURL(file)

      reader.onload = () => {
        resolve(reader.result as string)
      }

      reader.onerror =(err)=>{
        reject(err)
      }
    })
  }

  function removeImage(index: number){
    setFormData(prev => ({ ...prev, other_images: prev.other_images.filter((_, i) => i !== index) }))
  }

  // cover image

  function addImageBackground(e: React.ChangeEvent<HTMLInputElement>){
    const file = e.target.files?.[0]

    if(file && file.type.startsWith('image/')){

      const maxSize = 600 * 1024

      if(file.size < maxSize){

        const url = URL.createObjectURL(file)
        setImg(url)
        
      }else{
        setImg(null)
        setErr('Image is more than 500kb')
      }
      
    }else {
      setImg(null)
      setErr('Wrong File Format Only Image')
    }
  }

  function convertCoverToBase64(e: React.ChangeEvent<HTMLInputElement>){
    const file = e.target.files?.[0]

    if(file && file.type.startsWith('image/')){

      const maxSize = 600 * 1024

      if(file.size < maxSize){
        const reader = new FileReader()

        reader.onloadend = () => {
          setFormData(prev => ({ ...prev, cover: reader.result as string }))
        }

        reader.readAsDataURL(file)
      }
    }
  }

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>){
    e.preventDefault()

    setLoading(true)
    const data = await createNewMemory(formData)
    setLoading(false)

    if(data?.error){
      setToast({
        message: data?.error,
        type: 'error'
      })
    }else {
      setToast({
        message: data?.message as string,
        type: 'success'
      })
    }

    console.log(formData)
  }

  return (
    <div className="container w-full px-[10px] md:px-[10%]">
      <form className="memory-form w-full grid grid-cols-1 lg:grid-cols-[65%_1fr] h-auto gap-4" onSubmit={handleSubmit}>
       <LeftSection handleChange={handleChange} formData={formData} handleKeyDown={handleKeyDown} inputValue={inputValue} setInputValue={setInputValue} addTagsFromInput={addTagsFromInput} addImageBackground={addImageBackground} convertCoverToBase64={convertCoverToBase64} img={img} err={err} setFormData={setFormData}/>
        <RightSection other_images={formData.other_images} handleImageChange={handleImageChange} removeImage={removeImage}/>
        <button className='w-[220px] h-[44px] uppercase rounded-[10px] bg-[#4c6f59] text-[#eee] cursor-pointer outline-none' disabled={loading}>{loading ? <span className='text-[16px] normal-case flex flex-row justify-center items-center gap-[4px]'>Creating <ClipLoader color='#eee' size={30}/></span> : 'Create'}</button>
      </form>
      {toast.message && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: null, type: '' })}/>}
    </div>
  )
}
