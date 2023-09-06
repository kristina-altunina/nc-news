import React from "react";


const CommentCard = ({comment}) => {
    return (
        <div className="comment-card">
            <h4>{comment.author}</h4>
            <h5>{new Date(comment.created_at).toLocaleDateString()}</h5>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
        </div>
    )
}


export default CommentCard;