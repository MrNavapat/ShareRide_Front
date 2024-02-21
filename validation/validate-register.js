import Joi from 'joi'

const registerSchema = Joi.object({

    firstName: Joi.string().required().trim()
    .messages({ 'string.empty': 'first name is required' }),
    lastName: Joi.string().required().trim()
    .messages({ 'string.empty': 'last name is required' }),
    userName: Joi.string().required().trim()
    .messages({ 'string.empty': 'username is required' }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]/).required()
     .messages({ 'string.empty': 'password is required', 'string.pattern.base': 'password must be at least only characters or number' }),
    confirmedPassword: Joi.string().valid(Joi.ref('password')).required()
    .messages({ 'string.empty': ' confirm password is required', 'any.only': 'password and confirm password did not match ' }),
    sex: Joi.string().required().messages({ 'string.empty': 'sex is required' }),
    birthday: Joi.date().required().messages({ 'string.empty': 'birthday is required' }),
    nationality: Joi.string().required().messages({ 'string.empty': 'nationality is required' }),
    occupation: Joi.string().required().messages({ 'string.empty': 'occupation is required' }),
    telephone: Joi.string().required().messages({ 'string.empty': 'telephone is required' }),
    userType: Joi.string().required().messages({ 'string.empty': 'userType is required' }),
    drivingLicense: Joi.string().required().messages({ 'string.empty': 'driving license is required' }),
    nationalId: Joi.string().required().messages({ 'string.empty': 'national is required' }),
    carModel:Joi.string().required().messages({ 'string.empty': 'car model is required' }),
    numSeat:Joi.number().required().messages({ 'string.empty': 'num seat is required' }),
    
    

})

export const validateRegister = (input) => {
    const { error } = registerSchema.validate(input, { abortEarly: false });
    let errorObject={}
    const temp = error?.details.map(el => errorObject[el.path[0]]=el.message)  
    return errorObject


}

