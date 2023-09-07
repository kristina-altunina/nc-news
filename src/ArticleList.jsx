import React from "react";
import { useEffect, useState } from 'react';
import ArticleCard from "./ArticleCard";
import * as api from '../api'

const ArticleList = () => {

const [articles, setArticles] = useState([]);
  
  useEffect (() => {
    api.fetchArticles().then(data => {
        setArticles(data.articles);
    })
    .catch((err) => {
        console.log(err)
    })
}, []);

    return (
        <section>
            <h2>All Articles</h2>
            <ul className="article-list">
                {articles.map(article => {
                return <ArticleCard key={article.article_id} article={article} />
                })}
            </ul>
        </section>
        
    )
}


export default ArticleList;