import Application from "./Pages/Application/Application";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Score from "./Pages/Score/Score";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import "./app.css"
import {UserContext} from './context/UserContext';
import React, {useEffect, useState} from 'react';

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
      const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false
      const access_token = localStorage.getItem('access_token')
      const userInfo = user ? {
          ...user,
          token: access_token
      } : false
      setUser(userInfo)
      setUser(user)
  }, [])
  const loginUser = ({data}) => {
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('access_token', data.access_token)
      setUser(data.user)
  }

  const resetUser = () => {
      setUser(false)
      localStorage.removeItem('user')
      localStorage.removeItem('access_token')
  }
  return (
 <UserContext.Provider value={{user, setUser: loginUser, resetUser}}>
  <Router className="app">
          <Routes>
            <Route path="/"element={<Login/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/app" element={<Application/>} />
            <Route path="/score" element={<Score/>} />
          </Routes>
   </Router>
   </UserContext.Provider>  

  );
};



export default App;
