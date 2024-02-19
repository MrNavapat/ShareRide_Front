import axios from "../config/axios"


export const ApicreateTrip=data=>axios.post('/trip',data)

export const ApigetTripbyUser=()=>axios.get('/trip/profile')

export const ApigetTripbyGuest=()=>axios.get('/trip/all')

export const ApiJoinTripbyUser = tripId => axios.post('/tripmember', { tripId } )