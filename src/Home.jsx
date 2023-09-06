import React from "react";
import { useEffect, useState } from 'react';
import ArticleCard from "./ArticleCard";
import * as api from '../api';

const Home = () => {
const [popularArticles, setPopularArticles] = useState([]);
const [isLoading, setIsLoading] = useState(false);  
const [isError, setIsError] = useState(false);

  useEffect (() => {
    setIsLoading(true);
    setIsError(false);
    
    api.fetchArticles().then(data => {
        const sortedArticles = data.articles.sort((a, b) => (b.votes - a.votes)) //check if this works when I create a button to vote
        setIsLoading(false);
        setPopularArticles(sortedArticles.slice(0, 5));
    })
    .catch((err) => {
        setIsLoading(false);
        setIsError(true);
    })
}, []);

if (isLoading) return <p className="loading">Loading...</p>
if (isError) return <p>Something went wrong</p>

return (
    <section>
        <main className="main-container">
            <div className="main-content">
            <h2 className="popular-articles">Most Popular Articles: </h2>
            <div>
                <ul className="article-list">
                    {popularArticles.map(article=>{
                        return <ArticleCard key={article.article_id} article={article} />
                    })}
                </ul>
                </div>
            </div>
        </main>
    </section>
)
        }

export default Home


//StackOverflow - sort by descending order //stackoverflow.com/questions/44535972/react-js-sort-by-ascending-and-descending