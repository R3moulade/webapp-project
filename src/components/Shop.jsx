import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import LikeArticle from "./LikeArticle";
import Comment from './Comment';
import { DockSharp } from "@mui/icons-material";
import "./Shop.css";
import gps from "./img/gps.png"

export default function Article() {
  const { id } = useParams();
  const [shop, setShop] = useState(null);


  useEffect(() => {
    const docRef = doc(db, "Storage", id);
    onSnapshot(docRef, (snapshot) => {
      setShop({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);


  return (
    <div className="container border bg-light" style={{ marginTop: 70 }}>
      {shop && (
        <div className="row">
          <div className="col-3">
          <img className="store-photo" src={shop.imageURL} alt=""/>
          </div>
          <div className="col-9 mt-3">
            <div className="single-store-name"><h2>{shop.StoreName}</h2></div>
          <div className="store-information">
          <p><b>Store information</b></p>
          <div className="flexbox">
          <img className="gps" src={gps} alt=""/>
          <div className="address">{shop.address}</div>
          </div>
          
          </div>
           <div>{shop.description}</div>
          
            
      
           
            
            <div className="d-flex flex-row-reverse">
            
              <div className="pe-2">
             
              </div>
            </div>

            {/* comment  */}
           
          </div>
        </div>
      )}
    </div>
  );
}
