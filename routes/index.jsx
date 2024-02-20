import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePages from '../src/pages/HomePages'
import ProfilePages from '../src/pages/ProfilePages'
import ProtectedRoute from '../src/Component/ProtectedRoute'
import RedirectifAuthenticate from '../src/Component/RedirectifAuthenticate'
import UserTrip from '../src/Component/UserTrip'
import TripInformation from '../src/pages/TripInformation'


const router = createBrowserRouter([
    
    {
        path:'/home',
        element: (

        <RedirectifAuthenticate>
        <HomePages />
        </RedirectifAuthenticate>
        )
            
    },
    {
        path: '/logindone',
        element: (
        <ProtectedRoute>
        <ProfilePages />
        </ProtectedRoute>
        )
      },

      {
        path: '/tripinfo',
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

