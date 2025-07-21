import{ useNavigate } from "react-router-dom";
import { authContext } from "./Store/authContext";
import React, { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

  const { isAuthenticated } = authContext()
  const navigate = useNavigate()

 useEffect(() => {
  if(!isAuthenticated){
    navigate('/login', { replace: true })
  }
 }, [isAuthenticated, navigate])

 if(!isAuthenticated) return null;

  return <>{children}</>
}

export const PublicRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

  const { isAuthenticated } = authContext()
  const navigate = useNavigate()

  useEffect(() => {
    if(isAuthenticated){
      navigate('/home', { replace: true })
    }
  }, [isAuthenticated, navigate])

  return <>{children}</>

}