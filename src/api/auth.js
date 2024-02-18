import axios from "../config/axios"

export const Apiregister = user => axios.post('/auth/register', user)
export const Apilogin = user => axios.post('/auth/login', user)


export const ApifetchMe = () => axios.get('/auth/me');