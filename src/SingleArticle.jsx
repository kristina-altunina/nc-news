import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api"
import CommentList from "./CommentList";

const SingleArticle = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState({})
    const [articleCurrentVotes, setArticleCurrentVotes] = useState(0);
    const [newVote, setNewVote] = useState(0);
    const [isLoading, setIsLoading] = useState(false);  
    const [isError, setIsError] = useState(false);


useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    api.fetchArticle(article_id)
    .then(data => {
        setIsLoading(false);
        setArticle(data);
        setArticleCurrentVotes(data.votes);
        setNewVote(data.votes);
        
        if (!data) {
        setIsError(true);
        }
    })
    .catch((err) => {
        setIsLoading(false);
        setIsError(true);
    })
}, [article_id]);

if (isLoading) return <p className="loading">Loading...</p>
if (isError) return <p>Not found</p>


const handleVote = (vote) => {
    if (vote === "up") {
        setNewVote(newVote + 1)
    } else if (vote === "down") {
        setNewVote(newVote - 1)
    }
}

        
    return (
        <main className="single-article">
            <h2>{article.title}</h2>
            <h3>Written By: {article.author}</h3>
            <h4>Published on: {new Date(article.created_at).toLocaleDateString()}</h4>
            <img src ={article.article_img_url} alt={article.title} className="article-image"/> 
            <p>{article.body}</p>
            <p>#{article.topic}</p>
            <p>Votes: {newVote}</p>
            <button onClick={() => handleVote("up")}>👍</button>
            <button onClick={() => handleVote("down")}>👎</button>
            <CommentList article_id={article_id} />
        </main>
    )
}


export default SingleArticle;

