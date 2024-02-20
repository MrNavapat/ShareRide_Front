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
  const [initialLoading,setInitialLoading]=useState(true)

    
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
 
async function fetchTrip() {
  ApigetTripbyGuest().then(res => {
  setGuestTripAll(res.data.tripResult)
  setDisplayTrip(res.data.tripResult)
  console.log("within this fetchTrip")
  console.log(displayTrip)


  }).catch(err => console.log(err))

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

    fetchTrip()
    console.log("UseEffect Loading")
    console.log(displayTrip)


  }, [])       
  
  if (initialLoading) {
    fetchTrip() 
    console.log("within Initial Loading")
    console.log(displayTrip)
    setInitialLoading(false)
    }
 
    
  
    
      return (
        <AuthContext.Provider value={{ register,login ,authUser,createTrip,displayTrip,setUpComingPage,upComingPage,setAuthUser}}  >  {children} </AuthContext.Provider>
      );
    

}
