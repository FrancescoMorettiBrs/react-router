import { useEffect, useState } from "react";
import AppHeader from "../components/AppHeader";
import axios from "axios";

const ListaPost = () => {
  const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts?page=1&limit=15";

  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      setPost(resp.data);
    });
  }, []);
  return (
    <div className="container my-4">
      <h2>Lista dei Post</h2>
      <ul className="list-unstyled my-4">
        {posts.map((post, index) => (
          <li key={index}>
            <div className="card my-4">
              <div className="card-header">{post.id}</div>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <p>Autore: {post.author}</p>
                <a href="#" className="btn btn-primary">
                  Details
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPost;
