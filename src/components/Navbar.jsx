import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../firebaseConfig";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className="fixed-top border" style={{ backgroundColor: "whitesmoke" }}>
      <nav className="navbar">

        {/* BACKBUTTON */}
      <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      {/* <button onClick={() => navigate(1)}>Go forward</button> */}
      <div>
        {/* // BACKBUTTON END */}

        <div>
          <img
            src="logo192.png"
            width={30}
            height={30}
            alt="logo"
            className="ms-5"
          />
        </div>
        <Link className="nav-link" to="/">
          Home{" "}
        </Link>
        <div>
          {user && (
            <>
              <span className="pe-4">
                Signed is as {user.displayName || user.email}
              </span>
              <button className="btn btn-primary btn-sm me-3"
              onClick={()=>{signOut(auth)}}
              >Logout</button>
            </>
          )}
        </div></div></div>
      </nav>
    </div>
  );
}
