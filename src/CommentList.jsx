import React from "react";
import { useEffect, useState } from 'react';
import CommentCard from "./CommentCard";
import * as api from '../api'

const CommentList = ({article_id}) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);

  useEffect (() => {
    setError(false);

    api.fetchComments(article_id)
    .then(response => {
        setComments(response.comments);
    })
    .catch((err) => {
        setError(true)
    });

if (error) return <p>Failed to fetch comments</p>

}, [article_id]);

    return (   
        <section className="comments-list">
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => {
                return <CommentCard key={comment.id} comment={comment} />
                })}
            </ul>
        </section>
        
    )
}
    export default CommentList;