import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AnalystForm from '../components/AnalystForm';
import './Submission.css';
import HomeIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

const AnalystArticle = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get('/api/articles/' + id)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('error');
      });
  };

  useEffect(() => {
    (async () => {
      await getData();
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="doc">
      <h1>Article Analysis</h1>
      <div className="navCon">
        <Link to="/accepted" className="nav">
          <HomeIcon data-testid="home" style={{ fontSize: '40px' }} />
        </Link>
      </div>
      <div className="formCon">
        {data ? <AnalystForm data={data} /> : 
        <h2>Loading</h2>
        }
        

      </div>
    </div>
  );
};

export default AnalystArticle;
