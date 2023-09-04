import axios from "axios"

export const fetchArticles = () => {
    return (
        axios.get("https://news-j34n.onrender.com/api/articles")
        .then(({data}) => {
            console.log(data);
            return data;
        })
    )
}

export const fetchPopularArticles = () => {
    return (
        axios.get("https://news-j34n.onrender.com/api/articles")
        .then(({data}) => {
            return data;
        })
    )
}



