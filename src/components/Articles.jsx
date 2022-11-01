import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import DeleteArticle from "./DeleteArticle";
import { useAuthState } from "react-firebase-hooks/auth";
import LikeArticle from "./LikeArticle";
import SaveArticle from './SaveArticle'
import { Link } from "react-router-dom";
import FmdGoodTwoToneIcon from '@mui/icons-material/FmdGoodTwoTone';
import "../App.css"

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);
  
  return (
    <div>
      {articles.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        articles.map(
          ({
            id,
            title,
            description,
            tags,
            location,
            price,
            type,
            imageUrl,
            createdAt,
            createdBy,
            pfpUrl,
            userId,
            likes,
            saves,
            comments,
          }) => (
            <div className="mt-3 borders" key={id}>
              <div>
                <div className="p-3">

              {/* profile picture */}
              {/* for some reason it cant read this */}
                {/* <div>
                  {pfpUrl && (
                    <img src={pfpUrl} alt={user.displayName || user.email}></img>
                  )}
                </div> */}

                {/* username */}
                  <div className="col-6">
                      {createdBy && (
                        <span className="badge bg-primary">{createdBy}</span>
                      )}
                    </div>
                    
                    {/* type */}
                    <p>{type}</p>

                    {/* date created */}
                    <div>
                        <p>{createdAt.toDate().toDateString()}</p>
                    </div>

                </div>
                <div className="col-xs">
                  <Link to={`/article/${id}`}>
                    <img
                    className="image"
                      src={imageUrl}
                      alt="title"
                      style={{ height: 180, width: '100%', overflow: 'hidden' }}
                    />
                  </Link>
                </div>
                <div className="p-3">
                  <div className="row">
                    
                    <div className="d-flex flex-row-reverse">
                      {user && user.uid === userId && (
                        <DeleteArticle id={id} imageUrl={imageUrl} />
                      )}
                    </div>
                  </div>
                  {/* <h3>{title}</h3> */}
                  <p style={{color: "#31aea6", textDecoration: "underline"}}>
                    {/* {FmdGoodTwoToneIcon} */}
                    {location}</p>
                  <p className="desc">{description}</p>
                  {/* <p>{tags}</p>
                  
                  <p>{price}</p> */}

                  <div className="d-flex flex-row-reverse">
                    {user && <SaveArticle id={id} saves={saves} />}
                    <i className="fa fa-comment-o fa-2x" aria-hidden="true"></i>
                    <div className="pe-2">
                      <p>{likes?.length}</p>
                    </div>
                    {user && <LikeArticle id={id} likes={likes} />}
                    
                    
                    {comments && comments.length > 0 && (
                      <div className="pe-2">
                        <p>{comments?.length} comments</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}
