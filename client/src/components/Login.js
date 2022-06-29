import "../App.css";
import Nav from './Nav';

function Login(props) {
    return (
        <div class="container d-flex justify-content-center formCls">
            <div class="shadow-lg p-3 mb-5  rounded col-md-5 d-flex justify-content-center">

                <form>
                    <h4 class="text-center">Login</h4>
                    <div class="col-md-12 mb-4 mt-4">
                        <label  class="form-label" >Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="col-md-12 mb-4">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
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