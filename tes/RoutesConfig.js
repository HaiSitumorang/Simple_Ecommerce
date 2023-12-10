import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'

const RoutesConfig = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path="/home" Component={Homepage}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesConfig