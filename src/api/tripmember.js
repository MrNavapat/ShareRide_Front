import axios from "../config/axios"

export const ApiJoinTripbyUser=(tripId)=>axios.post('/tripmember',tripId)