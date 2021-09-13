import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import axios from "axios"; 
import './EditPost.css';

const EditPost = () => {

    const location = useLocation();
    const postId = location.pathname.split("/")[2];
    const editModeParam = location.pathname.split("/")[3] || '0';
    console.log('here postId ', postId);
    const [editMode, setEditMode] = useState(editModeParam === '1' ?  true : false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [timeStamp, setTimeStamp] = useState("")
  
 
    useEffect(() => {
    const getPostById = async () => {
        try {
          const res = await axios.get(`https://restedblog.herokuapp.com/vdevarakonda/api/${postId}`);
          setTitle(res.data.title);
          setText(res.data.text);
          setTimeStamp(res.data.timestamp);

        } catch (error) {
          console.log('Error occurred while fetching post', error);
        };
        
      };
      getPostById();
    }, [postId]);

    

    const onSave = async () => {
        try {
            const res = await axios.post(`https://restedblog.herokuapp.com/vdevarakonda/api/${postId}`, {
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

    const EditModeComponent = () => {
        return (
        <div className="edit-post">
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
                    <button className="button button-primary" onClick={onSave}>Save</button>
                </div>
        </div>
        );

    }

    const ViewModeComponent = () => {
        return (
        <div className="edit-post-view">
                <div className="title-info">
                    <h4>{title}</h4>
                    <span> Published at {`${new Date(timeStamp).toLocaleDateString()} ${new Date(timeStamp).toLocaleTimeString()}`}</span>
                </div>

                <p>
                    {text}
                </p>
            </div>
        );

    }

    

    return (
        <div class="container">
            {!editMode && 
            <div className="actions-container">
                        <i
                        className="action-button far fa-edit"
                        onClick={() => setEditMode(!editMode)}
                        ></i>
            </div>}

            {editMode ? <EditModeComponent /> : <ViewModeComponent />}
        </div>
        
    );
};

export default EditPost;

