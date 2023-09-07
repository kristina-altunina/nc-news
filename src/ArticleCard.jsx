import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({article}) => {
    return (
        <div className="article-card">
            <h3>
              <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
                </h3>
            <h4>Written By: {article.author}</h4>
            <h4>Published on: {new Date(article.created_at).toLocaleDateString()}</h4>
            <img src={article.article_img_url} alt={article.title} />
            <p>#{article.topic}</p>
            <p>Votes: {article.votes}</p>
        </div>
    )
}


export default ArticleCard;