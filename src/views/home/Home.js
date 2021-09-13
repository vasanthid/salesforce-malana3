import React, { useState, useEffect }  from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Modal from '../../components/delete-modal/Modal';
import axios from 'axios';
import './Home.css';

const Home = () => {    
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get('https://restedblog.herokuapp.com/vdevarakonda/api/');
        setPosts(res.data);
      } catch (error) {
          console.log('Error while fetching posts', error);
      }
      
    };
    getPosts();
  }, []);

  const showConfirmModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
        const res = await axios.delete(`https://restedblog.herokuapp.com/vdevarakonda/api/`);
        window.location.replace("/");
      } catch (error) {
      };
    setIsDeleteModalOpen(false);
    window.location.replace("/");
  };

  const closeModal = () => {
    setIsDeleteModalOpen(false);
    window.location.replace("/");
  };

  const onCreatePostClick = () => {
    window.location.replace("/createPost");
  }

  return (
    <div className="App">
      <Header />
      {/** display of these buttons should be handled based on user's authorization */}
      <div className="action-buttons-container">
        <button className="button button-primary" onClick={onCreatePostClick}>Create Post</button>
        <button className="button button-primary" onClick={showConfirmModal}>Delete All Posts</button>
      </div>
      <Posts posts={posts}/>
      <Modal isOpen={isDeleteModalOpen} onConfirmClose={handleDeleteConfirm} onCancel={closeModal}></Modal>
    </div>
  );
};

export default Home;
