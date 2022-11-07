import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllArticles from "./components/Articles/AllArticles";
import Navbar from "./components/Navbar/Navbar";
import SelectedArticle from "./pages/SelectedArticle";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";



export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/allarticles" element={<AllArticles />} />
          <Route path="/selectedarticle" element={<SelectedArticle />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));