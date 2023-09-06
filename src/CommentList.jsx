import React from "react";
import { useEffect, useState } from 'react';
import CommentCard from "./CommentCard";
import * as api from '../api'

const CommentList = ({article_id}) => {
  const [comments, setComments] = useState([]);
  
  useEffect (() => {
    api.fetchComments(article_id)
    .then(response => {
        console.log(response.comments);
        setComments(response.comments);
    })
    .catch((err) => {
        console.log(err);;
    });
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