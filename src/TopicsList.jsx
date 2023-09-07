import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from '../api'

const TopicsList = () => {
const [topics, setTopics] = useState([]);
const [isLoading, setIsLoading] = useState(false);  
const [isError, setIsError] = useState(false);
  
useEffect (() => {
    setIsLoading(true);
    setIsError(false);

    api.fetchTopics().then(data => {
        setIsLoading(false);
        setTopics(data.topics);
    })
    .catch((err) => {
        setIsLoading(false);
        setIsError(true);
    })
}, []);

if (isLoading) return <p className="loading">Loading...</p>
if (isError) return <p>Something went wrong</p>

return (
    <div className="topics-list-container">
        <h2>All Topics</h2>
        <ul className="topics-list">
            {topics.map((topic) => {
                return <li key={topic.slug} className="topic-card">
                    <Link to={`/topics/${topic.slug}`} className="topic-link">{topic.slug}</Link>
                </li>
            })}
        </ul>
    </div>
)

}


export default TopicsList;