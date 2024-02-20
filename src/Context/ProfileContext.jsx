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
  const [manageTrip,setManageTrip]=useState([])

    useEffect(()=>{
      async function fetchProfileTrip() {
        alert("effect is running ")
         ApigetTripbyUser().then(res => {
          setConfirmTrip(res.data.confirmTripResult)
           setPendingTrip(res.data.pendingTripResult)
           setUpComingTrip(res.data.upComingTripResult)
           setManageTrip(res.data.manageTripResult)

       
        }).catch(err => console.log(err))
            
      }
      
      fetchProfileTrip()
  
      },[])

 return (
    <ProfileContext.Provider value={{trip,setTrip,confirmTrip,pendingTrip,upComingTrip,manageTrip,setUpComingTrip,setPendingTrip,upComingPage,}}  >  {children} </ProfileContext.Provider>
  );

    

}