import { create } from "zustand";
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from "@/config/firebaseConfig";
import { doc, getDoc, type DocumentData } from "firebase/firestore";

type AuthStore = {
  user: null | DocumentData;
  isAuthenticated: boolean;
  checkAuth: () => void;
  userId: null | string
}

export const authContext = create<AuthStore>((set) => {
  const authInstance = auth

  const initialSState: AuthStore = {
    isAuthenticated: !!authInstance.currentUser,
    user: null,
    userId: null,
    checkAuth: () => {
      onAuthStateChanged(authInstance, async (user) => {
        if(user) {
          
          const profileInfo = await getDoc(doc(db, 'users', user.uid))

          if(profileInfo.exists()){

            const data = profileInfo.data()

            set({ isAuthenticated: true, user: data, userId: user.uid })
          }else {
            set({ isAuthenticated: false, user: null, userId: null })
          }

        }else {
          set({ isAuthenticated: false, user: null, userId: null })
        }
      })
    }
  }

  initialSState.checkAuth()

  return initialSState
})