import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TableGrid } from '../components/TableGrid';
import './AnalystDisplay.css';
import HomeIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const AnalystDisplay = () => {
  const [articles, setArticles] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);
  let navigate = useNavigate();
  const buttonTest = (e) => {
    e.preventDefault();
    console.log(selectedRow);
    if(selectedRow.length === 1)
    {
      // console.log(selectedRow[0].id);

      navigate(`/analyse/${selectedRow[0].id}`);
    }
  };

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
          <HomeIcon data-testid="home" style={{ fontSize: '40px' }} />
        </Link>
      </div>
      <div className="content">
        {articles.length > 0 ? (
          <div className="tableCont">
            <TableGrid articles={articles} setSelectedRow={setSelectedRow} />
          </div>
        ) : (
          <h3
            data-testid="loading"
            style={{ margiTop: '10%', marginBottom: '10%' }}
          >
            Loading data...
          </h3>
        )}
        <div className="buttonContainer">
          <div className="analyse">
            <button className="analyseButton" onClick={buttonTest}>
              Analyse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalystDisplay;
