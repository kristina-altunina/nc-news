import React, { useEffect, useState } from 'react';
import CommentCard from "./CommentCard";
import * as api from '../api';
import CommentAdder from "./CommentAdder";

const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    api.fetchComments(article_id)
      .then(response => {
        setComments(response);
      })
      .catch((err) => {
        setError(true);
      });
  }, [article_id]);

  const updateComments = (newComment) => {
    setComments((prevComments) => {
      return [newComment, ...prevComments];
    });
  };

  if (error) return <p>Failed to fetch comments</p>;

  return (
    <section className="comments-list">
      <h3>Comments</h3>
      <CommentAdder article_id={article_id} updateComments={updateComments} />
      <ul>
        {comments.map((comment) => {
          return (
          <CommentCard key={comment.comment_id} comment={comment} />
          )})}
      </ul>
    </section>
  );
};

export default CommentList;
