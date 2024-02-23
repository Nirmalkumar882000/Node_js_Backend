import React from 'react'
import UserList from './components/UserList'
import Header from './components/Header'
import AddUser from './components/AddUser'
import UpdateUser from './components/UpdateUser'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<UserList/>}/>
    <Route path='/add' element={<AddUser/>}/>
    <Route path='/update/:id' element={<UpdateUser/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
