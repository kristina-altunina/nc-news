import axios from "axios"

export const fetchArticles = () => {
    return (
        axios.get("https://news-j34n.onrender.com/api/articles")
        .then(({data}) => {
            return data;
        })
    )
}

export const fetchPopularArticles = () => {
    return (
        axios.get("https://news-j34n.onrender.com/api/articles?sortBy=votes")
        .then(({data}) => {
            return data;
        })
    )
}

export const fetchArticle = (article_id ) => {
    return (
        axios.get(`https://news-j34n.onrender.com/api/articles/${article_id}`)
        .then(({data}) => {
            return data.article;
        })
        .catch((err) => {
            console.log(err);
        })
    )
}

