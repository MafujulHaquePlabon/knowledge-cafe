import React from 'react';
import './Blog.css'

const Blog = (props) => {
 const {authorImg,authorName,blogCoverImg,blogTitle,date,readTime}=props.blog;
    return (
        <div style={{marginBottom:'40px'}}>
        <img className='blog-cover-img' src={blogCoverImg} alt="" />
        <div className="blog-info">
            <div style={{display:'flex',alignItems:'center'}}>
                <img src={authorImg} alt="" />
                <div style={{paddingLeft:'1rem'}}>
                <h5>{authorName}</h5>
                <small>{date}</small>
            </div>
            </div>
            
            <div>
                <p>
                    {readTime}

                </p>
            </div>
        </div>
        <h3>{blogTitle}</h3>
        <p style={{paddingTop:'16px',paddingBottom:'16px'}}>#beginner #programming</p>
        <a style={{textDecoration:'underline'}} href="">Mark as read</a>
        <hr />
        </div>
    );
};

export default Blog;