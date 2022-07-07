import Nav from './Nav';
import { fetchDataNew } from "../../main.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import { useContext } from "react";

const Posts = (props) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  // console.log("printing props in posts", props)
  const [userNew, setUserNew] = useState([{
    _id: '',
    name: '',
    emailId: '',
    password: '',
    createdTime: '',
    modifiedTime: ''
  }]);

  const [post, setPost] = useState([{
    userId: '',
    postTitle: '',
    postText: '',
    createdTime: '',
    modifiedTime: ''
  }]);

  useEffect(() => {
    setTimeout(() => {
      fetchDataNew("/user/fetch/all",
        "GET")
        .then((data) => {
          if (!data.message) {
            console.log("users data", data)
            setUserNew(data);
          }
        })
        .catch((error) => {
          console.log(error)
        });

    }, 1000);
  }, []);

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
    }, 1000);
  }, []); // <- add empty brackets here



  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/createpost");
  }
  const convertTZtoNormal = (date) => {
    var d = new Date(date);
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000 * 5.5));
    return nd.toLocaleString();
  }
  return (
    <div >
      <h1>Hello, {user.name}</h1>
      <form onSubmit={onSubmit} class="mt-4 d-flex justify-content-end col-md-8">
        <button type="submit" class="btn btn-primary text-center mb-2">Create Post</button>
      </form>
      <div class="" >
        {post.map((post, index) => {
          return (
            <div class="col-md-12 mb-4 mt-3 d-flex justify-content-center ">
              <div class="card cord-box shadow-lg">
                <div class="card-body">
                  <div class="text-center card-title"><h4>{post.postTitle} <small>by </small>
                    {userNew.map((userNew, index) => {
                      return (
                        userNew._id === post.userId ? userNew.name : null
                      )
                    })}</h4>
                  </div>
                  <hr />
                  <p class="card-text">{post.postText}</p>
                  <p class="card-text text-end"><small class="text-muted"> {convertTZtoNormal(post.createdTime)}</small></p>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default Posts;