import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import * as api from "../api";

const SingleTopic = () => {
    const { topicName } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const sortBy = [
        {value: 'date-desc', label: 'Date: latest to oldest'},
        {value: 'date-asc', label: 'Date: oldest to latest'}, 
        {value: 'commentCount-desc', label: 'Comment count: most to least'}, 
        {value: 'commentCount-asc', label: 'Comment count: least to most'}, 
        {value: 'votes-desc', label: 'Votes: most to least'},
        {value: 'votes-asc', label: 'Votes: least to most'}
    ];

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);  
    const [isError, setIsError] = useState(false);
    const [selected, setSelected] = useState(sortBy[0].value);

    const fetchArticle = (topicName, sortByOption) => {
        setIsLoading(true);
        setIsError(false);
    
        api.fetchArticleByTopic(topicName, sortByOption).then(data => {
            setIsLoading(false);
            setArticles(data);
        })
        .catch((err) => {
            setIsLoading(false);
            setIsError(true);
        })
    }
    useEffect (() => {
        fetchArticle(topicName, selected)
    }, [topicName]);

    if (isLoading) return <p className="loading">Loading...</p>
    if (isError) return <p>Something went wrong</p>

    const handleChange = (e) => {
        let params = {sortBy: e.value};
        setSearchParams(params);

        setSelected(e.value);
        fetchArticle(topicName, e.value)
    };

    return (
        <div className="single-topic-container">
            <h2 className="topic-page-title">Articles about {topicName}</h2>
            <div>
                <Dropdown options={sortBy} onChange={handleChange} value={selected} placeholder="Sort from" />
                    </div>
            <ul className="article-list">
                    {articles.map(article => {
                    return <ArticleCard key={article.article_id} article={article} className="article-card" />
                    })}
                </ul>
        </div>
    )
    }

    

export default SingleTopic;



