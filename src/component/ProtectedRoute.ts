import{ useLocation, useNavigate } from "react-router-dom";
import { authContext } from "./Store/authContext";
import React, { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = authContext()
  const navigate = useNavigate()
  const location = useLocation()

  const authRoute = ['/register', '/login', '/verify', '/forgot-password']

 useEffect(() => {
  if(!isAuthenticated){
    navigate('/login', { replace: true })
  }else if(isAuthenticated && authRoute.includes(location.pathname)){
    navigate('/home', { replace: true })
  }
 }, [isAuthenticated, navigate])

  return (
    {children}
  )
}

export default ProtectedRoute