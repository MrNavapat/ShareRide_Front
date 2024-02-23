import ReactDOM from 'react-dom/client'
import HomePages from "./pages/HomePages"
import AuthContextProvider from './Context/AuthContext'
import Router from '../routes'
import { ToastContainer ,Slide} from 'react-toastify'
import TestPages from './pages/TestPages'
import "react-toastify/dist/ReactToastify.css";


function App() {


  return (
    <>
    
  
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
