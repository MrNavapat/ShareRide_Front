import { useParams } from "react-router-dom"
import { ApigetTripbyTripId } from "../api/trip"
import { ApigetTripMemberbyTripId } from "../api/tripmember"
import { useState, useEffect } from "react"
import dayjs from "dayjs"
import Input from "../Component/Input"

export default function TripInformation() {

  const { tripId } = useParams()
  const [inputTripInfo, setInputTripInfo] = useState([])
  const [inputTripMember, setInputTripMember] = useState([])
  const [errorTripInfo,setErrorTripInfo]=useState([])
  
  const handleChange = (e) => {
    setInputTripInfo({ ...inputTripInfo, [e.target.name]: e.target.value });
  };


  useEffect(()=>{
    async function fetchTripInformation() {
      
         
      ApigetTripbyTripId(tripId).then(res => {
        setInputTripInfo(res.data.TripResultbyTripId)
      }).catch(err => console.log(err))


      ApigetTripMemberbyTripId(tripId).then(res => {
        setInputTripMember(res.data.TripMemberResultbyTripId)
        console.log(inputTripMember)
      }).catch(err => console.log(err))
          
    }
    
    fetchTripInformation()

  }, [])
  
  const handleUpdateTripInfo = (e) => {
          e.preventDefault();
           alert('Update is ongoing')

  }   
  
  const handleUpdateTripMember = (id) => {
    alert('TripMemberId '+id)

  }

  return (
      <>
      
      <div className="grid grid-cols-2 bg-blue-400" style={{height: `100vh`}}>
        <form className='bg-green-300 flex flex-col justify-center ' onSubmit={handleUpdateTripInfo}>
          <div className="flex flex-col items-center bg-blue-300">
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
                      <input className="mt-4" type="date" value={dayjs(inputTripInfo.startDate).format('YYYY-MM-DD')} />   
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
                      <input className="mt-4 "  type="date" value={dayjs(inputTripInfo.endDate).format('YYYY-MM-DD')} />
             
                <div className="flex flex-row mt-8">
            <select name="tripStatus" className='h-9 block  rounded-md'>
              <option selected>INITIATE</option>
              <option>CONFIRM</option>
              <option>END</option>
              <option>CANCEL</option>
                </select>
                <button className="bg-red-200 ml-8 px-8 rounded-md text-xl font-bold">Update</button>
                </div>
              </div>
            </div>
                     

            </div>  
        </form>

        <div className=' flex flex-col justify-center bg-red-400' >
          <div className="flex flex-col bg-green-200 items-center ">
            {/* <div style={{ height: `680px` }} className="bg-blue-400">

              <div className="flex flex-row gap-2 mt-2 font-bold">
                    <div className="w-32 h-10 py-2">First Name</div>
                      <div className="w-32 h-10 py-2">Last Name</div>
                    <div className="w-32 h-10 py-2">Username</div>
                    <div className="w-32 h-10 py-2"> Trip Position</div>
                    <div className="w-32 h-10 py-2">Current  </div>
                    <div className="w-32 h-10 py-2">New Trip Confirmation </div>
              </div>

              {inputTripMember.map(el => (
                <div className="flex flex-row gap-2 mt-2">

                
                  <div className="w-32 h-10 py-2">{el.user.firstName}</div>
                  <div className="w-32 h-10 py-2">{el.user.lastName}</div>
                  <div className="w-32 h-10 py-2">{el.user.userName}</div>
                  <div className="w-32 h-10 py-2"> {el.tripPosition}</div>
                  <div className="w-32 h-10 py-2">{el.tripConfirmation}</div>
                  <div className="w-32 h-10" >
                            <select className="h-10 bg-transparent" >
                              <option value="CONFIRMED">CONFIRMED</option>
                              <option value="PENDING">PENDING</option>
                              <option value="REJECTED">REJECTED</option>
                            </select>
                  </div>
                  <button className="bg-blue-300 w-32 font-bold rounded-md" >Update Trip member</button>
                
                 
                  </div>
                ))} 
                
            </div> */}
            
            <div style={{ height: `680px` }} className="bg-blue-400">
              <table className="table">
              <caption class="caption-top text-4xl font-extrabold">
              Trip Member list
                </caption>
                
              <thead>
                <tr >
                  <th className="text-xl font-bold h-20">First Name</th>
                  <th className="text-xl font-bold h-20">Last Name</th>
                  <th className="text-xl font-bold h-20">User Name</th>
                  <th className="text-xl font-bold h-20">Trip Position</th>
                  <th className="text-xl font-bold h-20">Current Status</th>
                  <th className="text-xl font-bold h-20">New Status</th>
                  <th className="text-xl font-bold h-20"> Action</th>
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
                      <select className="h-10 bg-transparent" >
                              <option value="CONFIRMED">CONFIRMED</option>
                              <option value="PENDING">PENDING</option>
                              <option value="REJECTED">REJECTED</option>
                       </select></td>
                    <td>
                      <button className="bg-blue-300 w-32 font-bold rounded-md text-lg" onClick={e => { handleUpdateTripMember(el.tripMemberId) }}>Update </button>
                    </td>

                  </tr>
                ))}
    
            </tbody>
              </table>

              </div>

          </div>
        
        </div>

      </div>

      
      
      </>
  )
}

