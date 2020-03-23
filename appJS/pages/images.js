import { Button } from 'semantic-ui-react'
import React, { useState } from "react";
import Link from 'next/link'
import axios from "axios"

export default images;

function images(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");


    const handleSubmit = (evt) => {
        evt.preventDefault();
        var formData = new FormData();
        formData.append("FileField", image);
        formData.append("Name", name);
        axios.post("http://10.0.0.142:8007/friendlyfaces/", formData);
    }

    const onChangeImage = e => {
        setImage(e.target.files[0])
    }
    
    

    return (

        <div>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <form className="ui form" onSubmit={handleSubmit}>
                <label>Your Face:
                <input type="file" value={image} onChange={onChangeImage} />
                </label>
                <label>Your Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>



    );
}
;

