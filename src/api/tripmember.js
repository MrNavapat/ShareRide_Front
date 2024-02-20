import axios from "../config/axios"

export const ApiJoinTripbyUser = (tripId) => axios.post('/tripmember', { tripId })

export const ApiUnJoinTripbyUser = (tripId) => axios.delete(`/tripmember/${tripId}`)


