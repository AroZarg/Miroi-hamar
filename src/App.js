import Application from "./Pages/Application/Application";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import "./app.css"


function App() {
  return (
  <Router className="app">
          <Routes>
            <Route path="/"element={<Login/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/app" element={<Application/>} />
          </Routes>
   </Router>

  );
};



export default App;
