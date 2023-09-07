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
    
export const fetchArticleByTopic = (slug) => {
    return (
        newsApi.get(`articles`).then(({data}) => {
            const articles = data.articles.filter(article => article.topic === slug);
            return articles;
        })
    )
}    
