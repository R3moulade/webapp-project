import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import TagsInput from "./TagsInput";

function AddArticle() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    location: "",
    price: "",
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
    if (
     !formData.title || !formData.description || !formData.tags || !formData.location || !formData.price || !formData.image) {
      alert("Please fill all the fields");
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
          title: "",
          description: "",
          image: "",
          tags: "",
          location: "",
          price: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            tags: formData.tags,
            location: formData.location,
            price: formData.price,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            createdBy:user.displayName,
            userId:user.uid,
            likes:[],
            comments:[]
          })
            .then(() => {
              toast("Article added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <div className="border p-3 mt-3 bg-light" style={{ position: "fixed" }}>
      {!user ? (
        <>
          <h2>
            <Link to="/signin">Login to create a post</Link>
          </h2>
          Don't have an account? <Link to="/register">Signup</Link>
        </>
      ) : (
        <>
          <h2>Create article</h2>
{/* image */}
          <label htmlFor="">Image</label>
          <input
            type="file"
            name="image"
            // accept="image/*"
            className="form-control"
            onChange={(e) => handleImageChange(e)}
          />

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

{/* title */}
          <div className="form-group">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* description */}
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={(e) => handleChange(e)}
          />

          {/* tags */}
          <label htmlFor="">Tags</label>
            <input
              type="text"
              name="tags"
              className="form-control"
              value={formData.tags}
              onChange={(e) => handleChange(e)}
            />
            <TagsInput />
            

          {/* location */}
          <label htmlFor="">Location</label>
            <input
              type="text"
              name="location"
              className="form-control"
              value={formData.location}
              onChange={(e) => handleChange(e)}
              style={{ color:"blue" }}/>

          {/* price */}
          
          <label htmlFor="">Price</label>
            <input
              type="text"
              name="price"
              list="pricerange"
              className="form-control"
              value={formData.price}
              onChange={(e) => handleChange(e)}
              />
            <datalist id="pricerange">
              <option value="$"></option> 
              <option value="$$"></option>
              <option value="$$$"></option>
            </datalist>

          
          <button
            className="form-control btn-primary mt-2"
            onClick={handlePublish}
          >
            Publish
          </button>
        </>
      )}
    </div>
  );
}
export default AddArticle;