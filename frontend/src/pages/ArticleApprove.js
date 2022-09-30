import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ModeratorTableGrid } from '../components/ModeratorTableGrid';
import {
  Checkbox,
  FormControlLabel,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
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

  
  const [seStatus, setSeStatus] = useState('');

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
  const handleStatusChange = (event) => {
    let selected = event.target.value;

    setSeStatus(selected);
  };

  return (
    <div>
      <h1>Article Moderation Display</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {/**
         * dropdowns div
         */}
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="moderation-dropdown">Moderation Status</InputLabel>
          <Select
            labelId="sestatus-dropdown"
            id="sestatus-dropdown"
            value={seStatus}
            label="sestatus"
            onChange={handleStatusChange}
          >
            <MenuItem value={' '}>Show all</MenuItem>
            <MenuItem value={'pending'}>Pending</MenuItem>
            <MenuItem value={'accepted'}>Accepted</MenuItem>
            <MenuItem value={'rejected'}>Rejected</MenuItem>
          </Select>
        </FormControl>
        {/* <FormControl sx={{ m: 1, minWidth: 85 }}>
          <InputLabel id="claim-dropdown">Claim</InputLabel>
          <Select
            labelId="claim-dropdown"
            id="claim-dropdown"
            // value={claim}
            label="Claim"
            autoWidth
            // onChange={handleClaimChange}
          >
            <MenuItem value={'Improves product quality'}>
              Improves product quality
            </MenuItem>
            <MenuItem value={'Improves code quality'}>
              Improves code quality
            </MenuItem>
            <MenuItem value={'Improves team confidence'}>
              Improves team confidence
            </MenuItem>
          </Select>
        </FormControl> */}
      </div>
      <div>
        {/**
         * years filter div
         */}
        <b>years: </b>
        <input placeholder="from"></input>-<input placeholder="to"></input>
        <button>show</button>
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
        />
      </div>
      <div>
        {/**
         * checkbox filter div
         */}
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

export default ArticleApprove;
