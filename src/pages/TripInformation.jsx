import { useParams } from "react-router-dom"
import { ApigetTripbyTripId ,ApiupdateTripInfobyTripId} from "../api/trip"
import { ApigetTripMemberbyTripId,ApiupdateTripMemberbyTripIdandMemberId } from "../api/tripmember"
import { useState, useEffect } from "react"
import dayjs from "dayjs"
import Input from "../Component/Input"
import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/user-auth'

export default function TripInformation() {

  const { tripId } = useParams()
  const [inputTripInfo, setInputTripInfo] = useState([])
  const [inputTripMember, setInputTripMember] = useState([])
  const [newTripConfirmation,setNewTripConfirmation]=useState({tripConfirmation:"CONFIRMED"})
  const [errorTripInfo, setErrorTripInfo] = useState([])
  const [forRefresh, setForRefresh] = useState(true)
  
  const { authUser } = useAuth()
  console.log(authUser.id)
  console.log(inputTripInfo.requestorId)
  const checkOwner=+authUser.id==+inputTripInfo.requestorId
  console.log(checkOwner)

  const navigate = useNavigate(); 
  
  const handleChange = (e) => {
    setInputTripInfo({ ...inputTripInfo, [e.target.name]: e.target.value });
  };

  const handleChangeTripMember = (e) => {
       setNewTripConfirmation({...newTripConfirmation, [e.target.name]: e.target.value})
  }

  useEffect(()=>{
    async function fetchTripInformation() {
      
      // alert('fetch trip is working')
      await ApigetTripbyTripId(tripId).then(res => {
        setInputTripInfo(res.data.TripResultbyTripId)
        console.log(inputTripInfo)
      }).catch(err => console.log(err))


      await ApigetTripMemberbyTripId(tripId).then(res => {
        setInputTripMember(res.data.TripMemberResultbyTripId)
        console.log(inputTripMember)
      }).catch(err => console.log(err))
          
    }
    
    fetchTripInformation()

  }, [forRefresh])
  
  const handleUpdateTripInfo = async (e) => {
        
    const updateTripInfoData = { ...inputTripInfo }
    updateTripInfoData.startDate = dayjs(updateTripInfoData.startDate).toISOString()
    updateTripInfoData.endDate = dayjs(updateTripInfoData.endDate).toISOString()
    
    try {
      e.preventDefault();
      // alert("submit trip1");
      await ApiupdateTripInfobyTripId(tripId, updateTripInfoData)
      setForRefresh(prv => !prv)
   
    } catch(err) {
      console.log(err)
    }
    navigate(`/logindone`)


}
  const handleUpdateTripMember = async(id) => {
    // alert('TripMemberId ' + id)
    // alert('TripId '+tripId)
    await ApiupdateTripMemberbyTripIdandMemberId(tripId, +id, newTripConfirmation)
    setForRefresh(prv=>!prv)


  }

  return (
      <>
      
      <div className="grid grid-cols-2 " style={{height: `100vh`}}>
        <form className=' flex flex-col justify-center ' onSubmit={handleUpdateTripInfo}>
          <div className="flex flex-col items-center">
              <div>
                  <img src={inputTripInfo.tripPicture} style={{ width: `500px`, height: `500px` }} />
            </div>
            
            <div className="flex flex-row justify-between " style={{ width: '480px' }}>
                <div >
                    <Input
                      placeholder="Start Location and Date"
                      value={inputTripInfo?.startLoc}
                      name="startLoc"
                      onChange={handleChange}
                      errorMessage={errorTripInfo?.tripMember}
                            />
                      <input className="mt-4" name="startDate" type="date" value={dayjs(inputTripInfo?.startDate).format('YYYY-MM-DD')} onChange={handleChange} />   
                    <Input
                      placeholder="Trip Member"
                      value={inputTripInfo?.tripMember}
                      name="tripMember"
                      onChange={handleChange}
                      errorMessage={errorTripInfo?.tripMember}
                      />

                </div>
            
                <div>
                      <Input
                       placeholder="End Location and Date"
                       value={inputTripInfo?.endLoc}
                       name="endLoc"
                       onChange={handleChange}
                       errorMessage={errorTripInfo?.endLoc}
                       />
                      <input className="mt-4 " name="endDate" type="date" value={dayjs(inputTripInfo?.endDate).format('YYYY-MM-DD')} onChange={handleChange}/>
             
                <div className="flex flex-row mt-8">
                  <select name="tripStatus" value={inputTripInfo?.tripStatus} className='h-9 block  rounded-md'onChange={handleChange}>
              <option >INITIATE</option>
              <option>CONFIRM</option>
              <option >END</option>
              <option >CANCEL</option>
                </select>
                {/* <button className="bg-gray-200 ml-8 px-8 rounded-md text-xl font-bold">Update</button> */}
                </div>
              </div>
            </div>
                     

            </div>  
        </form>

        <div className=' flex flex-col justify-center ' >
          <div className="flex flex-col  items-center ">
            <div style={{ height: `680px` }} className="">
              <table className="table ">
              <caption className="caption-top text-4xl font-extrabold">
              Trip Member list
                </caption>
                
              <thead>
                <tr >
                  <th className="text-xl font-bold h-20 bg-purple-300">First Name</th>
                  <th className="text-xl font-bold h-20  bg-purple-300">Last Name</th>
                  <th className="text-xl font-bold h-20  bg-purple-300">User Name</th>
                  <th className="text-xl font-bold h-20  bg-purple-300">Trip Position</th>
                  <th className="text-xl font-bold h-20  bg-purple-300">Current Status</th>
                  <th className="text-xl font-bold h-20  bg-purple-300">New Status</th>
                  <th className="text-xl font-bold h-20  bg-purple-300"> Action</th>
                 </tr>
              </thead>
          
              <tbody>
                
                {inputTripMember.map(el => (
                  <tr className="hover:bg-gray-300">
                    <td className="text-lg">{el.user.firstName}</td>
                    <td className="text-lg">{el.user.lastName}</td>
                    <td className="text-lg">{el.user.userName}</td>
                    <td className="text-lg">{el.tripPosition}</td>
                    <td className="text-lg">{el.tripConfirmation}</td>
                    <td className="text-lg">
                      <select className="h-10 bg-transparent" name="tripConfirmation" onChange={handleChangeTripMember} >
                              <option >CONFIRMED</option>
                              <option >PENDING</option>
                              <option >REJECTED</option>
                       </select></td>
                    <td>
                      {checkOwner?
                        <button button type="button" className="bg-gray-200 w-32 font-bold rounded-md text-lg" onClick={e => { handleUpdateTripMember(el.tripMemberId) }}>Update </button>
                    :null}

                    </td>

                  </tr>
                ))}
    
            </tbody>
              </table>

              </div>
          </div>
          <div className="flex flex-row justify-end ">
            {checkOwner ?
              <button className="bg-gray-300 mr-2 w-32 py-2 px-2 rounded-lg text-xl font-bold " onClick={handleUpdateTripInfo}>Update</button> :
              null
            }
            
            <button className="bg-gray-300 mr-4 w-60 py-2 px-2 rounded-lg text-xl font-bold " onClick={()=>navigate(`/logindone`)}>Back to your page</button>

          </div>
        </div>

      </div>

 
      
      </>
  )
}

