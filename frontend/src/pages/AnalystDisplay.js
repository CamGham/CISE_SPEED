import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TableGrid } from '../components/TableGrid';
import './ArticleDisplay.css';
import HomeIcon from '@mui/icons-material/ArrowBack';

const AnalystDisplay = () => {
    const [articles, setArticles] = useState([]);

    
  useEffect(() => {
    const getArticles = async () => {
      await axios
        .get('http://localhost:8082/api/articles/accepted')
        .then((res) => {
          setArticles(res.data);
        })
        .catch((err) => {
          console.log('error');
        });
    };
    getArticles();
  }, []);


  return (
    <div className="doc">
      <h1>Analyst</h1>
      <div className="navCont">
        <Link to="/">
          <HomeIcon style={{ fontSize: '40px' }} />
        </Link>
      </div>
      
      {articles.length > 0 ? (
        <div className="tableCont">
          <TableGrid
            articles={articles}
          />
        </div>
      ) : (
        <h3
          data-testid="loading"
          style={{ margiTop: '10%', marginBottom: '10%' }}
        >
          Loading data...
        </h3>
      )}
    </div>
  )
}

export default AnalystDisplay