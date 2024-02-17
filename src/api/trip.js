import axios from "../config/axios"


export const ApicreateTrip=data=>axios.post('/trip',data)

export const ApigetTrip=()=>axios.get('/trip/profile')
