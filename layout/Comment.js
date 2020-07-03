import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Reply from './Reply';
import './Comment.css';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            replies: null,
            comment: null
        };
        this.submitReply = this.submitReply.bind(this);
    }

    async componentDidMount() {
        await this.refreshComment();
    }

    async refreshComment() {
        //const { match: { params } } = this.props;
        const replies = (await axios.get(`api/replies/${this.props.commentId}`)).data;
        this.setState({ replies });
        const comment = (await axios.get(`api/comment/${this.props.commentId}`)).data;
        this.setState({ comment });
        console.log(this.props.commentId);
        console.log(comment);
    }

    async submitReply(reply) {
        await axios.post(`api/replies/${this.state.comment._id}`, { reply });
        await this.refreshComment();
    }

    render() {
        const { comment, replies } = this.state;
        if (comment === null) return <p>No comments</p>;
        return (
            <div className="all-comments">
                <p>{comment.comment}</p>
                {replies && replies.map((reply) => (
                    <p id="reply-reply">{reply.reply}</p>
                ))}
                <Reply commentId={comment._id} submitReply={this.submitReply} />
            </div>

        )
    }
}

export default withRouter(Comment);