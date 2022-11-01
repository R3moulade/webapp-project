// coded by Natalia Blautenberg
import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.css"

import "./Shops.css"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from '../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { toast } from 'react-toastify'

export default function AddShop() {
  //useState has to be always on the top
  // first is showing current state, 2ns how we can modify
  const [formData, setFormData] = useState({
  // as default I am setting input fields as empty 
OpeningHours:"",
StoreName:"",
address:"",
image:"",
description:"",

  })

  const [progress, setProgress] = useState(0);

// functions for img and input texts fields, change of state for setFormData

const handleChange = (e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
}
// :  - means equal
const handleImageChange = (e)=> {
setFormData({...formData, image:e.target.files[0]})
}

// connection to firebase, ||- means or
const handlePublish = () => {
  if (!formData.OpeningHours || !formData.StoreName || !formData.address || !formData.image){
    alert ("Please fil all the fields")
    return
  }

  const storageRef = ref(storage, `/storesImages/${Date.now()}${formData.image.name}`);
  const uploadImage = uploadBytesResumable(storageRef, formData.image);
  
  
  
  uploadImage.on("state_changed",
  (snapshot)=>{
    const progressPercent = Math.round ( (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    setProgress(progressPercent)
  },
  
  (err)=>{
    console.log(err)
  },
  
  ()=> {
    setFormData({
OpeningHours:"",
StoreName:"",
address:"",
image:"",
description:""
    });

getDownloadURL(uploadImage.snapshot.ref)
.then((url)=>{
  const storageRef =collection(db, "Storage")
  addDoc(storageRef, {

OpeningHours: formData.OpeningHours,
StoreName: formData.StoreName,
address: formData.address,
imageURL: url,
description: formData.description,
  })
  .then(()=>{
    toast("Article added succesfully", {type:"success"});
    setProgress(0);
  })
  .catch(err=>{
    toast("Error adding article",{type:"error"})
  })
})

  }
 
 
  
  )
}


  return (
    //Natalia - creating form for adding more stores 



      <div className="border p3 mt-3">
        

<h2>Add new shop</h2>
<label htmlFor>Shop name</label>
<input type="text" name="StoreName" className='form-control' value={formData.StoreName}
onChange={(e)=>handleChange(e)}
/>

{/* <label htmlFor="">Shop logo</label>
<input type="file" name="image" accept="image/*" className='form-control'/>  */}

<label htmlFor>Address</label>
<input type="text" name="address" className='form-control' value={formData.address}
onChange={(e)=>handleChange(e)}
/>

<label htmlFor>Opening hours</label>
<input type="text" name="OpeningHours" className='form-control' value={formData.OpeningHours}
onChange={(e)=>handleChange(e)}
/>


<label htmlFor="">Image</label>

{/* by using * in image /* it means that all extensions of img will be accepted */}
<input type="file" name="image" accept="image/*" className='form-control'
onChange={(e)=>handleImageChange(e)}
/> 


{/* description */}

<label htmlFor="">Description</label>
            <input
              type="text"
              name="description"
              list="pricerange"
              className="form-control"
              value={formData.price}
              onChange={(e) => handleChange(e)}
              />
            <datalist id="pricerange">
              <option value="Lorem ipsum"></option> 
           
            </datalist>

{/* progress bar */}


{progress === 0 ? null : (<div className="progress">
  <div className="progress-bar progress-bar-striped mt-2" style={{width:`${progress}%`}}>
    {`uploading image ${progress}%`}

  </div>
</div>)}


{/* by onclick function I am creating connection to firebase */}
<button className='form-control btn-primary mt-2' onClick={handlePublish}>Publish</button>
      </div>
    
  )
}
