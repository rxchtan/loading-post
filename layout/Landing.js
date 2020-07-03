import React, { Component } from "react";
//import { Link } from "react-router-dom";
import './Landing.css';
import newLogo from '../layout/newLogo2.png';

class Landing extends Component {
    render() {
        return (
            
            <div className="landing-container">

                <div className="row">
                    <h4>Welcome to </h4>
                    <img id="palsLogo" src={newLogo} alt="logo"></img>
                </div>
                <div>
                    <p>Share your SEP experience with your peers by leaving a review :-)</p>
                </div>
            </div>
        );
    }
}
export default Landing;