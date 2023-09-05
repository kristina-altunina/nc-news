import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./Header";
import Home from './Home';
import ArticleList from './ArticleList';
import SingleArticle from './SingleArticle';
import { Link } from "react-router-dom";

const App = () => {

return (
<main className='App'>
   <Header />
   <div className='main-container'>
     <nav className='navigation'> Navigation
      <ul className='list'>
         <li><Link to="/">Home</Link></li>
      </ul>
     </nav>
   <Routes> 
      <Route path="/" element = {<Home />} />
      <Route path="/articles" element = {<ArticleList />} />
      <Route path="/articles/:article_id" element = {<SingleArticle />} />
   </Routes>
   </div>
</main>
  )
}

export default App;




{/*
<li><Link to="/articles?topic=coding">#coding</Link></li>
         <li><Link to="/articles?topic=football">#football</Link></li> 
         <li><Link to="/articles?topic=cooking">#cooking</Link></li>*/}