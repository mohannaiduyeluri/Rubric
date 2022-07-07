import "../../App.css";
import Nav from './Nav';
import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  UserContext  from '../../Context/UserContext';
import { useContext } from "react";

const Signup = () => {
    const navigate = useNavigate();

    // const [user, setUser] = useState({
    //     name: '', //sandhya
    //     emailId:'',
    //     password: ''
    // });

    const { user, updateUser } = useContext(UserContext);

    const { name, emailId, password } = user;

    const onChange = (e) => updateUser(e.target.name, e.target.value)

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("printing user object while signup before ", user);
        fetchData("/user/register",
            {
                name, //cathy12
                emailId,
                password
            },
            "POST")
            .then((data) => {
                if (!data.message) {
                    console.log(data)
                    updateUser('isUserLoggedIn', true);
                    console.log("printing user object while signup after ", user);
                    navigate("/posts")
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div class="container d-flex justify-content-center formCls">
            <div class="shadow-lg p-3 mb-5  rounded col-md-5 d-flex justify-content-center">

                <form class="col-md-8" onSubmit={onSubmit}>
                    <h4 class="text-center">Signup</h4>
                    <div class="col-md-12 mb-4 mt-4">
                        <label class="form-label" >Name</label>
                        <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Enter Name"
                            onChange={onChange}
                            value={name} />
                    </div>
                    <div class="col-md-12 mb-4">
                        <label class="form-label" >Email</label>
                        <input
                            type="email"
                            name="emailId"
                            class="form-control"
                            placeholder="Enter Email"
                            onChange={onChange}
                            value={emailId} />
                    </div>
                    <div class="col-md-12 mb-4">
                        <label class="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            class="form-control"
                            placeholder="Password"
                            onChange={onChange}
                            value={password} />
                    </div>
                    <div class="col-md-12 mb-4">
                        <label class="form-label">Re-enter Password</label>
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary text-center mb-4">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;