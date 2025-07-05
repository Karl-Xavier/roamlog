import { Plus } from "phosphor-react";
import './css/memorycontent.css'

export default function MemoryContent() {
  return (
    <div className="container w-full px-[10px] md:px-[10%]">
      <form className="memory-form w-full grid grid-cols-1 md:grid-cols-[65%_1fr] h-auto gap-4" onSubmit={(e) => e.preventDefault()}>
        <section className="left-section bg-[#fffff0] p-[20px] flex flex-col justify-start gap-2">
          <label htmlFor="title">
            <span className="label-span">Title</span>
            <input type="text" className="w-full md:w-[65%]" name="title"/>
          </label>
          <label htmlFor="description">
            <span className="label-span">Description</span>
            <textarea name="description" id="description" className="w-full md:w-[80%]"></textarea>
            <span className="text-[12px] italic">min characters: 250</span>
          </label>
          <label htmlFor="tag">
            <span className="label-span">Tags</span>
            <input type="text" className="w-full md:w-[65%]" name="tag"/>
          </label>
          <label htmlFor="location">
            <span className="label-span">Location</span>
            <input type="text" className="w-full md:w-[65%]"/>
          </label>
          <label htmlFor="cover">
            <span className="label-span">Cover Image</span>
            <input type="file" name="cover" id="cover" className="hidden"/>
            <div className="cover-image cursor-pointer">
              Cover Image
            </div>
          </label>
        </section>
        <section className="right-section bg-[#fffff0] p-[20px]">
          <h3>Add Travel Images (minimum of 1 image)</h3>
          <input type="file" name="others" id="others" className="hidden" />
          <label htmlFor="others" className="w-max">
            <button className="cursor-pointer outline-none" type="button">Add <Plus/></button>
          </label>
        </section>
        <button>Create</button>
      </form>
    </div>
  )
}
