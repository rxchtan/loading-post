import React, { Component } from "react";
import { Link } from "react-router-dom";
import newLogo1 from '../layout/newLogo1.png';
import './NavBar.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav-bar">
                    <div>
                        <Link to="/"><img id="palsLogo1" src={newLogo1} alt="logo"></img></Link>
                    </div>

                    <ul className="nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/allPosts">All Posts</a></li>
                        <li><a href="/createPost">Create Post</a></li>
                    </ul>

                    <div className="reg-log">
                        <Link id="reg-btn" to="/register">
                            <button className="btn draw-border">Register</button></Link>
                        <Link id="log-btn" to="/login">
                            <button className="btn draw-border">Login</button></Link>
                    </div>

                </nav>
            </div>
        );
    }
}
export default Navbar;