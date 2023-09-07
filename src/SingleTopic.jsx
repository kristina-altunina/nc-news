import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard"
import * as api from "../api";

const SingleTopic = () => {
    const { topicName } = useParams();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);  
    const [isError, setIsError] = useState(false);

    useEffect (() => {
        setIsLoading(true);
        setIsError(false);
    
        api.fetchArticleByTopic(topicName).then(data => {
            setIsLoading(false);
            setArticles(data);
        })
        .catch((err) => {
            setIsLoading(false);
            setIsError(true);
        })
    }, [topicName]);

    if (isLoading) return <p className="loading">Loading...</p>
    if (isError) return <p>Something went wrong</p>

    return (
        <div className="single-topic-container">
            <h2 className="topic-page-title">Articles about {topicName}</h2>
            <ul className="article-list">
                    {articles.map(article => {
                    return <ArticleCard key={article.article_id} article={article} className="article-card" />
                    })}
                </ul>
        </div>
    )
    }

export default SingleTopic;