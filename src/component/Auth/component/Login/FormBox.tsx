import { type LoginInterface } from "@/utils/userInterface";
import { Eye, EyeClosed } from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FormBox() {

  const [formData, setFormData] = useState<LoginInterface>({
    email: '',
    password: ''
  })

  const [isVisible, setIsVisible] = useState(false)

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>){
    const { name, value } = e.target

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function togglePassword(){
    setIsVisible(!isVisible)
  }

  function handleSubmitForm(e: React.ChangeEvent<HTMLFormElement>){
    e.preventDefault()
  }

  return (
    <div className="login-form-div bg-[#fffff0] p-[20px] w-full md:w-[500px] flex flex-col justify-start items-center gap-[5px] rounded-[10px]">
      <img src="/brand_name.png" alt="Brand Logo" className="h-[80px] w-[200px]"/>
      <h2 className="text-[24px] font-bold mb-[10px]">Log into Your Account</h2>
      <form className="login-form w-full flex flex-col justify-start items-center" onSubmit={handleSubmitForm}>
        <input type="email" placeholder="Email Address" name="email" onChange={handleChangeInput} value={formData.email}/>
        <div className="password-div w-full md:w-[90%] flex flex-row justify-between items-center gap-[10px]">
          <input type={isVisible ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="" onChange={handleChangeInput} value={formData.password}/>
          <button className="outline-none cursor-pointer" type="button" onClick={togglePassword}>{isVisible ? <Eye size={22}/> : <EyeClosed size={22}/>}</button>
        </div>
        <button className="my-[10px] cursor-pointer outline-none rounded bg-[#4c6f59] text-[#eee] w-[120px] h-[40px]">Login</button>
      </form>
      <p>Don't Have an Account? <Link to={'/register'} className="font-bold">Register</Link></p>
    </div>
  )
}
