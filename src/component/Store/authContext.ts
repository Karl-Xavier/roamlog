import { create } from "zustand";
import { type User, onAuthStateChanged } from 'firebase/auth'
import { auth } from "@/config/firebaseConfig";

type AuthStore = {
  user: null | User;
  isAuthenticated: boolean;
  checkAuth: () => void;
}

export const authContext = create<AuthStore>((set) => {
  const authInstance = auth

  const initialSState: AuthStore = {
    isAuthenticated: !!authInstance.currentUser,
    user: authInstance.currentUser,
    checkAuth: () => {
      onAuthStateChanged(authInstance, (user) => {
        if(user) {
          set({ isAuthenticated: true, user })
        }else {
          set({ isAuthenticated: false, user: null })
        }
      })
    }
  }

  initialSState.checkAuth()

  return initialSState
})