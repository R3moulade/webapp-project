import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import DeleteArticle from "./DeleteArticle";
import { useAuthState } from "react-firebase-hooks/auth";
import LikeArticle from "./LikeArticle";
import SaveArticle from './SaveArticle'
import { Link } from "react-router-dom";
import FmdGoodTwoToneIcon from '@mui/icons-material/FmdGoodTwoTone';

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
            imageUrl,
            createdAt,
            createdBy,
            userId,
            likes,
            saves,
            comments,
          }) => (
            <div className="mt-3 bg-light" key={id}>
              <div>
                <div className="p-3">
                  <div className="col-6">
                      {createdBy && (
                        <span className="badge bg-primary">{createdBy}</span>
                      )}
                    </div>
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
                  <p style={{color: "lightseagreen", textDecoration: "underline"}}>
                    {/* {FmdGoodTwoToneIcon} */}
                    {location}</p>
                  {/* <h5>{description}</h5>
                  <p>{tags}</p>
                  
                  <p>{price}</p> */}

                  <div className="d-flex flex-row-reverse">
                    {user && <SaveArticle id={id} saves={saves} />}
                    {user && <LikeArticle id={id} likes={likes} />}
                    <div className="pe-2">
                      <p>{likes?.length} thrifters inspired!</p>
                    </div>
                    
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
