import { CloudArrowUp, XCircle } from "phosphor-react"
import type React from "react";
import LocationFilter from "./LocationFilter";

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

type LeftSectionProp = { 
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  formData: FormData;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  addTagsFromInput: () => void;
  addImageBackground: (e:React.ChangeEvent<HTMLInputElement>) => void;
  convertCoverToBase64: (e:React.ChangeEvent<HTMLInputElement>) => void;
  img: string | null;
  err: string | null
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
 }

export default function LeftSection({ handleChange, formData, handleKeyDown, inputValue, setInputValue, addTagsFromInput, addImageBackground, convertCoverToBase64, img, err, setFormData }: LeftSectionProp) {
  return (
    <section className="left-section bg-[#fffff0] p-[20px] flex flex-col justify-start gap-2">
    <label htmlFor="title">
      <span className="label-span">Title</span>
      <input onChange={handleChange} value={formData.title} type="text" className="w-full md:w-[65%]" name="title"/>
    </label>
    <label htmlFor="description">
      <span className="label-span">Description</span>
      <textarea name="description" id="description" className="w-full md:w-[80%]" onChange={handleChange} value={formData.description} minLength={250}></textarea>
      <p className="text-[12px] italic w-full md:w-[80%] flex flex-row justify-between items-center"><span>min characters: 250</span> <span>current characters: {formData.description.length}</span></p>
    </label>
    <label htmlFor="tag">
      <span className="label-span">Tags</span>
      <input type="text" className="w-full md:w-[65%]" name="tag" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} onBlur={addTagsFromInput}/>
    </label>
    <label htmlFor="location">
      <span className="label-span">Location</span>
      <LocationFilter formData={formData} setFormData={setFormData}/>
    </label>
    <label htmlFor="cover">
      <span className="label-span">Cover Image</span>
      <input type="file" name="cover" id="cover" className="hidden" onChange={(e) => {
        addImageBackground(e)
        convertCoverToBase64(e)
      }}/>
      <div className={`cover-image cursor-pointer w-full md:w-[70%] border border-dotted ${err && !img ? 'border-[indianred]' : 'border-[#4c6f59]'}`} style={{ backgroundImage: img ? `url(${img})` : '', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        {err === null && !img ? (
          <>
            <CloudArrowUp weight="fill" size={24}/>
            <p>Upload a cover image</p>
          </>
        ): err !== null && !img ? (
          <>
            <XCircle weight="fill" size={30} color="indianred"/>
            <p className="font-bold text-[indianred]">{err}</p>
          </>
        ): null}
      </div>
    </label>
  </section>
  )
}