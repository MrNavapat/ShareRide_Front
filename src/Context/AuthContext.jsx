import {useState,useEffect} from 'react'
import { createContext, useContext } from 'react'
import { Apiregister, Apilogin,ApifetchMe } from '../api/auth';
import {ApicreateTrip,ApigetTripbyGuest} from '../api/trip'
import { storeToken,getToken } from '../utils/local-storage';


export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null)
  const [guestTripAll, setGuestTripAll] = useState([])
  const [displayTrip, setDisplayTrip] = useState([])
  const [upComingPage, setUpComingPage] = useState(0)

    
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

  const createTrip = async data => {
  const res=await ApicreateTrip(data)
    
}
 
  
  useEffect(() => {
  
    if (getToken()) {
      ApifetchMe()
        .then(res => {
          setAuthUser(res.data.user);
        })
        .catch(err => {
          console.log(err.response?.data.message);
        })
       
      
    }
  async function fetchTrip() {

  
 
      ApigetTripbyGuest().then(res => {
      setGuestTripAll(res.data.tripResult)
      setDisplayTrip([])
      setDisplayTrip(res.data.tripResult.slice(upComingPage*12,upComingPage*12+11))
 
      }).catch(err => console.log(err))
    
  }
  
  fetchTrip()

  },[upComingPage])       
  
    
      return (
        <AuthContext.Provider value={{ register,login ,authUser,createTrip,displayTrip,setUpComingPage,upComingPage,setAuthUser}}  >  {children} </AuthContext.Provider>
      );
    

}
