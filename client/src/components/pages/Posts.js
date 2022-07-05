import Nav from './Nav';
import { fetchDataNew } from "../../main.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Posts = (props) => {
  const navigate = useNavigate();

  const [post, setPost] = useState([{
    userId: '',
    postTitle: '',
    postText: '',
    createdTime: '',
    modifiedTime: ''
  }]);

  const { userId, postTitle, postText, createdTime, modifiedTime } = post;

  useEffect(() => {
    setTimeout(() => {
      fetchDataNew("/post/fetch",
        "GET")
        .then((data) => {
          if (!data.message) {
            console.log(data)
            setPost(data);
          }
        })
        .catch((error) => {
          console.log(error)
        });

        fetchDataNew("/user/fetch/all",
        "GET")
        .then((data) => {
          if (!data.message) {
            console.log(data)
            // setPost(data);
          }
        })
        .catch((error) => {
          console.log(error)
        });
    }, 1000);
  }, []); // <- add empty brackets here



  // const response = fetch(`http://localhost:4000/post/fetch`, {
  //   method: "GET"
  // });
  // console.log(response.json());

  // const userId = props.userId;

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("lauda");
    navigate("/createpost");
}
  return (
    <div >
      {/* class="shadow-lg p-3 mb-5  rounded col-md-5 d-flex justify-content-center" */}

      {/* <div class="container d-flex justify-content-center formCls">
        <div class="shadow-lg p-3 mb-5  rounded col-md-5 d-flex justify-content-center">

          <form class="col-md-8" onSubmit={onSubmit}>
            <h4 class="text-center">Create Posts</h4>
            <div class="col-md-12 mb-4 mt-4">
              <label class="form-label" >UserId</label>
              <input type="text" name="userId" class="form-control" placeholder="Enter UserId" value={userId} />
            </div>
            <div class="col-md-12 mb-4">
              <label class="form-label" >PostTitle</label>
              <input type="text" name="postTitle" class="form-control" placeholder="Enter PostTitle" value={postTitle} />
            </div>
            <div class="col-md-12 mb-4">
              <label class="form-label" >PostText</label>
              <textarea type="text" name="postText" class="form-control" placeholder="Enter PostText" value={postText} ></textarea>
            </div>
            <button type="submit" class="btn btn-primary text-center mb-4">Submit</button>
          </form>
        </div></div> */}
      <form onSubmit={onSubmit}>
        <button type="submit" class="btn btn-primary text-center mb-4">Create Post</button>
      </form>
      <div class="" >
        {post.map((post, index) => {
          return (
            <div class="col-md-12 mb-4 mt-3 d-flex justify-content-center ">
              <div class="card cord-box shadow-lg">
                <div class="card-body">
                  <h5 class="card-title">{post.postTitle}</h5>
                  <p class="card-text">{post.postText}</p>
                  <p class="card-text"><small class="text-muted">{post.createdTime}</small></p>
                </div>
              </div>
            </div>
          )
        })}
        {/* <form onSubmit={onSubmit}>
          <h4 class="text-center">Login</h4>
          <div class="col-md-12 mb-4 mt-4">
            <label class="form-label" >Email address</label>
            <input
              type="email"
              class="form-control"
              name="emailId"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            // onChange={onChange}
            // value={emailId} />
            ></input>
            { <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> }
          </div>
          <div class="col-md-12 mb-4">
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
            // onChange={onChange}
            // value={password} />
            ></input>
          </div>

          <div class="col-md-12 mb-4 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary text-center mb-4">Submit</button>
        </form> */}
      </div>
    </div>
  );
}

export default Posts;