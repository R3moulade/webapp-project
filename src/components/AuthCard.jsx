import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Tab3 from "../components/Tab3";


export default function AuthCard() {
    const [user] = useAuthState(auth);
return (
    <div className="border p-3 mt-3">
      {!user ? (
        <>
          <h2>
            <Link to="/signin">Login to view profile</Link>
          </h2>
          Don't have an account? <Link to="/register">Signup</Link>
        </>
        
      ) : (
        <Tab3 />)}
    </div>
)
};