import useAuth from "../hooks/user-auth"
import { Navigate } from "react-router-dom"

export default function RedirectifAuthenticate({ children }) {
    const { authUser } = useAuth()
    
  return ( authUser?<Navigate to="/loginDone"/>:children)
    
  
}
