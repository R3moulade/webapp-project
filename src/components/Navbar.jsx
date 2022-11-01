import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../firebaseConfig";
import { signOut } from "firebase/auth";
import Logo from "./logo-thrifted.png"
import SortButton from "./sort.png"
import "../App.css";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className="fixed-top border" style={{ backgroundColor: "whitesmoke" }}>
      <nav className="navbar">

        {/* BACKBUTTON */}
      <div>
      <button onClick={() => navigate(-1)}>&larr;</button>
      {/* <button onClick={() => navigate(1)}>Go forward</button> */}
      <div>
        {/* // BACKBUTTON END */}

        <div>
          <img
            src={Logo}
            width={120}
            alt="logo"
            // className="ms-5"
          />
        </div>
        <div>
        <input type="search" className="drop-shadow" placeholder="Search..."/>
        <img src={SortButton} alt="" className="drop-shadow borders" width={40} border={"black"}/>
        </div>
        {/* <Link className="nav-link" to="/">
          Home{" "}
        </Link> */}
        </div></div>
      </nav>
    </div>
  );
}
