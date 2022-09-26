import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TableGrid } from '../components/TableGrid';
import { Checkbox, FormControlLabel } from '@mui/material';

const ArticleDisplay = () => {
  const [articles, setArticles] = useState([]);
  const [titleShow, setTitleShow] = useState(true);
  const [authorShow, setAuthorShow] = useState(true);
  const [journalShow, setJournalShow] = useState(true);
  const [volumeShow, setVolumeShow] = useState(true);
  const [versionShow, setVersionShow] = useState(true);
  const [pagesShow, setPagesShow] = useState(true);
  const [yearShow, setYearShow] = useState(true);
  const [doiShow, setDoiShow] = useState(true);
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

  const handleTitleChange = (event) => {
    setTitleShow(event.target.checked);
  };
  const handleAuthorChange = (event) => {
    setAuthorShow(event.target.checked);
  };
  const handleVolumeChange = (event) => {
    setVolumeShow(event.target.checked);
  };
  const handleJournalChange = (event) => {
    setJournalShow(event.target.checked);
  };
  const handleVersionChange = (event) => {
    setVersionShow(event.target.checked);
  };
  const handlePagesChange = (event) => {
    setPagesShow(event.target.checked);
  };
  const handleYearChange = (event) => {
    setYearShow(event.target.checked);
  };
  const handleDoiChange = (event) => {
    setDoiShow(event.target.checked);
  };

  return (
    <div>
      <h1>Display</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <TableGrid
          articles={articles}
          titleShow={!titleShow}
          authorShow={!authorShow}
          journalShow={!journalShow}
          volumeShow={!volumeShow}
          versionShow={!versionShow}
          pagesShow={!pagesShow}
          yearShow={!yearShow}
          doiShow={!doiShow}
        />
      </div>
      <div>
        <h3>Filters</h3>
        <FormControlLabel
          label="Title"
          control={
            <Checkbox checked={titleShow} onChange={handleTitleChange} />
          }
        />
        <FormControlLabel
          label="Authors"
          control={
            <Checkbox checked={authorShow} onChange={handleAuthorChange} />
          }
        />
        <FormControlLabel
          label="Journal"
          control={
            <Checkbox checked={journalShow} onChange={handleJournalChange} />
          }
        />
        <FormControlLabel
          label="Volume"
          control={
            <Checkbox checked={volumeShow} onChange={handleVolumeChange} />
          }
        />
        <FormControlLabel
          label="Version"
          control={
            <Checkbox checked={versionShow} onChange={handleVersionChange} />
          }
        />
        <FormControlLabel
          label="Pages"
          control={
            <Checkbox checked={pagesShow} onChange={handlePagesChange} />
          }
        />
        <FormControlLabel
          label="Year"
          control={<Checkbox checked={yearShow} onChange={handleYearChange} />}
        />
        <FormControlLabel
          label="DOI"
          control={<Checkbox checked={doiShow} onChange={handleDoiChange} />}
        />
      </div>
    </div>
  );
};

export default ArticleDisplay;
