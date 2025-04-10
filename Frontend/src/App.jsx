import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Dining from './pages/Dining';
import Restaurent from './pages/Restaurent';
import { useContext } from 'react';
import {context} from './Context/context.jsx';
import Night from './pages/Night';
import Delivery from './pages/Delivery';
import Order from './components/Order/Order';
import OwnerOrder from './components/AddResaturant/Order.jsx'
import Layout from './Layout.jsx';
import AddRestaurant from './pages/AddRestaurant.jsx';

const App = () => {

  const {auth} = useContext(context);

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home />
    },{
      element:auth ? <Layout /> : <Home />,
      children:[
         {
            path:'/dining',
            element: auth? <Dining /> : <Home />
          },{
            path:'/delivery',
            element: auth? <Delivery /> : <Home />
          },{
            path:'/night',
            element: auth? <Night /> : <Home />
          }
      ]
    },
    {
      path:'/restaurent',
      element: auth? <Restaurent /> : <Home />
    },
    ,{
      path:'/order/:id',
      element: auth? <Order /> : <Home />
    },
    {
      path:'/owner/order/:id',
      element: auth? <OwnerOrder /> : <Home />
    },{
      path:'/addrestaurant',
      element: auth? <AddRestaurant /> : <Home />
    }
  ])

  return (
 <RouterProvider router={router} />
  )
}

export default App