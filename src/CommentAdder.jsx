import { useState } from "react";
import { postComment } from "../api";

const CommentAdder = ({article_id, updateComments}) => {
    const [newComment, setNewComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    
    const handleSubmit = (e) => {
        setIsError(false);
        e.preventDefault();

        if (isSubmitting){
            return;
        }
        setIsSubmitting(true);

        postComment(article_id, newComment)
        .then((comment) => {
            updateComments(comment)
            setNewComment("")
            setIsSubmitting(false)
        })
        .catch((err) => {
            setIsError(true);
            setIsSubmitting(false);
        });
    }

    if (isError) return <p>Something went wrong. Please try again later</p>

    return (
        <form className="comment-adder" onSubmit={handleSubmit}>
            <label htmlFor="newComment">Add a comment</label>
            <textarea id="new-comment" 
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)} placeholder="Add a new comment"></textarea>
            <button type="submit" disabled={isSubmitting}>Add</button>
            <p className="is-submitting"> {isSubmitting ? "Adding your comment..." : ""} </p>
        </form>
    )
}

export default CommentAdder