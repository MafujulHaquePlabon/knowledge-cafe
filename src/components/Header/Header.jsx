import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'><nav>
        <h2>Knowledge Cafe</h2>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Login</a></li>
            <li><a href="">Sign_Up</a></li>
        </ul>
        <div>
            <img className='header-profile' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
        </div>
    </nav>
    <hr />
    </div>
    );
};

export default Header;