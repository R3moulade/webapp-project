import { useEffect } from "react";
import "../Tab.css";
import Articles from "./Articles";
import React from "react";
import { auth } from "./../firebaseConfig";
import { signOut } from "firebase/auth";
import "../App.css";
import { useAuthState } from "react-firebase-hooks/auth";

// PROFILE TABS

export default function Tab3() {
  const [user] = useAuthState(auth);

    function openTab(cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
      }

      // Default open tab
      useEffect(() => {
        openTab("Mypost");
      })

    return ( 
        <>
        <div>
        <div>
          {user && (
            <>
            <img src={user.photoURL || null} alt={user.displayName || user.email}/>
              <span className="pe-4">
                Signed in as {user.displayName || user.email}
              </span>
              <button className="btn btn-primary btn-sm me-3"
              onClick={()=>{signOut(auth)}}
              >Logout</button>
            </>
          )}
        </div>
          </div>
        <div className="tab">
            <button className="tablinks" onClick={e => openTab('Mypost')}>My posts</button>
            <button className="tablinks" onClick={e => openTab('Savedposts')}>Saved posts</button>
            <button className="tablinks" onClick={e => openTab('SavedShops')}>Saved Shops</button>
        </div>
        <div id="Mypost" className="tabcontent">
            <h3>My posts</h3>
            <p>This is my posts</p>
            <Articles />
        </div>
        <div id="Savedposts" className="tabcontent">
            <h3>Saved posts</h3>
            <p>saved post</p>
        </div>
       
        <div id="SavedShops" className="tabcontent">
            <h3>Saved Shops</h3>
            <p>saved shop</p>
        </div>
       
       
        </>
    );
}