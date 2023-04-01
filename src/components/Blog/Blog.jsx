import React from 'react';
import './Blog.css'
import { faBookmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Blog = (props) => {
 const {authorImg,authorName,blogCoverImg,blogTitle,date,readTime}=props.blog;
 const handleAddBookmark=props.handleAddBookmark;
 const handleMarkAsRead=props.handleMarkAsRead;

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
                <p style={{display:'flex',alignItems:'center'}}>
                    {readTime} min read
<FontAwesomeIcon className='hoverEffectBookmark' onClick={()=>handleAddBookmark(props.blog)} style={{paddingLeft:'8px',cursor: 'pointer'}} icon={faBookmark}></FontAwesomeIcon>
                </p>
            </div>
        </div>
        <h3>{blogTitle}</h3>
        <p style={{paddingTop:'16px',paddingBottom:'16px'}}>#beginner #programming</p>
        <p onClick={()=>handleMarkAsRead(props.blog)} style={{textDecoration:'underline',color:'#6047EC', cursor: 'pointer'}} className="hoverEffectRead">Mark as read</p>
        
        <hr />
        </div>
    );
};

export default Blog;