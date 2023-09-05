import React from "react";
import { useEffect, useState } from 'react';
import ArticleCard from "./ArticleCard";
import * as api from '../api'

const ArticlesByTopic = ({topic}) => {

const [articles, setArticles] = useState([]);
  
  useEffect (() => {
    api.fetchArticlesByTopic(topic).then(data => {
        setArticles(data.articles);
    })
    .catch((err) => {
        console.log(err)
    })
}, [topic]);

    return (
        <section>
            <h2>Articles about {`${topic}`}</h2>
            <ul className="article-list">
                {articles.map(article => {
                return <ArticleCard key={article.id} article={article} />
                })}
            </ul>
        </section>
        
    )
}


export default ArticlesByTopic;