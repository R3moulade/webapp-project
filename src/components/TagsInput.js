import React, { useState } from 'react';
import formData from './AddArticle';
import handleChange from './AddArticle';

function TagsInput(){
    const [tags, setTags] = useState([])

function handleKeyDown(e){
    if (e.key !== 'Enter') return
    const value = "#" + e.target.value
    if(!value.trim()) return
    setTags([...tags, value])
    e.target.value = ''
}

function removeTag(index){
    setTags(tags.filter((el, i) => i !== index))
}

    return(
        <React.Fragment>
        <label htmlFor="">Tags</label>
        <div className="input-container form-control"
        type="text"
              name="tags"
               class="form-control"
               value={formData.tags}
               onChange={(e) => handleChange(e)}
              >
            {tags.map((tag, index) =>(
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            ))}

            <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="#"></input>
        </div>
        </React.Fragment>
    )
}
export default TagsInput;