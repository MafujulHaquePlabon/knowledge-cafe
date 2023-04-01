import React from 'react';

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    return (
        <div>
            <h5  style={{color:'#6047EC',padding:'20px',borderRadius:'8px',backgroundColor:' #FFFFFF',marginBottom:'25px'}}>{bookmark.blogTitle}</h5>
        </div>
    );
};

export default Bookmark;