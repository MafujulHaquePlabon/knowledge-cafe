import React from 'react';
import './Blog.css'

const Blog = (props) => {
 const {authorImg,authorName,blogCoverImg,blogTitle,date,readTime}=props.blog;
    return (
        <div>
        <img className='blog-cover-img' src={blogCoverImg} alt="" />
        <h3>{blogTitle}</h3>
        </div>
    );
};

export default Blog;