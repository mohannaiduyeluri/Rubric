import './App.css';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Nav from './components/pages/Nav';
import Profile from './components/pages/Profile';
import Posts from './components/pages/Posts';
import CreatePost from './components/pages/CreatePost';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Nav />}> 
              <Route index path="/" element={<Profile />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="posts" element={<Posts />} />
              <Route path="createpost" element={<CreatePost />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
