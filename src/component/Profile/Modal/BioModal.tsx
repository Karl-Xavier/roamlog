import { authContext } from "@/component/Store/authContext";
import { db } from "@/config/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { X } from "phosphor-react";
import { useState } from "react"

type BioModalProp = {
  setShowBioModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BioModal({ setShowBioModal }: BioModalProp) {

  const { userId } = authContext()

  const [bio, setBio] = useState('')

  async function addBioToData(){

    if(bio === ''){
      return
    }

    const id: string = userId as string

    const collectionRef = doc(db, 'users', id)

    const newFields = { bio: bio }

    await updateDoc(collectionRef, newFields)

    setShowBioModal(false)

  }

  return (
    <div className="bio-modal absolute w-full h-screen top-0 flex flex-col justify-start md:justify-center items-center z-[999] bg-[#f8f2e6] px-[20px] md:px-0">
      <div className="bio-form bg-[#fffff0] p-[20px] w-full md:w-[500px] mt-[100px] md:mt-0 flex flex-col justify-start items-center">
        <section className="bio-add-head w-full flex flex-row justify-between items-center mb-[30px]">
          <h2 className="font-bold text-[20px]">Add Bio</h2>
          <button className="cursor-pointer outline-none close-bio-modal" onClick={() => setShowBioModal(false)}><X size={22} weight="bold"/></button>
        </section>
        <textarea name="bio" id="bio-textarea" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio" className="w-full h-[240px] outline-none p-[12px] border-[1px] border-[#4c6f59] rounded placeholder:opacity-[.7] mb-[15px]"></textarea>
        <button className="w-[100px] cursor-pointer outline-none h-[38px] md:h-[40px] rounded bg-[#4c6f59] text-[#eee]" onClick={addBioToData}>Add</button>
      </div>
    </div>
  )
}