import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import locationPin1 from '../layout/locationPin1.png';
import dollar from '../layout/dollar.png';
import country from '../layout/country.png';
import category from '../layout/category.png';
import liked from '../layout/liked.png';
import unliked from '../layout/unliked.png';
import './Likes.css';
// import { Button } from 'reactstrap';

class Likes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: false,
            likes: null
        }
    }

    async componentDidMount() {
        const postLikes = (await axios.get(`/api/posts/${this.props.post._id}`)).data;
        const likes = postLikes.likes;
        this.setState({ likes });
    }

    async refresh() {
        const postLikes = (await axios.get(`/api/posts/${this.props.post._id}`)).data;
        const likes = postLikes.likes;
        this.setState({ likes });
    }

    changeCount = () => {
        /*
        axios.post(`api/like/${this.props.post._id}`).
            then(() => this.setState(prevState => ({ count: prevState.count = 1 })))
            */
        this.setState({ count: !this.state.count });
        console.log(this.state.count);
        const numOfLikes = { likes: this.state.likes };
        if (this.state.count === false) {
            axios.post(`api/like/${this.props.post._id}`, numOfLikes).then(this.refresh());
        } else {
            axios.post(`api/unlike/${this.props.post._id}`, numOfLikes).then(this.refresh());
        }

    }
    //<p><button onClick={this.incrementCount}> 😻Likes: {this.state.count}</button></p>
    render() {
        const post = this.props.post;
        return (
            <div key={post._id} className="col-sm-12 col-md-4 col-lg-3">
                <div className="all-posts">
                    <h5>{post.title}</h5>
                    <p>{post.country && <img src={country} alt="country"></img>}{post.country}</p>
                    <p>{post.category && <img src={category} alt="category"></img>}{post.category}</p>
                    <p>{post.location && <img src={locationPin1} alt="place"></img>}{post.location}</p>
                    <p>{post.budget && <img src={dollar} alt="budget"></img>}{post.budget}</p>
                    <p>{post.review}</p>
                    <div className="corner">
                        <p>😻Likes: {this.state.likes}</p>
                    </div>

                    <p><button onClick={this.changeCount}> {this.state.count ? <p><img src={liked} alt="liked"></img>Unlike</p> : <p><img src={unliked} alt="unliked"></img>Like</p>} </button></p>
                    <Link to={`/${post._id}`}>
                        Read More...
                </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Likes);