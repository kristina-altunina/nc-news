import React from "react";
import { useEffect, useState } from 'react';
import ArticleCard from "./ArticleCard";
import * as api from '../api'

const Home = () => {
const [popularArticles, setPopularArticles] = useState([]);
  
  useEffect (() => {
    api.fetchArticles().then(data => {
        console.log(data);
        const sortedArticles = data.articles.sort((a, b) => (a.votes - b.votes)) //check if this works when I create a button to vote
        setPopularArticles(sortedArticles.slice(0, 5));
    })
    .catch((err) => {
        console.log(err)
    })
}, []);

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