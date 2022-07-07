import "../../App.css";
import Nav from './Nav';
import { fetchData } from "../../main.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataNew } from "../../main.js";
import UserContext from "../../Context/UserContext";
import { useContext } from "react";

const Posts = (props) => {
    const navigate = useNavigate();

    const { user } = useContext(UserContext);
    const userId = user._id;

    const [post, setPost] = useState([{
        postTitle: '',
        postText: ''
    }]);

    const { postTitle, postText } = post;

    const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value })

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetchDataNew("/user/fetch/all",
    //             "GET")
    //             .then((data) => {
    //                 if (!data.message) {
    //                     setUsers(data);
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //             });

    //     }, 1000);
    // }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(userId, postTitle, postText);

        fetchData("/post/create",
            {
                userId, postTitle, postText
            },
            "POST")
            .then((data) => {
                if (!data.message) {
                    console.log(data)
                    navigate("/posts");
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div>
            <div class="container d-flex justify-content-center formCls">
                <div class="shadow-lg p-3 mb-5  rounded col-md-5 d-flex justify-content-center">

                    <form class="col-md-8" onSubmit={onSubmit}>
                        <h4 class="text-center">Create Post</h4>
                        {/* <div class="col-md-12 mb-4 mt-4">
                            <label class="form-label" >UserId</label>
                            {
                                users.map((user, index) => {
                                    return (
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="userId" id="userId" value={user.id} onChange={onChange} />
                                            <label class="form-check-label" >{user.name}</label>
                                        </div>
                                    )
                                })
                            }
                        </div> */}
                           
                        <div class="col-md-12 mb-4">
                            <label class="form-label" >PostTitle</label>
                            <input
                                onChange={onChange}
                                type="text"
                                name="postTitle"
                                class="form-control"
                                placeholder="Enter PostTitle"
                                value={postTitle} />
                        </div>
                        <div class="col-md-12 mb-4">
                            <label class="form-label" >PostText</label>
                            <textarea
                                onChange={onChange}
                                type="text"
                                name="postText"
                                class="form-control textarea-stle"
                                placeholder="Enter PostText"
                                value={postText} />
                        </div>
                        <button type="submit" class="btn btn-primary text-center mb-4">Submit</button>
                    </form>
                </div></div>

        </div>
    );
}

export default Posts;