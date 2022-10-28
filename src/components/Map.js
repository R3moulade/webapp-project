import React from "react"
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const center = [	56.162939, 10.203921]

function Map() {

  const markerIcon = new L.Icon ({
    iconUrl: require("./img/icon.png"),
    iconSize:[34,48],
    iconAnchor: [17,45],
    popupAnchor:[3,-46],
    })
    
    
   

  return (
   <MapContainer
center={center}
zoom={13}
style={ {width: "100vh", height:"100vh"}}>

<TileLayer
url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=zhdH0gLFyYhBE25sV8kt"
attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
/>


<Marker
position={[56.1574847, 10.1998491]}
icon={markerIcon}


>
<Popup><b>First marker</b></Popup>
</Marker>

      
  
   </MapContainer>
  
   
  );
}

export default Map;
