import { useEffect } from "react";
import "../Tab.css";

export default function Tab1() {

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
        openCity("London");
      })

    return ( 
        <>
        <div className="tab">
            <button className="tablinks" onClick={e => openCity('London')}>London</button>
            <button className="tablinks" onClick={e => openCity('Paris')}>Paris</button>
            <button className="tablinks" onClick={e => openCity('Tokyo')}>Tokyo</button>
            <button className="tablinks" onClick={e => openCity('tab3')}>Tab3</button>
        </div>
        <div id="London" className="tabcontent">
            <h3>London</h3>
            <p>London is the capital city of England.</p>
        </div>
        <div id="Paris" className="tabcontent">
            <h3>Paris</h3>
            <p>Paris is the capital city of France.</p>
        </div>
        <div id="Tokyo" className="tabcontent">
            <h3>Tokyo</h3>
            <p>Tokyo is the capital city of Japan.</p>
        </div>
        <div id="tab3" className="tabcontent">
            <h3>tab3</h3>
            <p>tab3 is the capital city of Japan.</p>
        </div>
        </>
    );
}