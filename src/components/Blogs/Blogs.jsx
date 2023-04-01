import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

import './Blogs.css'

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    const [bookmarks,setBookmarks]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then (data=>setBlogs(data))
    }
    ,[]);
    const handleAddBookmark=(blog)=>{
       // console.log(blog)
        const newbookmarks=[...bookmarks,blog];
        setBookmarks(newbookmarks);
    };
    return (
       
        <div className='parent-container'>
            <div  className='blogs-container'>
         {
            blogs.map(blog=>
                <Blog key={blog._id} blog={blog} handleAddBookmark={handleAddBookmark}></Blog>
            )
         }
        </div>
        <div className='bookmarks-container'>
            <div className='spent-time-count'>
            <h4 style={{color:'#6047EC',border:'1px solid #6047EC',padding:'20px 50px 20px 30px',borderRadius:'8px',backgroundColor:'rgba(96, 71, 236, 0.1)',marginBottom:'25px'}}>Spent time on read:</h4>
            </div>
        <div style={{padding:'20px',borderRadius:'8px'}} className='bookmarked-blogs'>
        <h4 style={{paddingBottom:'20px'}}>Bookmarked Blogs:  {bookmarks.length}</h4>
        
            {
            bookmarks.map(bookmark=><Bookmark key={bookmark._id} bookmark={bookmark}></Bookmark>)
            }
        
        </div>
        </div>
        </div>
    );
};

export default Blogs;