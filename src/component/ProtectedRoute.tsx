import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import LoadingUI from "./LoadingUI"
import { authContext } from "./Store/authContext" // Zustand store

interface ProtectedRouteProps {
  children: React.ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = authContext((state) => state.user) 
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user === undefined) return

    if (!user) {
      navigate("/login", { replace: true })
    } else {
      setLoading(false)
    }
  }, [user, navigate])

  if (loading) {
    return <LoadingUI />
  }

  return <>{children}</>
}

export const PublicRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = authContext((state) => state.user)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user === undefined) return

    if (user) {
      navigate("/home", { replace: true })
    } else {
      setLoading(false)
    }
  }, [user, navigate])

  if (loading) {
    return <LoadingUI />
  }

  return <>{children}</>
}
