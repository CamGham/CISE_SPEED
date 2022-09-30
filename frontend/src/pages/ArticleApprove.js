import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ModeratorTableGrid } from '../components/ModeratorTableGrid';
import {
  Checkbox,
  FormControlLabel,
  Select,
} from '@mui/material';

const ArticleApprove = () => {
  const [articles, setArticles] = useState([]);
  const [titleShow, setTitleShow] = useState(true);
  const [authorShow, setAuthorShow] = useState(true);
  const [journalShow, setJournalShow] = useState(true);
  const [volumeShow, setVolumeShow] = useState(true);
  const [versionShow, setVersionShow] = useState(true);
  const [pagesShow, setPagesShow] = useState(true);
  const [yearShow, setYearShow] = useState(true);
  const [doiShow, setDoiShow] = useState(true);
  const [statusShow, setStatusShow] = useState(true);

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

  const handleStatusChange = (event) => {
  setStatusShow(event.target.checked);
  };

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
          stausShow={!statusShow}
        />
      </div>
    </div>
  );
};

export default ArticleApprove;
