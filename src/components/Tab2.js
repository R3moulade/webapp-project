import { useEffect } from "react";
import "../Tab.css";

export default function Tab2() {

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
        openTab("Map");
      })

    return ( 
        <>
        <div className="tab">
            <button className="tablinks" onClick={e => openTab('Map')}>Map</button>
            <button className="tablinks" onClick={e => openTab('List')}>List</button>
        </div>
        <div id="Map" className="tabcontent">
            <h3>Map</h3>
            <p>This is the map</p>
        </div>
        <div id="List" className="tabcontent">
            <h3>List</h3>
            <p>This is the list</p>
        </div>
       
        </>
    );
}