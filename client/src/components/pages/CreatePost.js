import Nav from './Nav';
import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Posts = (props) => {
    const navigate = useNavigate();

    const [post, setPost] = useState([{
        userId: '',
        postTitle: '',
        postText: ''
    }]);

    const { userId, postTitle, postText } = post;

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
        <div >
            <div class="container d-flex justify-content-center formCls">
                <div class="shadow-lg p-3 mb-5  rounded col-md-5 d-flex justify-content-center">

                    <form class="col-md-8" onSubmit={onSubmit}>
                        <h4 class="text-center">Create Post</h4>
                        <div class="col-md-12 mb-4 mt-4">
                            <label class="form-label" >UserId</label>
                            <input 
                            type="text" 
                            name="userId" 
                            class="form-control" 
                            placeholder="Enter UserId" 
                            value={userId} />
                        </div>
                        <div class="col-md-12 mb-4">
                            <label class="form-label" >PostTitle</label>
                            <input 
                            type="text" 
                            name="postTitle" 
                            class="form-control" 
                            placeholder="Enter PostTitle" 
                            value={postTitle} />
                        </div>
                        <div class="col-md-12 mb-4">
                            <label class="form-label" >PostText</label>
                            <textarea 
                            type="text" 
                            name="postText" 
                            class="form-control" 
                            placeholder="Enter PostText" 
                            value={postText} >
                            </textarea>
                        </div>
                        <button type="submit" class="btn btn-primary text-center mb-4">Submit</button>
                    </form>
                </div></div>
            
        </div>
    );
}

export default Posts;