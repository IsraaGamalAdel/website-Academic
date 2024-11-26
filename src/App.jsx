import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AcadmicRou from './Components/AcadmicRou/AcadmicRou';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Layout from './Components/Layout/Layout';
import Register from './Components/Register/Register';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';


function App() {
  let routers = createBrowserRouter([
    {path: '/' , element: <Layout/> ,children: [
      {index: true , element: <AcadmicRou><Home/></AcadmicRou>},
      { path: 'login' , element: <Login/>},
      { path: 'register' , element: <Register/>},
      { path: 'forgetPassword' , element:<ForgetPassword/>},
    ]}
  ])
  return <>
      <RouterProvider router={routers}></RouterProvider>
  </>
}

export default App
