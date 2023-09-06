import { useState } from "react";
import { postComment } from "../api";

const CommentAdder = ({article_id, updateComments}) => {
    const [newComment, setNewComment] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        postComment(article_id, newComment)
        .then((comment) => {
            updateComments(comment)
            setNewComment("")
        })
        .catch((error) => {
            console.error("Error adding comment:", error);
        });
    }

    return (
        <form className="comment-adder" onSubmit={handleSubmit}>
            <label htmlFor="newComment">Add a comment</label>
            <textarea id="new-comment" 
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)}></textarea>
            <button>Add</button>
        </form>
    )
}

export default CommentAdder