import "../../App.css";
import Nav from './Nav';
import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  UserContext  from '../../Context/UserContext';
import { useContext } from "react";
import Posts from "./Posts";

function Login(props) {
    const navigate = useNavigate();

    const { user, updateUser } = useContext(UserContext);

    const { emailId, password } = user;

    const onChange = (e) => updateUser(e.target.name, e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        fetchData("/user/login",
            {
                emailId,
                password
            },
            "POST")
            .then((data) => {
                if (!data.message) {
                    // updateUser((user) => ({...user, name: data.name}));
                    // updateUser((user) => ({...user, _id: data._id}));
                    updateUser('name', data.name);
                    navigate("/posts");
                    
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div class="container d-flex justify-content-center formCls">
            <div class="shadow-lg p-3 mb-5  rounded col-md-5 d-flex justify-content-center">

                <form onSubmit={onSubmit}> 
                    <h4 class="text-center">Login</h4>
                    <div class="col-md-12 mb-4 mt-4">
                        <label class="form-label" >Email address</label>
                        <input 
                            type="email"  
                            class="form-control" 
                            name="emailId" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            onChange={onChange}
                            value={emailId} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="col-md-12 mb-4">
                        <label class="form-label">Password</label>
                        <input 
                            type="password" 
                            class="form-control" 
                            name="password" 
                            placeholder="Password" 
                            onChange={onChange}
                            value={password}/>
                    </div>

                    <div class="col-md-12 mb-4 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary text-center mb-4">Submit</button>
                </form>
            </div>
        </div>

    );
}

export default Login;