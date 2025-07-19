import type { AlbumFormData } from "@/component/CreateContent/AlbumContent"
import type { MemoryFormData } from "@/component/CreateContent/MemoryContent"
import { auth, db } from "@/config/firebaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { v4 as uuid } from 'uuid'

const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1
const day = now.getDate()
const today = `${year}/${month}/${day}`

export const createNewMemory = async (memoryData: MemoryFormData) => {

  // Validate the form

  if(memoryData.title === ''){
    return {
      error: 'Title Field is required'
    }
  }else if(memoryData.tags.length < 1){
    return {
      error: 'Add at least one tag'
    }
  }else if(memoryData.other_images.length < 1) {
    return {
      error: 'Add at least one image'
    }
  }else if(!memoryData.cover){
    return {
      error: 'Add a cover image'
    }
  }else if(memoryData.description.length < 500 || memoryData.description === ''){
    return {
      error: 'Description should be greater than 500 characters'
    }
  }else if(memoryData.location === ''){
    return {
      error: 'Location is required'
    }
  }

  const collectRef = collection(db, 'memories')

  try {

    await addDoc(collectRef, { ...memoryData, userId: auth.currentUser?.uid, created: today, memoryId: uuid()})

    return { message: 'Memory Created Successfully' }
    
  } catch (err: any) {
    console.log(err)

    throw new Error(err)
  }
}

export const createNewAlbum = async(albumData: AlbumFormData) => {

  // Validate the form

  if(albumData.title === ''){
    return {
      error: 'Title is required'
    }
  }else if(albumData.description === ''){
    return {
      error: 'Description is required'
    }
  }else if(albumData.tags.length < 1){
    return {
      error: 'Add at least 1 tag'
    }
  }else if(albumData.albumImages.length < 4){
    return {
      error: 'Add at least 4 Images'
    }
  }

  try {
    
    const collectRef = collection(db, 'albums')

    await addDoc(collectRef, { ...albumData, userId: auth.currentUser?.uid, created: today, albumId: uuid() })

    return { message: 'Album Created' }

  } catch (err: any) {
    // throw new Error(err)
  }
}