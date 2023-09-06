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

export const patchArticle = (article_id, inc_votes) => {
    const vote =  {inc_votes};

    return (
        axiosInstance.patch(`articles/${article_id}`, vote).then(({data}) => {
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
        axiosInstance.post(`articles/${article_id}/comments`, newComment).then(({data}) => {
            return data.comment;
        })
    )}
    