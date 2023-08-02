
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RegisterForm from './pages/RegisterForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginForm from './pages/LoginForm'
import NewDocument from './pages/NewDocument';
import PrivateRoute from './components/PrivateRoute';
import AllDocuments from './pages/AllDocuments';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/' element={
            <PrivateRoute />
          } >
            <Route path='/new-document' element={<NewDocument />} />
            <Route path='/all-documents' element={<AllDocuments/>}/>
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
