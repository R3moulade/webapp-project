import { useEffect } from "react";
import "../Tab.css";
import AddArticle from './AddArticle'

// PROFILE TABS

export default function Tab4() {

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
        <div className="tab">
            <button className="tablinks" onClick={e => openTab('Mypost')}>My posts</button>
            {/* <button className="tablinks" onClick={e => openTab('Following')}>Following</button> */}
            <button className="tablinks" onClick={e => openTab('Savedposts')}>Saved posts</button>
            <button className="tablinks" onClick={e => openTab('SavedShops')}>Saved Shops</button>
        </div>
        <div id="createarticle" className="tabcontent">
            <h3>Create Article</h3>
        </div>
        </>
    );
}