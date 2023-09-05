import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api"

const SingleArticle = () => {
    const {article_id} = useParams();
    const [article, setArticle] = useState(null)
    const [isLoading, setIsLoading] = useState(false);  
    const [isError, setIsError] = useState(false);

useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    api.fetchArticle(article_id)
    .then(data => {
        setIsLoading(false);

        if (data) {
        setArticle(data);
        } else {
            setArticle(null)
        }
    })
    .catch((err) => {
        setIsLoading(false);
        setIsError(true);
    })
}, [article_id]);


if (isLoading) return <p className="loading">Loading...</p>
if (isError) return <p>Something went wrong</p>
if (article === null) return <p>Article not found</p>
        
    return (
        <main className="single-article">
            <h2>{article.title}</h2>
            <h3>Written By: {article.author}</h3>
            <h4>Published on: {new Date(article.created_at).toLocaleDateString()}</h4>
            <img src ={article.article_img_url} alt={article.title} className="article-image"/> 
            <p>{article.body}</p>
            <p>#{article.topic}</p>
            <p>Votes: {article.votes}</p>
        </main>
    )
}


export default SingleArticle;

