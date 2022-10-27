import { useEffect } from "react";
import "../Tab.css";
import Articles from "./Articles";

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
            <button className="tablinks" onClick={e => openTab('Posts')}>Dash</button>
            <button className="tablinks" onClick={e => openTab('Following')}>Recommended</button>
            
        </div>
        
        <div id="Posts" className="tabcontent">
            {/* <h3>Latest posts</h3> */}
            <Articles />
        </div>
        <div id="Following" className="tabcontent">
            {/* <h3>Recommended</h3> */}
            <Articles />
        </div>
        </>
    );
}