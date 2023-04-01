import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import './Blogs.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    const [bookmarks,setBookmarks]=useState([]);
    const [totalReadTime,setTotalReadTime]=useState(0);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then (data=>setBlogs(data))
    }
    ,[]);
    const handleAddBookmark=(blog)=>{
    bookmarks.find(bookmark=>{
         if(bookmark._id===blog._id){
            toast("This blog has been added multiple times!");
  
        }
            
    })
    const newbookmarks=[...bookmarks,blog];
    setBookmarks(newbookmarks);
    };
    const handleMarkAsRead=(blog)=>{
        const nowTotalReadTime=parseInt(blog.readTime);
        const newTotalReadTime=totalReadTime+nowTotalReadTime;
        setTotalReadTime(newTotalReadTime);
        console.log(newTotalReadTime)
    }
   
    return (
       
        <div className='parent-container'>
            <div  className='blogs-container'>
         {
            blogs.map(blog=>
                <Blog key={blog._id} blog={blog} handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>
            )
         }
        </div>
        <div className='bookmarks-container'>
            <div className='spent-time-count'>
            <h4 style={{color:'#6047EC',border:'1px solid #6047EC',padding:'20px 50px 20px 30px',borderRadius:'8px',backgroundColor:'rgba(96, 71, 236, 0.1)',marginBottom:'25px'}}>Spent time on read: {totalReadTime} min</h4>
            </div>
        <div style={{padding:'20px',borderRadius:'8px'}} className='bookmarked-blogs'>
        <h4 style={{paddingBottom:'20px'}}>Bookmarked Blogs:  {bookmarks.length}</h4>
        
            {
            bookmarks.map(bookmark=><Bookmark key={bookmark._id} bookmark={bookmark}></Bookmark>)
            }
      <ToastContainer />
        </div>
        </div>
        </div>
    );
};

export default Blogs;