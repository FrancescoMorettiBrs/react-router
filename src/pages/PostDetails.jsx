import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <p>Caricamento...</p>;

  return (
    <div className="container my-4">
      <h2>Dettaglio Post</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>
        <strong>Autore:</strong> {post.author}
      </p>
      <button onClick={() => navigate("/Lista-post")} className="btn btn-secondary mt-3">
        Torna alla lista
      </button>
    </div>
  );
};

export default PostDetails;
