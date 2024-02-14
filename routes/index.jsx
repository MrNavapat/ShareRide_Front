import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePages from '../src/pages/HomePages'
import ProfilePages from '../src/pages/ProfilePages'
import ProtectedRoute from '../src/Component/ProtectedRoute'
import RedirectifAuthenticate from '../src/Component/RedirectifAuthenticate'
import UserTrip from '../src/Component/UserTrip'


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
      }



])

export default function Router() {
    
return <RouterProvider router={router}/>

}

