import { CheckCircle, Eye, EyeClosed, Plus } from "phosphor-react";
import React, { useState } from "react";
import { type UserInterface } from "@/utils/userInterface";
import { Link } from "react-router-dom";
import { registerAccount } from "@/service/authForm";
import Toast from "@/component/Toast/Toast";

interface ToastInterface {
  message: null | string;
  type: string;
}

export default function FormBox() {

  const [formData, setFormData] = useState<UserInterface>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    profileImage: null
  })
  const [isVisible, setIsVisible] = useState(false)
  const [toast, setToast] = useState<ToastInterface>({
    message: null,
    type: ''
  })

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>){
    const { name, value } = e.target

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleImageConversion(e: React.ChangeEvent<HTMLInputElement>){
    const file = e.target.files?.[0]

    if(file && file.type.startsWith('image/')){
      
      const maxSize = 500 * 1024

      if(file.size > maxSize) {
        console.log('Max Size Reached')
      }else{

        const reader = new FileReader()

        reader.onloadend = () => {
          setFormData(prev => ({ ...prev, profileImage: reader.result as string }))
        }

        reader.readAsDataURL(file)

      }
    }
  }

  function togglePassword(){
    setIsVisible(!isVisible)
  }

  async function handleSubmitForm(e: React.ChangeEvent<HTMLFormElement>){
    e.preventDefault()
    
    const info = await registerAccount(formData)

    if(info?.error){
      setToast({ message: info.error, type: 'error' })

      console.log(info.error)
    }else {
      setToast({ message: info.message as string, type: 'success' })
    }
  }

  return (
    <div className="form-div bg-[#fffff0] p-[20px] w-full md:w-[500px] flex flex-col justify-start items-center gap-[5px] rounded-[10px]">
      <img src="/brand_name.png" alt="Brand Logo" className="h-[80px] w-[200px]"/>
      <h2 className="text-[24px] font-bold mb-[10px]">Create Your Account</h2>
      <form className="register-form w-full flex flex-col justify-start items-center" onSubmit={handleSubmitForm}>
        <input type="text" placeholder="First Name" name="firstName" onChange={handleChangeInput} value={formData.firstName}/>
        <input type="text" placeholder="Last Name" name="lastName" onChange={handleChangeInput} value={formData.lastName}/>
        <input type="email" placeholder="Email Address" name="email" onChange={handleChangeInput} value={formData.email}/>
        <div className="password-div w-full md:w-[90%] flex flex-row justify-between items-center gap-[10px]">
          <input type={isVisible ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="" onChange={handleChangeInput} value={formData.password}/>
          <button className="outline-none cursor-pointer" type="button" onClick={togglePassword}>{isVisible ? <Eye size={22}/> : <EyeClosed size={22}/>}</button>
        </div>
        <input type="file" name="profile-image" id="profile-image" className="hidden" onChange={handleImageConversion}/>
        <label htmlFor="profile-image" className="mb-[10px] w-full flex flex-col items-center">
          <div className="profile-image-div flex flex-row justify-between items-center w-full md:w-[90%] p-[5px] border border-[#d5d5d5] rounded-[5px] cursor-pointer">
            {formData.profileImage === null ? (
              <>
                <p className="text-[indianred]">Add A Profile Image</p>
                <span className="cursor-pointer"><Plus size={24} weight="bold" color="indianred"/></span>
              </>
            ): (
              <>
                <p>Profile Picture Added</p>
                <span><CheckCircle size={24} weight="fill"/></span>
              </>
            )}
          </div>
        </label>
        <button className="my-[10px] cursor-pointer outline-none rounded bg-[#4c6f59] text-[#eee] w-[120px] h-[40px]">Register</button>
      </form>
      <p>Already Have an Account? <Link to={'/login'} className="font-bold">Login</Link></p>
      {toast.message !== null && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: null, type: '' })}/>}
    </div>
  )
}