import "../../App.css";
import Nav from './Nav';
import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login(props) {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        emailId: '',
        password: ''
    });

    const { emailId, password } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

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
                    console.log(data);
                    // setIsLoggedIn(true);
                    window.localStorage.setItem("isUserLoggedIn", true);
                    window.localStorage.setItem("userId", data._id);
                    // window.location.reload();
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