import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import TagsInput from "./TagsInput";
import '../App.css';

function AddArticle() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    // title: "",
    description: "",
    image: "",
    tags: "",
    location: "",
    price: "",
    type: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.description || !formData.image) {
      alert("Please write a description or upload an image");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          // title: "",
          description: "",
          image: "",
          tags: "",
          location: "",
          price: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            // title: formData.title,
            description: formData.description,
            tags: formData.tags,
            location: formData.location,
            price: formData.price,
            type: formData.type,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            createdBy:user.displayName,
            pfpUrl: user.photoURL,
            userId:user.uid,
            likes:[],
            comments:[]
          })
            .then(() => {
              toast("Post added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding post", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <div className="content">
    <div className="border p-3 mt-3 bg-light">
      {!user ? (
        <>
          <h2>
            <Link to="/signin">Login to create a post</Link>
          </h2>
          Don't have an account? <Link to="/register">Signup</Link>
        </>
      ) : (
        <>
          <h2>Create post</h2>

          {/* type */}
          
          <label htmlFor="">Post type</label>
          <p>what kind of post are you sharing?</p>
            <input
              type="text"
              name="type"
              list="typerange"
              placeholder="&#8582;"
              className="form-control drop-shadow borders"
              value={formData.type}
              onChange={(e) => handleChange(e)}
              style={{width: "30vw"}}
              />
            <datalist id="typerange">
              <option value="Post"></option> 
              <option value="Question"></option>
              <option value="DIY"></option>
              <option value="Event"></option>
            </datalist>

{/* image */}
          <label htmlFor="">File</label>
          <input
            type="file"
            name="image"
            // accept="image/*"
            className="form-control"
            onChange={(e) => handleImageChange(e)}
          />
        {/* LOADING IMAGE */}
          {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}

          {/* description */}
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            className="form-control drop-shadow borders"
            value={formData.description}
            onChange={(e) => handleChange(e)}
            style={{width: "85vw"}}
          />

          {/* tags */}
          <label htmlFor="">Tags</label>
          <p>add tags to make your post easier to find</p>
            <input
              type="text"
              name="tags"
              className="drop-shadow borders form-control"
              value={formData.tags}
              placeholder="#"
              onChange={(e) => handleChange(e)}
              style={{width: "70vw"}}
            />
            <TagsInput className="drop-shadow borders form-control" style={{width: "70vw"}} />
            

          {/* location */}
          <label htmlFor="">Location</label>
          <p>add which store you found the product</p>
          <p>or event location</p>
            <input
              type="text"
              name="location"
              className="form-control drop-shadow borders"
              value={formData.location}
              onChange={(e) => handleChange(e)}
              style={{ color:"blue", width: "70vw" }}/>

          {/* price */}
          
          <label htmlFor="">Price</label>
          <p>add how much the item cost</p>
          <p>or cost to make it</p>
            <input
              type="text"
              name="price"
              list="pricerange"
              placeholder="&#8582;"
              className="form-control drop-shadow borders"
              value={formData.price}
              onChange={(e) => handleChange(e)}
              style={{width: "30vw"}}
              />
            <datalist id="pricerange">
              <option value="$"></option> 
              <option value="$$"></option>
              <option value="$$$"></option>
            </datalist>

            {/* submit button */}
          <button
            className="form-control btn-primary mt-2 drop-shadow borders"
            onClick={handlePublish}
           style={{ backgroundColor: "#31aea6", color: "white" }}>
            Publish
          </button>
        </>
      )}
    </div></div>
  );
}
export default AddArticle;