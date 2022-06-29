import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Nav />}>
            <Route index element={<Profile />}/>
            <Route path="login" element={<Login />}/>
            <Route path="signup" element={<Signup />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
