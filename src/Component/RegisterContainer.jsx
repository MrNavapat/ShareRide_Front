import React, { useState } from 'react'
import Input from './Input'
import { validateRegister } from '../../validation/validate-register'


export default function RegisterContainer() {
    const [input, setInput] = useState({})
    const [error,setError]=useState({})
    
    const handleChange = (e) => {      
        setInput({...input,[e.target.name]:e.target.value})   
    }

    const handleSubmitForm = async(e) => {
        e.preventDefault()
        const errorValidate = await validateRegister(input)      
        if (errorValidate)
        { setError(errorValidate) }
        
    }

     
  return (
      <>
        <form onSubmit={handleSubmitForm}>
        <div className="px-4 py-2">
              <div className="flex gap-2 ">
              <Input placeholder="Firstname" value={input?.firstName} name="firstName" onChange={handleChange} errorMessage={error?.firstName} ></Input>
              <Input placeholder="Lastname" value={input?.lastName} name="lastName" onChange={handleChange} errorMessage={error?.lastName} ></Input>
              </div>
              
              <div className="flex gap-2 ">
              <Input placeholder="Nationality" value={input?.nationality} name="nationality" onChange={handleChange} ></Input>
              <Input type="date" placeholder="Birthday" value={input?.birthday} name="birthday" onChange={handleChange} ></Input>
              <Input placeholder="Sex" value={input?.sex} name="sex" onChange={handleChange} ></Input>
              </div>

              <div className="flex gap-2 ">
              <Input placeholder="Occupation" value={input?.occupation} name="occupation" onChange={handleChange} ></Input>
              <Input placeholder="UserType" value={input?.userType} name="userType" onChange={handleChange} ></Input>
              </div>
              
              <Input placeholder="ID" value={input?.id} name="id" onChange={handleChange} ></Input>

              <Input placeholder="Driving license" value={input?.drivingLicense} name="drivingLicense" onChange={handleChange} ></Input>
              <Input placeholder="Mobile number" value={input?.mobileNumber} name="mobileNumber" onChange={handleChange}   ></Input>

              <div className="flex gap-2 ">
              <Input placeholder="Car Model" value={input?.carModel} name="carModel" onChange={handleChange} ></Input>
              <Input placeholder="Num seat " value={input?.numSeat} name="numSeat" onChange={handleChange}  ></Input>
                  </div>
                <Input type placeholder="Username" value={input?.userName} name="userName" onChange={handleChange} errorMessage={error?.userName}  ></Input>

               <Input type="password"placeholder="Password" value={input?.password} name="password" onChange={handleChange} errorMessage={error?.password} ></Input>
              <Input type="password" placeholder="Confirmed password" value={input?.confirmedPassword} name="confirmedPassword" onChange={handleChange} errorMessage={error?.confirmedPassword} ></Input>
            
                <div className="flex flex-col items-center py-4">
              <button className="  bg-red-500 px-8 py-2 rounded-full mt-2">Register</button>
              </div>

              </div>
         </form>
      </>
  )
}

