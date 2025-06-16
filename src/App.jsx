import { Route, Routes, BrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import ListaPost from "./pages/ListaPost";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Chi-siamo" element={<ChiSiamo />} />
            <Route path="/Lista-post" element={<ListaPost />} />
            <Route path="/Crea-post" element={<CreatePost />} />
            <Route path="posts/:id" element={<PostDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
