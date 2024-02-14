import {useState,useEffect} from 'react'
import { createContext, useContext } from 'react'
import { Apiregister,Apilogin } from '../api/auth';
import { storeToken } from '../utils/local-storage';


export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null)
    
  const register = async user => {
       
    const res = await Apiregister(user)
    console.log("Response Object")
    console.log(res)
    setAuthUser(res.data.newUser);
    storeToken(res.data.accessToken);

  };
  
  const login = async user => {
  console.log(user)
  const res = await Apilogin(user)
  console.log("Response Object")
  console.log(res)
  setAuthUser(res.data.user);
  storeToken(res.data.accessToken);
}


       
    
      return (
        <AuthContext.Provider value={{ register,login ,authUser}}  >  {children} </AuthContext.Provider>
      );
    

}