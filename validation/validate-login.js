import Joi from 'joi'



const loginSchema = Joi.object({
    userName: Joi.string().required().trim()
    .messages({ 'string.empty': 'username is required' }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]/).required()
    .messages({ 'string.empty': 'password is required' } )
  
})

export const validateLogin = (input) => {
    const { error } = loginSchema.validate(input, { abortEarly: false });
    console.log(error)
    alert("validate login")
    let errorObject={}
    const temp = error?.details.map(el => errorObject[el.path[0]]=el.message)  
    return errorObject


}

