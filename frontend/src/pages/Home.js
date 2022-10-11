import React from 'react';
import {Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <div className='homeCont'>
        <h1 className='title'>SPEED</h1>
        <div className='button'>
        <Link to="/showArticles">
            Show Articles
        </Link>
        </div>
        <div className='button'>
        <Link to="/createArticle">
            Create an Article
        </Link>
        </div>
        <div className='button'>
        <Link to="/completed">
            Analyse Articles
        </Link>
        </div>
    </div>
  )
}

export default Home