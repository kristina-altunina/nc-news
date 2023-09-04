import React from "react";

const ArticleCard = ({article}) => {
    return (
        <div className="article-card">
            <h3>{article.title}</h3>
            <p>{article.content}</p>
            <p>Votes: {article.votes}</p>
        </div>
    )
}


export default ArticleCard;