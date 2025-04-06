
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Restaurent from './pages/Restaurent';

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home />
    },
    {
      path:'/restaurent',
      element: <Restaurent />
    }
  ])

  return (
 <RouterProvider router={router} />
  )
}

export default App
