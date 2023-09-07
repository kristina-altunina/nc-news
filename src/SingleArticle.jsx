import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api"
import CommentList from "./CommentList";

const SingleArticle = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState({});
    const [updateVote, setUpdateVote] = useState(0);
    const [isLoading, setIsLoading] = useState(false);  
    const [isError, setIsError] = useState(false);
    const [voteError, setVoteError] = useState(false);

useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    api.fetchArticle(article_id)
    .then(data => {
        setIsLoading(false);
        setArticle(data);
        setUpdateVote(data.votes);
    })
    .catch((err) => {
        setIsLoading(false);
        setIsError(true);
    })
}, [article_id]);

const handleVote = (vote) => {
    api.patchArticle(article_id, vote)
        .then(() => {
            setUpdateVote(updateVote + vote)
            setVoteError(false)
        })
        .catch((err) => {
            console.log(updateVote);
            setVoteError(true);
})
}

if (isLoading) return <p className="loading">Loading...</p>
if (isError) return <p>Something went wrong</p>
    
    return (
        <main className="single-article">
            <h2>{article.title}</h2>
            <h3>Written By: {article.author}</h3>
            <h4>Published on: {new Date(article.created_at).toLocaleDateString()}</h4>
            <img src ={article.article_img_url} alt={article.title} className="article-image"/> 
            <p>{article.body}</p>
            <p>#{article.topic}</p>
            <p>Votes: {updateVote}</p>
            <button onClick={() => handleVote(1)}>👍</button>
            <button onClick={() => handleVote(-1)}>👎</button>
            <p className="vote-error"> {voteError ? "Something went wrong. Please try again" : ""} </p>
            <CommentList article_id={article_id} />
        </main>
    )
}


export default SingleArticle;

