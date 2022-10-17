import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TableGrid } from '../components/TableGrid';
import {
  Checkbox,
  FormControlLabel,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from '@mui/material';
import './ArticleDisplay.css';
import HomeIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';

const ArticleDisplay = () => {
  const [articles, setArticles] = useState([]);
  const [titleShow, setTitleShow] = useState(true);
  const [authorShow, setAuthorShow] = useState(true);
  const [journalShow, setJournalShow] = useState(true);
  const [volumeShow, setVolumeShow] = useState(false);
  const [versionShow, setVersionShow] = useState(false);
  const [pagesShow, setPagesShow] = useState(false);
  const [yearShow, setYearShow] = useState(false);
  const [doiShow, setDoiShow] = useState(true);
  const [claimShow, setClaimShow] = useState(true);
  const [semethodShow, setSemethodShow] = useState(true);

  const [seMethod, setSeMethod] = useState('');
  const [claim, setClaim] = useState('');
  const [titleSearch, setTitleSearch] = useState();
  const [notFound, setNotFound] = useState(false);

  const getArticles = async () => {
    await axios
      .get('/api/articles/completed')
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

  useEffect(() => {
    const getArticlesByFilter = async () => {
      const myUrl = new URL('https://cise-speed-three-deploy.herokuapp.com/api/articles/filter');
      if (seMethod !== '') {
        myUrl.searchParams.append('semethod', seMethod);
      }
      if (claim !== '') {
        myUrl.searchParams.append('claim', claim);
      }
      myUrl.searchParams.append('status', 'completed');
      await axios
        .get(myUrl)
        .then((res) => {
          setArticles(res.data);
        })
        .catch((err) => {});
    };
    getArticlesByFilter();
  }, [seMethod, claim]);

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
    console.log(event);
    setDoiShow(event.target.checked);
  };

  const handleClaimShow = (event) => {
    console.log(event);
    setClaimShow(event.target.checked);
  };

  const handleSemethodShow = (event) => {
    console.log(event);
    setSemethodShow(event.target.checked);
  };
  const handleMethodChange = (event) => {
    setSeMethod(event.target.value);
  };
  const handleClaimChange = (event) => {
    setClaim(event.target.value);
  };

  const handleSearch = async () => {
    if (titleSearch === '') {
      getArticles();
    } else {
      const myUrl = new URL('/api/articles/bytitle');
      myUrl.searchParams.append('title', titleSearch);
      await axios
        .get(myUrl)
        .then((res) => {
          if (res.data.length === 0) {
            setNotFound(true);
          } else {
            setNotFound(false);
            setArticles(res.data);
          }
        })
        .catch((err) => {});
    }
  };

  const handleReset = () => {
    getArticles();
    setClaim('');
    setSeMethod('');
    setNotFound(false);
    setTitleSearch('');
  };

  return (
    <div className="doc">
      <h1>Display</h1>
      <div className="navCont">
        <Link to="/">
          <HomeIcon style={{ fontSize: '40px' }} />
        </Link>
      </div>
      <div className="topCont">
        <div className="searchCont">
          <input
            data-testid="search-bar"
            className="title-search"
            placeholder="Search by title"
            value={titleSearch}
            onChange={(e) => setTitleSearch(e.target.value)}
          ></input>
          <button
            style={{ backgroundColor: 'transparent', borderStyle: 'none' }}
            onClick={handleSearch}
          >
            {<SearchIcon />}
          </button>
        </div>
        {notFound && (
          <h3 style={{ marginLeft: '45px', color: 'red' }}>
            No articles found
          </h3>
        )}
        <div className="dropdownCont">
          <FormControl
            sx={{ m: 1, minWidth: 120, background: '#ffff', borderRadius: 1 }}
          >
            <InputLabel id="semethod-dropdown">SE-Method</InputLabel>
            <Select
              labelId="semethod-dropdown"
              id="semethod-dropdown"
              value={seMethod}
              label="semethod"
              onChange={handleMethodChange}
            >
              <MenuItem value={''}>Show all</MenuItem>
              <MenuItem value={'TDD'}>TDD</MenuItem>
              <MenuItem value={'BDD'}>BDD</MenuItem>
              <MenuItem value={'ATDD'}>ATDD</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{ m: 1, minWidth: 85, background: '#ffff', borderRadius: 1 }}
          >
            <InputLabel id="claim-dropdown">Claim</InputLabel>
            <Select
              labelId="claim-dropdown"
              id="claim-dropdown"
              value={claim}
              label="Claim"
              autoWidth
              onChange={handleClaimChange}
            >
              <MenuItem value={''}>Show all</MenuItem>
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
          </FormControl>
        </div>
        <button className="reset-button" onClick={handleReset}>
          reset filters
        </button>
      </div>
      {/* <div className='yearsCont'>
        <b>years: </b>
        <input placeholder="from"></input>-<input placeholder="to"></input>
        <button>show</button>
      </div> */}
      {articles.length > 0 ? (
        <div className="tableCont">
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
            claimShow={!claimShow}
            semethodShow={!semethodShow}
          />
        </div>
      ) : (
        <h3
          className="errorH1"
          data-testid="loading"
          style={{ margiTop: '10%', marginBottom: '10%' }}
        >
          Loading data...
        </h3>
      )}
      <div className="checkboxCont">
        <h2 className="filterHeader">Filters</h2>
        <FormControlLabel
          label="Title"
          control={
            <Checkbox
              data-testid="titleShow"
              checked={titleShow}
              onChange={handleTitleChange}
            />
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
          label="DOI"
          control={<Checkbox checked={doiShow} onChange={handleDoiChange} />}
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
          label="Claim"
          control={<Checkbox checked={claimShow} onChange={handleClaimShow} />}
        />
        <FormControlLabel
          label="SE Method"
          control={
            <Checkbox checked={semethodShow} onChange={handleSemethodShow} />
          }
        />
      </div>
    </div>
  );
};

export default ArticleDisplay;
