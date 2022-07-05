import "../../App.css";
import Login from './Login';
import Signup from './Signup';
import { Outlet, Link } from "react-router-dom";

function Nav(props) {
    const isLoggedIn = props.isLoggedIn;

    return (
        <div>
            < nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">Rubric</a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                {/* <a class="nav-link active" aria-current="page" href="#">Profile </a> */}
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link active" aria-current="page" href="#">Profile </a> */}
                                <Link className="nav-link" to="/posts">Posts</Link>
                            </li>

                        </ul>
                        {isLoggedIn ?
                            <form class="d-flex">
                                <button class="btn btn-outline-success"><Link className="nav-link" to="/login">Log Out</Link></button>
                            </form>
                            :
                            <form class="d-flex">
                                <button class="btn btn-outline-success"><Link className="nav-link" to="/signup">Signup</Link></button>
                                <button class="btn btn-outline-success"><Link className="nav-link" to="/login">Login</Link></button>
                            </form>
                        }
                    </div>
                </div>
            </nav >
            <Outlet />
        </div >
    );
}

export default Nav;