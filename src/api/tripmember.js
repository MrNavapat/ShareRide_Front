import axios from "../config/axios"

export const ApiJoinTripbyUser = (tripId) => axios.post('/tripmember', { tripId })

export const ApiUnJoinTripbyUser = (tripId) => axios.delete(`/tripmember/${tripId}`)

export const ApigetTripMemberbyTripId=(tripId)=>axios.get(`/tripmember/${tripId}`)



export const ApiupdateTripMemberbyTripIdandMemberId=(tripId,tripMemberId,data)=>axios.patch(`/tripmember/${tripId}/${tripMemberId}`,data)
