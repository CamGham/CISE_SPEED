import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ModeratorTableGrid } from '../components/ModeratorTableGrid';
// import {
//   Checkbox,
//   FormControlLabel,
//   Select,
// } from '@mui/material';

const ArticleApprove = () => {
  const [articles, setArticles] = useState([]);
  const [titleShow] = useState(true);
  const [authorShow] = useState(true);
  const [journalShow] = useState(true);
  const [volumeShow] = useState(true);
  const [versionShow] = useState(true);
  const [pagesShow] = useState(true);
  const [yearShow] = useState(true);
  const [doiShow] = useState(true);
  const [statusShow] = useState(true);

  const getArticles = async () => {
    await axios
      .get('http://localhost:8082/api/articles')
      .then((res) => {
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
      <h1>Article Moderation Display</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
     
      <div>
        {/**
         * data table div
         */}
        <ModeratorTableGrid
          articles={articles}
          titleShow={!titleShow}
          authorShow={!authorShow}
          journalShow={!journalShow}
          volumeShow={!volumeShow}
          versionShow={!versionShow}
          pagesShow={!pagesShow}
          yearShow={!yearShow}
          doiShow={!doiShow}
          statusShow={!statusShow}
        />
      </div>
      <div>
      </div>
    </div>
  );
};

export default ArticleApprove;
