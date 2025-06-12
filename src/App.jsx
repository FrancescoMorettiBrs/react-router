import { Route, Routes, BrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import ListaPost from "./pages/ListaPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Chi-siamo" element={<ChiSiamo/>}/>
            <Route path="/Lista-post" element={<ListaPost/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
