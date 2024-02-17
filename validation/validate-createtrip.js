import Joi from "joi";
import dayjs from "dayjs"


const customValidatorOneWeek = (value, helpers) => {
    const date = dayjs(value);
    const now = dayjs();
    const oneWeekFromNow = now.clone().add(1, 'week');
  
    if (!date.isValid()) {
      return helpers.error('any.invalid');
    }
  
    if (date.isBefore(oneWeekFromNow)) {
      return helpers.error('date.moreThanOneWeek');
    }
  
    return value;
  };


const tripSchema = Joi.object({
    startLoc: Joi.string().required().trim().messages({ 'string.empty': 'Start Location is required' }),
    endLoc: Joi.string().invalid(Joi.ref('startLoc')).required(),
    startDate: Joi.date().required().custom(customValidatorOneWeek,"custom validate"),
  endDate: Joi.date().min(Joi.ref('startDate')).required(),
  tripMember:Joi.number().required()


})




export const validateTrip = input => {
  
    const { error } = tripSchema.validate(input, { abortEarly: false })
    console.dir(error)
    let errorObject = {}
    const temp = error?.details.map(el => errorObject[el.path[0]]=el.message)  
    return errorObject


}