import { useEffect, useState } from "react";
import AppHeader from "../components/AppHeader";
import axios from "axios";

const ListaPost = () => {
  const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      setPost(resp.data);
    });
  }, []);
  return (
    <div className="container my-4">
      <h2>Lista dei Post</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <small>Autore: {post.author}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPost;
