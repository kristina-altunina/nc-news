import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://news-j34n.onrender.com/api/"
});

export const fetchArticles = () => {
    return (
        newsApi.get("articles").then(({data}) => {
            return data;
        })
    )
}

export const fetchPopularArticles = () => {
    return (
        newsApi.get("articles?sortBy=votes").then(({data}) => {
            return data;
        })
    )
}

export const fetchArticle = (article_id) => {
    return (
        newsApi.get(`articles/${article_id}`).then(({data}) => {
            return data.article;
        })
    )
}

export const patchArticle = (article_id, inc_votes) => {
    const vote =  {inc_votes};
    
    return (
        newsApi.patch(`articles/${article_id}`, vote).then(({data}) => {
            return data.article;
        })
    )
}

export const fetchComments = (article_id) => {
    return (
        newsApi.get(`articles/${article_id}/comments`).then(({data}) => {
            return data.comments;
        })
    )
}

export const postComment = (article_id, comment) => {
    const newComment = {
                        username: "jessjelly",
                        body: comment
                        }
    return (
        newsApi.post(`articles/${article_id}/comments`, newComment).then(({data}) => {
            return data.comment;
        })
    )}

export const fetchTopics = () => {
    return (
        newsApi.get("topics").then(({data}) => {
                return data;
        })
    )
}
    
export const fetchArticleByTopic = (topicChoice, sortBy) => {
    return (
        newsApi.get(`articles`).then(({data}) => {
            let articles = data.articles.filter(article => article.topic === topicChoice);
            
            if (sortBy === "date-desc") {
                articles.sort((a, b) => { 
                    return new Date(b.created_at) - new Date(a.created_at);
                    })
                }

            if (sortBy === "date-asc") {
                articles.sort((a, b) => { 
                    return new Date(a.created_at) - new Date(b.created_at);
                    })
                }

            if (sortBy === "commentCount-desc") {
                articles.sort((a, b) => { 
                    return b.comment_count - a.comment_count;
                    })
                }

            if (sortBy === "commentCount-asc") {
                articles.sort((a, b) => { 
                    return a.comment_count - b.comment_count;
                    })
                }

            if (sortBy === "votes-desc") {
                articles.sort((a, b) => { 
                    return b.votes - a.votes;
                    })
                }
    
            if (sortBy === "votes-asc") {
                articles.sort((a, b) => { 
                    return a.votes - b.votes;
                    })
                }

            return articles;
        })
    )
}    
