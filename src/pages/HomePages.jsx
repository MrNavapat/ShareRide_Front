import React from 'react'
import Button from '../Component/Button'
import Input from '../Component/Input'

    
    function HomePages() {
      return (
          <div>
              
              <Button bg="red" color="white"> Login</Button>

                <Input
              placeholder="Email address or mobile number"
              value="Email address or mobile number"
              name="emailOrMobile"
              />



        </div>
      )
    }
    
    export default HomePages