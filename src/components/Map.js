// coded by: Natalia Blautenberg
// Map is visible with grey spots but it is fixed when you go to console and change screen to mobile/desktop
// you have to do this every time you are refreshing this page

import React, { useState } from "react"
import {MapContainer, TileLayer, Marker, Popup, MapContainerProps} from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";






function Map() {
const [center, setCenter] = useState({lat:56.178104, lng:10.1819745})
const zoom = 12;
  
const markerIcon = new L.Icon ({
    iconUrl: require("./img/icon.png"),
    iconSize:[34,48],
    iconAnchor: [17,45],
    popupAnchor:[3,-46],
    })

    const markerIconyourplace = new L.Icon ({
      iconUrl: require("./img/yourgpsplace.png"),
      iconSize:[20,20],
      iconAnchor: [17,45],
      popupAnchor:[3,-46],
      })
    
    
   

  return (
    <MapContainer
      center ={center}
      zoom = {zoom}
  >

    <TileLayer 
    url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=zhdH0gLFyYhBE25sV8kt " 
    
      
     />


<Marker
position={[56.1574847, 10.1998491]}
icon={markerIcon}




>
<Popup><b>Kirkens Korshær Genbrug</b>
<div className="popup-details">
<p>2 km away</p>

<div className="flexbox">
<div className="openg">Open</div> <p> Closes 18:00</p></div>
<p className="address">Address: Vestegade 37, Aarhus</p>
</div>
</Popup>
</Marker>




<Marker
position={[56.1470975, 10.1988288]}
icon={markerIcon}




>
<Popup><b>Moonchild Vintage Århus</b>
<div className="popup-details">
<p>1,5 km away</p>

<div className="flexbox">
<div className="openg">Open</div> <p> Closes 16:00</p></div>
<p className="address">Brammersgade 6, 8000 Aarhus C</p>
</div>
</Popup>
</Marker>


<Marker
position={[56.1469729, 10.1937412]}
icon={markerIconyourplace}




>
<Popup><b>Your current place!</b>

</Popup>
</Marker>

  
   </MapContainer>
  
   
  );
}

export default Map;
