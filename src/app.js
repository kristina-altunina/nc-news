// const express = require('express');
// const app = express();
// const cors = require('cors');

// app.use(cors())
// app.use(express.json());

// app.patch("/api/articles/:article_id", (req, res) => {
//     const { article_id } = req.params;
//     const { increase, decrease } = req.body;

//     const articleToPatch = articles.find(
//         (article) => article.article_id === article_id
//     );

//     if(!articleToPatch) {
//         return res.status(404).json({error: "Article not found"})
//     }
//     if (increase){
//         articleToPatch.votes += +increase;
//     }
//     if (decrease){
//         articleToPatch.votes -= +decrease;
//     }
//     setTimeout(() => {
//         res.send({ article: articleToPatch })
//     })
// })