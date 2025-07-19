import type React from 'react'

interface FormData {
  title: string;
  description: string;
  tags: string[];
  albumImages: string[];
}

type LeftAlbumSectionProp = {
  formData: FormData;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

export default function LeftAlbumSection({ setFormData, formData, inputValue, setInputValue }: LeftAlbumSectionProp) {

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const { name, value } = e.target

    setFormData(prev => ({ ...prev, [name]: value }))
  }

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

  return (
    <section className="w-full album-left-section flex flex-col justify-start gap-2">
      <label htmlFor="title">
        <span className="label-span">Title</span>
        <input type="text" className="w-full md:w-[65%]" name="title" onChange={handleInputChange} value={formData.title}/>
      </label>
      <label htmlFor="description">
        <span className="label-span">Description</span>
        <textarea name="description" id="description" className="w-full md:w-[80%]" onChange={handleInputChange} value={formData.description} maxLength={250}></textarea>
        <p className="text-[12px] italic w-full md:w-[80%] flex flex-row justify-between items-center"><span>max characters: 250</span><span>current characters: {formData.description.length}</span></p>
      </label>
      <label htmlFor="tag" className='mb-[20px]'>
        <span className="label-span">Tags</span>
        <input type="text" className="w-full md:w-[65%]" name="tag" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} onBlur={addTagsFromInput}/>
      </label>
    </section>
  )
}
