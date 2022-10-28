import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebaseConfig";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import LightbulbIcon from '@mui/icons-material/Lightbulb'

export default function LikeArticle({ id, likes }) {
  const [user] = useAuthState(auth);

  const likesRef = doc(db, "Articles", id);

  const handleLike = () => {
    if (likes?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
      }).then(() => {
          console.log("unliked");
      }).catch((e) => {
            console.log(e);
      });
    }
    else{
        updateDoc(likesRef,{
            likes:arrayUnion(user.uid)
        }).then(() => {
            console.log("liked");
        }).catch((e) => {
              console.log(e);
        });
    }
  };
  // 
  return (
    <div>

      
      {/* <LightbulbIcon /> */}
      <i
        className={`${!likes?.includes(user.uid) ? "fa fa-lightbulb-o" : "fas fa-lightbulb"} fa-2x`}
        style={{
          cursor: "pointer",
          color: likes?.includes(user.uid) ? "yellow" : null,
        }}
        onClick={handleLike}
      />
    </div>
  );
}
