import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePages from '../src/pages/HomePages'
import ProfilePages from '../src/pages/ProfilePages'
import ProtectedRoute from '../src/Component/ProtectedRoute'
import RedirectifAuthenticate from '../src/Component/RedirectifAuthenticate'
import UserTrip from '../src/Component/UserTrip'
import TripInformation from '../src/pages/TripInformation'
import ProfileContextProvider from '../src/Context/ProfileContext'
import ProfileLayout from '../src/pages/ProfileLayout'


const router = createBrowserRouter([
    
    {
        path:'/',
        element: (

        <RedirectifAuthenticate>
            <ProfileContextProvider>
            <HomePages />
            </ProfileContextProvider>
        </RedirectifAuthenticate>
        )
            
    },
    {
        path: '/logindone',
        element: (
        <ProtectedRoute>
            <ProfileContextProvider>
                <ProfileLayout />
            </ProfileContextProvider>
        </ProtectedRoute>
        )
      },

      {
        path: '/tripinformation/:tripId',
        element: (
            <ProtectedRoute>
                    <TripInformation />
            </ProtectedRoute>
        )
      },

])

export default function Router() {
    
return <RouterProvider router={router}/>

}

