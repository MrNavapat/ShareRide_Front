import {useState,useEffect} from 'react'
import { createContext, useContext } from 'react'


export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {


    
return (
    <ProfileContext.Provider value={{}}  >  {children} </ProfileContext.Provider>
  );

    

}