import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import React, {useState} from 'react'
import { useEffect } from 'react';
import { db } from '../firebaseConfig';
import "bootstrap/dist/css/bootstrap.css"
import "./Shops.css"
import profilePhoto from "./img/Moon.jpg"
import { Link } from "react-router-dom";



export default function Shops() {
  const [shops, setShops] = useState([]);
 useEffect(()=>{
const shopRef = collection(db,"Storage")
const q = query(shopRef);
onSnapshot(q,(snapshot)=>{
  const shops = snapshot.docs.map((doc)=>({
    id:doc.id,
    ...doc.data(),
  }))
  setShops(shops);
  console.log(shops);
})
 },[])
  return (
    <>
    <div>
    { shops.length === 0 ? (
    <div className="border mt-3 p-3">No shops</div>
   ) : ( 
   shops.map(
    ({
      id,
      HowFarAway,
      OpeningHours, 
      imageURL, 
    StoreName, 
    address, 
    profileLogoURL, 
    description,  
      } )=><div className='test3'key={id}>
<div className="row">
  <div className="photo-list-of-stores">
 
 <div className="flexbox">
    <img className="userLogo" src={profilePhoto}/>
    <div className="store-name">{StoreName}</div>
  </div>

  <Link to={`/shop/${id}`}><img className="store-photo" src={imageURL}/></Link>
 <div className="how-far-away">{HowFarAway}</div>
 <div className="opening-hours"><p className='open'>Open</p>{OpeningHours}</div>
 <div className="flexbox end-of-tile">
 <div className="address">{address}</div>
 <button className="button">Read more</button>
 </div>
   
  </div>
</div>

   </div>)
  
    )};
  


    </div>
    </>
  )
}
