import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Store from "./pages/Store";
import Main from "./pages/Main";
import QnA from "./pages/QnA";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Notice from "./pages/Notice";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Store />} />
        <Route path="/qna" element={<QnA />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
