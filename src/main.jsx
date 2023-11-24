import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home'
import Main from './Component/Main'
import AuthContextProbider from './ContextApi/AuthContext'
import './index.css'
import AllAppoinment from './Pages/AllAppoinment'
import CheckOut from './Pages/CheckOut'
import Signin from './Pages/Signin'
import SignUp from './Pages/SignUp'

// router
const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/checkout/:id",
        element:<CheckOut></CheckOut>,
        loader:({params}) =>fetch(`http://localhost:5000/doctors/${params.id}`)
      },
      {
        path:"signin",
        element:<Signin></Signin>
      },
      {
        path:"signup",
        element:<SignUp></SignUp>
      },
      {
        path:"appoinment",
        element:<AllAppoinment></AllAppoinment>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProbider>
       <RouterProvider router={router} />
    </AuthContextProbider>
      
  
   
  </React.StrictMode>

)
