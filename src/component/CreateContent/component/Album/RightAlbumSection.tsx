import { Plus, XSquare } from 'phosphor-react'
import type React from 'react'

interface FormData {
  title: string;
  description: string;
  tags: string[];
  albumImages: string[];
}

type RightAlbumSectionProp = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

export default function RightAlbumSection({ setFormData, formData }: RightAlbumSectionProp) {

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>){
    const files = e.target.files

    if(files){

      const fileArray = Array.from(files)

      Promise.all(fileArray.map(fileToBase64))
       .then((base64Images) => {
        setFormData((prev) => ({
          ...prev, albumImages: [...prev.albumImages, ...base64Images]
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
    setFormData(prev => ({ ...prev, albumImages: prev.albumImages.filter((_, i) => i !== index) }))
  }

  return (
    <section className="w-full album-right-section">
      <h2 className='text-[20px] font-bold'>Add Album Images</h2>
      <input type="file" name="album_images" id="album_images" itemType="image/" multiple className="hidden" onChange={handleImageChange}/>
      <label htmlFor="album_images" className="mt-[10px] cursor-pointer outline-none flex flex-row justify-evenly items-center w-[120px] h-[40px] bg-[#4c6f59] rounded-[7px] text-[#eee]">
        <span>Add Image</span>
        <span><Plus weight="bold"/></span>
      </label>
      <div className="w-full album-images overflow-x-auto overflow-y-hidden whitespace-nowrap my-[15px]">
        {formData.albumImages.map((image, index) => (
          <div className="inline-block w-[200px] h-[200px] border-[1px] border-[#4c6f59] border-dotted mr-[7px] mb-[10px]" key={index}>
            <img src={image} alt={`Image ${index+1}`} className='w-full h-full' />
            <div className='w-full p-2 flex flex-row justify-between items-center'>
              <span>Image {index+1}</span>
              <button onClick={() => removeImage(index)} type="button" className='outline-none cursor-pointer'><XSquare weight='fill' size={24} color='indianred'/></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}