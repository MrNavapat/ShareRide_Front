import axios from "../config/axios"

export const Apiregister = user => axios.post('/auth/register', user)
export const Apilogin = user => axios.post('/auth/login', user)

export const ApicreateTrip=data=>axios.post('/trip',data)


