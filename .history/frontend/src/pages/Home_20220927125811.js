import React from 'react';
import {Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <h2>SPEED</h2>
        <div>
        <Link to="/showArticles">
            Show Articles
        </Link>
        </div>
        <div>
        <Link to="/createArticle">
            Create an Article
        </Link>
        </div>
        <div>
        <Link to="/showArticles">
            Approve an Article - Moderator only
        </Link>
        </div>
    </div>
  )
}

export default Home