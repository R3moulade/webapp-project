import { useEffect } from "react";
import "../Tab.css";

export default function Tab2() {

    function openCity(cityName) {
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
        openCity("Copenhagen");
      })

    return ( 
        <>
        <div className="tab">
            <button className="tablinks" onClick={e => openCity('Copenhagen')}>Copenhagen</button>
            <button className="tablinks" onClick={e => openCity('Oslo')}>Oslo</button>
        </div>
        <div id="Copenhagen" className="tabcontent">
            <h3>Copenhagen</h3>
            <p>Copenhagen is the capital city of Denmark.</p>
        </div>
        <div id="Oslo" className="tabcontent">
            <h3>Oslo</h3>
            <p>Oslo is the capital city of Norway.</p>
        </div>
        <div id="Oslo" className="tabcontent">
            <h3>tab3</h3>
            <p>Oslo is the capital city of Norway.</p>
        </div>

        </>
    );
}