
import ReactDOM from 'react-dom/client'
import HomePages from "./pages/HomePages"
import AuthContextProvider from './Context/AuthContext'
import Router from '../routes'
import { ToastContainer ,Slide} from 'react-toastify'
import TestPages from './pages/TestPages'


function App() {


  return (
    <>
      {/* <TestPages/> */}
      {/* <HomePages /> */}
  
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme='colored'
        transition={Slide}
      />

    </>
  )
}

export default App
