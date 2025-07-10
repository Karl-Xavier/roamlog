import { Plus, XSquare } from "phosphor-react";

type RightSectionProp = {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  other_images: string[];
  removeImage: (index: number) => void
}

export default function RightSection({ handleImageChange, other_images, removeImage }: RightSectionProp) {
  return (
    <section className="right-section bg-[#fffff0] p-[20px] h-max">
      <h3 className="text-[18px] font-bold">Add Travel Images (minimum of 1 image)</h3>
      <label htmlFor="others" className="mt-[10px] cursor-pointer outline-none flex flex-row justify-evenly uppercase items-center w-[100px] h-[40px] bg-[#4c6f59] rounded-[7px] text-[#eee]">
      <input type="file" name="others" id="others" className="hidden" onChange={handleImageChange} multiple/>Add <Plus weight="bold"/>
      </label>
      <div className="images-section mt-[15px]">
        <p>{`${other_images.length} ${other_images.length > 1 ? 'images' : 'image'} Added`}</p>
        <section className="image-list mt-[20px]">
          <ul className="w-full m-0 p-0">
            {other_images.map((_: any, index) => (
              <li key={index} className="w-[200px] flex flex-row justify-between items-center p-[10px] bg-[#c9d3bb] rounded-[7px] mt-[5px]">
                <span>Image {index+1}</span>
                <span className="hidden">{_}</span>
                <button type="button" className="cursor-pointer outline-none" onClick={() => removeImage(index)}><XSquare size={22} weight="fill" color="indianred"/></button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}