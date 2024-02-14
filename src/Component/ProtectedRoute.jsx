import { Children } from "react";
import useAuth from "../hooks/user-auth";
import { Navigate } from "react-router-dom";


export default function ProtectedRoute({children}) {
    const { authUser } = useAuth()
    
    return authUser?children:<Navigate to ="/home"/>


}