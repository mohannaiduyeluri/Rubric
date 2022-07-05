import './App.css';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Nav from './components/pages/Nav';
import Profile from './components/pages/Profile';
import Posts from './components/pages/Posts';
import CreatePost  from './components/pages/CreatePost';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  // const isUserLoggedIn = false;
  // const userId = "123";
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userId, setUserId] = useState(123);
  return ( 
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav isLoggedIn={isUserLoggedIn}/>}>
            <Route index path="profile" element={<Profile isLoggedIn={isUserLoggedIn} />}/>
            <Route path="login" element={<Login isLoggedIn={isUserLoggedIn} />}/>
            <Route path="signup" element={<Signup isLoggedIn={isUserLoggedIn} />}/>
            <Route path="posts" element={<Posts userId={userId}/>}/>
            <Route path="createpost" element={<CreatePost/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
