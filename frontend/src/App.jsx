// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserLayout from "./pages/Layout/UserLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import Panier from "./pages/Panier";
import Articles from "./pages/Articles";

import AdminLayout from "./pages/Layout/AdminLayout";
import HomeAdmin from "./pages/Admin/HomeAdmin";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<HomeAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
