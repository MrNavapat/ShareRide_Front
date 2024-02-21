import Input from './Input'
import { useState } from 'react';
import { validateLogin } from '../../validation/validate-login';
import useAuth from "../hooks/user-auth";
import { toast }  from "react-toastify";

export default function LoginContainer({onClose}) {

    const [input, setInput] = useState({})
    const [error, setError] = useState({})
    const { login } = useAuth();

    
    const handleChange = (e) => {      
        setInput({...input,[e.target.name]:e.target.value})   
    }

  const handleSubmitForm = (e) => {
      alert("Handle Submit Form")
      try {   
            e.preventDefault();
            const errorValidate = validateLogin(input);
            if (errorValidate) {
            setError(errorValidate);
          }
            login(input);
             toast.success("login successfully");
            onClose();
        } catch (err) {
            console.log(err);
        }
    }

    
  return (



  <form onSubmit={handleSubmitForm}>  

        <div className="px-4 py-2">
            <Input
              placeholder="Username"
              value={input?.userName}
              name="userName"
              onChange={handleChange}
              errorMessage={error?.userName}
            > </Input>
                  
            <Input
              placeholder="Password"
              value={input?.password}
              name="password"
              onChange={handleChange}
              errorMessage={error?.password}
              ></Input>
                  
              <div className="flex flex-col items-center py-4">
              <button className="bg-gray-400 px-8 py-2 rounded-full mt-2 font-bold">Login</button>
              </div>

      </div>
      
        </form>
       


  );
}
