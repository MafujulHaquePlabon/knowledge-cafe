import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

import './Blogs.css'

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then (data=>setBlogs(data))
    }
    ,[]);
    return (
       
        <div className='parent-container'>
            <div  className='blogs-container'>
         {
            blogs.map(blog=>
                <Blog key={blog._id} blog={blog}></Blog>
            )
         }
        </div>
        <div className='bookmarks-container'>
            <div className='spent-time-count'>
            <h4>Spent time on read:</h4>
            </div>
        <div className='bookmarked-blogs'>
        <h4>Bookmarked Blogs:</h4>
        </div>
        </div>
        </div>
    );
};

export default Blogs;