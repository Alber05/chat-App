import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthContext from './context/AuthContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home.jsx'
import HomeMain from './pages/Home/views/HomeMain.jsx'
import Login from './pages/Home/views/Login.jsx'
import Register from './pages/Home/views/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthContext>
        <Home />
      </AuthContext>
    ),
    children: [
      {
        path: '/',
        element: <HomeMain />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
