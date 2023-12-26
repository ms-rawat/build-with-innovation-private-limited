import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import DataContext from './components/GlobleContext'

function App() {
  const router = createBrowserRouter([
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/',
      element:<Login/>
    }
  ])


  
  const  [Count,setCount]=useState(0)
  const  [user,setUser]=useState('')


  const updateCount = () => {
    setCount(Count+1);
  };

  return (
    <div>
 <DataContext.Provider value={{Count,updateCount,user,setUser}}>

<RouterProvider router={router}/>
</DataContext.Provider>
    </div>
  )
}

export default App