import { useEffect } from "react";
import "../Tab.css";

// PROFILE TABS

export default function Tab3() {

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
        <div id="Mypost" className="tabcontent">
            <h3>My posts</h3>
            <p>This is my posts</p>
        </div>
        {/* <div id="Following" className="tabcontent">
            <h3>Following</h3>
            <p>This is your followings</p>
        </div> */}

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