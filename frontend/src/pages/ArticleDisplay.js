import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TableGrid } from '../components/TableGrid';

const ArticleDisplay = () => {
  const [articles, setArticles] = useState([]);
  // let articleList = useRef();

  const getArticles = async () => {
    await axios
      .get('http://localhost:8082/api/articles')
      .then((res) => {
        console.log(res.data);
        setArticles(res.data);
      })
      .catch((err) => {
        console.log('error');
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <h1>Display</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div >
        <TableGrid articles={articles} />
        
      </div>
    </div>
  );
};

export default ArticleDisplay;
