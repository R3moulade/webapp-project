import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";


export default function AuthCard() {
    const [user] = useAuthState(auth);
return (
    <div className="border p-3 mt-3 bg-light" style={{ position: "fixed" }}>
      {!user ? (
        <>
          <h2>
            <Link to="/signin">Login to view profile</Link>
          </h2>
          Don't have an account? <Link to="/register">Signup</Link>
        </>
        
      ) : (
        <h2>Profile</h2>)}
    </div>
)
};