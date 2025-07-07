import { CloudArrowUp, Plus } from "phosphor-react";
import './css/memorycontent.css'
import React, { useState } from 'react'

interface FormData {
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
  const [tags, setTags] = useState<string[]>([])
  const [img, setImg] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    cover: null,
    tags,
    location: '',
    other_images: [],
    lat: null,
    lon: null,
  })

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

      const unique = newTags.filter(tag => !tags.includes(tag))

      if(unique.length > 0){
        setTags(prev => [...prev, ...newTags])
        setInputValue('')
      }
    }
  }

  // To add tags when the user leaves the input

  function addTagsFromInout(){
    const newTags = inputValue
     .split(/[ ,]+/)
     .map(tag => tag.trim())
     .filter(tag => tag.length > 0)
    
     const unique = newTags.filter(tag => !tags.includes(tag))

    if(unique.length > 0){
      setTags(prev => [...prev, ...newTags])
      setInputValue('')
    }
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
      }
      
    }else {
      setImg(null)
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

  return (
    <div className="container w-full px-[10px] md:px-[10%]">
      <form className="memory-form w-full grid grid-cols-1 lg:grid-cols-[65%_1fr] h-auto gap-4" onSubmit={(e) => e.preventDefault()}>
        <section className="left-section bg-[#fffff0] p-[20px] flex flex-col justify-start gap-2">
          <label htmlFor="title">
            <span className="label-span">Title</span>
            <input onChange={handleChange} value={formData.title} type="text" className="w-full md:w-[65%]" name="title"/>
          </label>
          <label htmlFor="description">
            <span className="label-span">Description</span>
            <textarea name="description" id="description" className="w-full md:w-[80%]" onChange={handleChange} value={formData.description}></textarea>
            <span className="text-[12px] italic">min characters: 250</span>
          </label>
          <label htmlFor="tag">
            <span className="label-span">Tags</span>
            <input type="text" className="w-full md:w-[65%]" name="tag" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} onBlur={addTagsFromInout}/>
          </label>
          <label htmlFor="location">
            <span className="label-span">Location</span>
            <input type="text" className="w-full md:w-[65%]"/>
          </label>
          <label htmlFor="cover">
            <span className="label-span">Cover Image</span>
            <input type="file" name="cover" id="cover" className="hidden" onChange={(e) => {
              addImageBackground(e)
              convertCoverToBase64(e)
            }}/>
            <div className="cover-image cursor-pointer w-full md:w-[70%]" style={{ backgroundImage: img ? `url(${img})` : '', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
              {!img && <CloudArrowUp weight="fill" size={24}/>}
              {!img && <p>Upload a cover image</p>}
            </div>
          </label>
        </section>
        <section className="right-section bg-[#fffff0] p-[20px] h-max">
          <h3 className="text-[18px] font-bold">Add Travel Images (minimum of 1 image)</h3>
          <label htmlFor="others" className="mt-[10px] cursor-pointer outline-none flex flex-row justify-evenly uppercase items-center w-[100px] h-[40px] bg-[#4c6f59] rounded-[7px] text-[#eee]">
          <input type="file" name="others" id="others" className="hidden" onChange={handleImageChange} multiple/>Add <Plus weight="bold"/>
          </label>
          <div className="images-section mt-[15px]">
            <p>{`${formData.other_images.length} ${formData.other_images.length > 1 ? 'images' : 'image'} Added`}</p>
          </div>
        </section>
        <button className='w-[220px] h-[44px] uppercase rounded-[10px] bg-[#4c6f59] text-[#eee]'>Create</button>
      </form>
    </div>
  )
}
