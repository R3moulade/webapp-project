import Articles from "./components/Articles";
import AddArticle from "./components/AddArticle";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Article from "./components/Article";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ShopsPage from "./pages/ShopsPage";
import AddPostPage from "./pages/AddPostPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";
import Nav from "./pages/Nav";

// <<<<<<< HEAD
function App() {
  return (
  <div>
    <div className="container">
      <Nav />
     
        <Routes>
          {/* MADDIE */}
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/article/:id" element={<Article/>} />
          <Route
            path="/"
            element={
              <div className="row mt-5">
                <div className="col-md-8">
                  <Articles />
                </div>
                <div className="col-md-4">
                  <AddArticle />
                </div>
              </div>
            }
          />
          {/* MADDIE END */}
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shops" element={<ShopsPage />} />
            <Route path="/addpost" element={<AddPostPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
    </div></div>
)}
export default App;
