import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./Header";
import Home from './Home';
import ArticleList from './ArticleList';
import SingleArticle from './SingleArticle';
import TopicsList from "./TopicsList";
import SingleTopic from "./SingleTopic";
import { Link } from "react-router-dom";

const App = () => {

return (
<main className='App'>
   <Header />
   <div className='main-container'>
     <nav className='navigation'> Navigation
      <ul className='list'>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/topics">All Topics</Link></li>
      </ul>
     </nav>
   <Routes> 
      <Route path="/" element = {<Home />} />
      <Route path="/articles" element = {<ArticleList />} />
      <Route path="/articles/:article_id" element = {<SingleArticle />} />
      <Route path="/topics" element = {<TopicsList />} />
      <Route path="/topics/:topicName" element = {<SingleTopic />} />
   </Routes>
   </div>
</main>
  )
}

export default App;
