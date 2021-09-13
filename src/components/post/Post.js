import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../delete-modal/Modal'
import './Post.css';

const Post = ({post}) => {

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleEdit = () => {
        window.location.replace(`/editPost/${post.id}/1`);
    };


    const showConfirmModal = () => {
        setIsDeleteModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
            try {
              const res = await axios.delete(`https://restedblog.herokuapp.com/vdevarakonda/api/${post.id}`);
              window.location.replace("/");
            } catch (error) {
              console.log('Error occurred while deleting post', error);
            };
    };

    const closeModal = () => {
    setIsDeleteModalOpen(false);
    window.location.replace("/");
    };

    const getLocaleDateTime = (timeStamp) => {
        const postDate = new Date(timeStamp);
        return `${postDate.toLocaleDateString()} ${postDate.toLocaleTimeString()}`; 
    }

    return (
        <div className="post">
            <div className="top-section">
              <div className="title-info">
                 <h4>{post.title}</h4>
                 <span> Published at {getLocaleDateTime(post.timestamp)}</span>
              </div>
              <div className="actions-container">
                  <i
                  className="action-button far fa-edit"
                  onClick={handleEdit}
                ></i>
                <i
                  className="action-button  far fa-trash-alt"
                  onClick={showConfirmModal}
                ></i>
              </div>
            </div>
            

            <p>
            {post.text}
            </p>
            <Modal isOpen={isDeleteModalOpen} onConfirmClose={handleDeleteConfirm} onCancel={closeModal}></Modal>
        </div>
    );
};

export default Post;