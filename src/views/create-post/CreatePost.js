import React, { useState } from 'react';
import axios from 'axios';
import './CreatePost.css';

const CreatePost = () => {

    const [title, setTitle] = useState();
    const [text, setText] = useState();

    const onPublish = async () => {
        try {
            const res = await axios.post('https://restedblog.herokuapp.com/vdevarakonda/api/', {
                title: title,
                text: text
            });
            window.location.replace("/");
          } catch (error) {
            console.log('Error occurred while fetching post', error);
          };
    };


    const onCancel = () => {
        window.location.replace("/");
    };

    return (
        <div className="new-post">
        <div className="form-item">
            <label className="label">Title</label>
            <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-item">
            <label className="label">Text</label>
            <textarea rows="20" cols="50" value={text} required onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="action-buttons-container">
            <button className="button" onClick={onCancel}>Cancel</button>
            <button className="button button-primary" onClick={onPublish}>Publish</button>
        </div>
</div>
    );
};

export default CreatePost;

