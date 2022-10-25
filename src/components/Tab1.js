import { useEffect } from "react";
import "../Tab.css";

export default function Tab1() {

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
        openTab("Posts");
      })

    return ( 
        <>
        <div className="tab">
            <button className="tablinks" onClick={e => openTab('Posts')}>Posts</button>
            <button className="tablinks" onClick={e => openTab('Following')}>Following</button>

        </div>
        <div id="Posts" className="tabcontent">
            <h3>Latest posts</h3>
            <p>London is the capital city of England.</p>
        </div>
        <div id="Following" className="tabcontent">
            <h3>People you follow</h3>
            <p>Paris is the capital city of France.</p>
            
        </div>
        </>
    );
}