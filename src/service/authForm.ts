import { auth, db } from "@/config/firebaseConfig";
import type { UserInterface } from "@/utils/userInterface";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore'

export const registerAccount = async (formData: UserInterface) => {

  // Validate Form Data

  const isEmpty = Object.entries(formData).filter(([value]) => value === '').map(([key]) => key)

  if(isEmpty.length > 0){

    if(isEmpty.length === 1){
      return {
        error: `${isEmpty[0]} field is required`
      }
    }else if(isEmpty.length > 1){

      return {
        error: 'All Fields are required'
      }
    }
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const passwordRegex = /^(?!.*(12345678|password|qwerty|letmein|123123)).{8,}$/

  const isEmailValid = (email: string) => emailRegex.test(email)
  const isPasswordValid = (password: string) => passwordRegex.test(password)

  if(!isEmailValid(formData.email) || formData.email === ''){
    return {
      error: 'Please Enter a valid Email Address',
      hint: 'address should contain @gmail, @outlook, etc'
    }
  }

  if(!isPasswordValid(formData.password) || formData.password === ''){
    return {
      error: 'Please Enter a Stronger password',
      hint: '8 characters or more with a mixture of Uppercase and lowercase letters, numbers and special characters'
    }
  }

  if(formData.profileImage === null){
    return {
      error: 'Profile Picture is required'
    }
  }

  try {

    const { email, password } = formData

    await createUserWithEmailAndPassword(auth, email, password)

    const user = auth.currentUser

    if(user) {
      await setDoc(doc(db, 'users', user.uid), formData)
    }

    return { message: 'Account Created' }
    
  } catch (err: any) {

    console.log(err.code)

    let fireError: string

    switch (err.code){
      case 'auth/email-already-in-use': 
        fireError = 'Email Already Exists';
        break;
      case 'auth/network-request-failed':
        fireError = 'Network Error';
        break;
      default:
        fireError = 'Something Went Wrong'
      
    }

    return {
      error: fireError
    }

    // throw new Error(err)
  }

}