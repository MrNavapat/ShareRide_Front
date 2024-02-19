import {useState,useEffect} from 'react'
import { createContext, useContext } from 'react'
import { ApigetTripbyUser } from '../api/trip';      


export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {

  const [trip, setTrip] = useState(null)
  const [ confirmTrip, setConfirmTrip ] = useState([])
  const [pendingTrip, setPendingTrip] = useState([])
  const [upComingTrip,setUpComingTrip]=useState([])
  const [upComingPage, setUpComingPage] = useState(0)

    useEffect(()=>{
      async function fetchProfileTrip() {
        alert("effect is running")
         ApigetTripbyUser().then(res => {
          setConfirmTrip(res.data.confirmTripResult)
           setPendingTrip(res.data.pendingTripResult)
           setUpComingTrip(res.data.upComingTripResult)
       
        }).catch(err => console.log(err))
            
      }
      
      fetchProfileTrip()
  
      },[])

 return (
    <ProfileContext.Provider value={{trip,setTrip,confirmTrip,pendingTrip,upComingTrip,upComingPage}}  >  {children} </ProfileContext.Provider>
  );

    

}