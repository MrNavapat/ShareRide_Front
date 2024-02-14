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
    sex: Joi.string().required(),
    birthday: Joi.date().required(),
    nationality: Joi.string(),
    occupation: Joi.string(),
    telephone: Joi.string(),
    userType: Joi.string(),
    drivingLicense: Joi.string(),
    nationalId: Joi.string(),
    carModel:Joi.string(),
    numSeat:Joi.number()
    


})

export const validateRegister = (input) => {
    const { error } = registerSchema.validate(input, { abortEarly: false });
    let errorObject={}
    const temp = error?.details.map(el => errorObject[el.path[0]]=el.message)  
    return errorObject


}

