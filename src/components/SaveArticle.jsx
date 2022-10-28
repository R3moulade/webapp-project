import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebaseConfig";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

export default function SaveArticle({ id, saves }) {
  const [user] = useAuthState(auth);

  const savesRef = doc(db, "Articles", id);

  const handleSave = () => {
    
  };
  // ${!likes?.includes(user.uid) ? "-o" : ""}
  return (
    <div>
      <i
        className={`fa fa-diamond fa-2x`}
        style={{
          cursor: "pointer",
          color: saves?.includes(user.uid) ? "seagreen" : null,
        }}
        // onClick={handleSave}
      />
    </div>
  );
}
