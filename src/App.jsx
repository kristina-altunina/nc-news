import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./Header";
import Home from './Home';
import ArticleList from './ArticleList';
import { Link } from "react-router-dom";

const App = () => {
  
return (
<main className='App'>
   <Header />
   <div className='main-container'>
     <nav className='navigation'> Navigation
      <ul className='list'>
         <li><Link to="/">Home</Link></li>   
         <li>Topic</li>
         <li>Topic</li>
         <li>Topic</li>
         <li>Topic</li>
         <li>Topic</li>
         <li>Topic</li>
         <li>Topic</li>
      </ul>
     </nav>
   <Routes> 
      <Route path="/" element = {<Home />} />
      <Route path="/articles" element = {<ArticleList />} />
   </Routes>
   </div>
</main>
  )
}

export default App;

