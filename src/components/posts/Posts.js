import React from 'react';
import Post from '../post/Post';

const Posts = ({posts}) => {
    return (
        <div>
       {posts.length > 0 ? 
            posts.map((post, idx) => {
              return <Post key={idx} post={post}/>;
            })

            : <p> No posts found.</p>}

        </div>
    );
};

export default Posts;