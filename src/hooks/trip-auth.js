import { useContext } from 'react'
import { ProfileContext } from '../Context/ProfileContext'

export default function useProfile() {
    
    return useContext(ProfileContext)
}