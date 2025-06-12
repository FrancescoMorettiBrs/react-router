import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <h1>HOME</h1>
        <Link to={"/Chi-siamo"}>Chi siamo</Link>
        <Link to={"/Lista-post"}>Lista dei Post</Link>
      </main>
    </>
  );
};

export default Home;
