import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://news-j34n.onrender.com/api/"
});

export const fetchArticles = () => {
    return (
        axiosInstance.get("articles").then(({data}) => {
            return data;
        })
    )
}

export const fetchPopularArticles = () => {
    return (
        axiosInstance.get("articles?sortBy=votes").then(({data}) => {
            return data;
        })
    )
}

export const fetchArticle = (article_id) => {
    return (
        axiosInstance.get(`articles/${article_id}`).then(({data}) => {
            return data.article;
        })
        .catch((err) => {
            console.log(err);
        })
    )
}

export const fetchComments = (article_id) => {
    return (
        axiosInstance.get(`articles/${article_id}/comments`).then(({data}) => {
            return data;
        })
    )
}
