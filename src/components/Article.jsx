import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import LikeArticle from "./LikeArticle";
import SaveArticle from "./SaveArticle";
import Comment from './Comment';

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);
  return (
    <div className="container border" style={{ marginTop: 70 }}>
      {article && (
        <div className="row">
          <img src={article.pfpUrl} alt={article.createdBy} />
          <h5>{article.createdBy}</h5>
          <div>{article.createdAt.toDate().toDateString()}</div>
          <div>
            <img
              src={article.imageUrl}
              alt={article.title}
              style={{ width: "100%", padding: 10 }}
            />
          </div>
          <div className="col-9 mt-3">
            
            
            <hr />
            <div className="d-flex flex-row-reverse">
            {user && <SaveArticle id={id} saves={article.saves} />}
              <i className="fa fa-comment-o fa-2x" aria-hidden="true"></i>
              {user && <LikeArticle id={id} likes={article.likes} />}
              <div className="pe-2">
                <p>{article.likes.length}</p>
              </div>
            </div>
            <p>{article.description}</p>
            <p style={{color: "#33c2ff"}}>{article.tags}</p>
            <i class="fa fa-map-marker fa-2x" style={{color: "#31aea6"}} aria-hidden="true"></i>
            <span style={{color: "#31aea6", textDecoration: "underline"}}>{article.location}</span>
            <p style={{color: "#f8cf01"}}>{article.price}</p>

            

            {/* comment  */}
            <div id="comments">
            <Comment id={article.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
