import Joi from "joi";


const tripSchema = Joi.object({
    startLoc: Joi.string().required().trim().messages({ 'string.empty': 'Start Location is required' }),
    endLoc: Joi.string().invalid(Joi.ref('startLoc')).required(),
    startDate: Joi.date().required().min(),
    endDate:Joi.date().min(Joi.ref('startDate')).required()

})




export const validateTrip = input => {
    console.log(input)
    const { error } = tripSchema.validate(input, { abortEarly: false })
    console.dir(error)
    let errorObject = {}
    const temp = error?.details.map(el => errorObject[el.path[0]]=el.message)  
    return errorObject


}