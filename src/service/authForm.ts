import { auth, db } from "@/config/firebaseConfig";
import type { LoginInterface, UserInterface } from "@/utils/userInterface";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore'

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const passwordRegex = /^(?!.*(12345678|password|qwerty|letmein|123123)).{8,}$/

  const isEmailValid = (email: string) => emailRegex.test(email)
  const isPasswordValid = (password: string) => passwordRegex.test(password)

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

export const loginWithFirebase = async(formData: LoginInterface) => {

  // Validate form 

  if(formData.email === ''){
    return {
      error: 'Email is required',
    }
  }

  if(formData.password === ''){
    return {
      error: 'Password is required',
    }
  }

  try {
    
    const { email, password } = formData

    await signInWithEmailAndPassword(auth, email, password)

    return { message: 'Login Successful' }

  } catch (err: any) {

    let fireError: string

    switch(err.code){
      case 'auth/user-not-found':
        fireError = 'No user Found'
        break;
      case 'auth/wrong-password':
        fireError = 'Incorrect Password'
        break;
      case 'auth/network-request-failed':
        fireError = 'Network Error';
        break;
      default:
        fireError = 'Something went wrong'
    }
    
    return {
      error: fireError
    }
  }
}