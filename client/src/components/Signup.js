import "../App.css";
import Nav from './Nav';

function Signup(props) {
    return (
        <div class="container d-flex justify-content-center formCls">
            <div class="shadow-lg p-3 mb-5  rounded col-md-5 d-flex justify-content-center">

                <form class="col-md-8">
                    <h4 class="text-center">Signup</h4>
                    <div class="col-md-12 mb-4 mt-4">
                        <label class="form-label" >Name</label>
                        <input type="name" class="form-control" aria-describedby="emailHelp" placeholder="Enter Name" />
                    </div>
                    <div class="col-md-12 mb-4">
                        <label class="form-label" >Email</label>
                        <input type="email" class="form-control" placeholder="Enter email" />
                    </div>
                    <div class="col-md-12 mb-4">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" placeholder="Password" />
                    </div>
                    <div class="col-md-12 mb-4">
                        <label class="form-label">Re-enter Password</label>
                        <input type="password" class="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary text-center mb-4">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;