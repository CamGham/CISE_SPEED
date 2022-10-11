import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SubForm from '../components/SubForm';
import './Submission.css';
import HomeIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';


const AnalystArticle = () => {
    const {id} = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
          await axios
          .get('http://localhost:8082/api/articles/'+id)
            .then((res) => {
              setData(res.data);
            })
            .catch((err) => {
              console.log('error');
            });
        };
        getData();
        console.log(data);
      }, []);

    return (
        <div className="doc">
          <h1>Article Analysis</h1>
          <h2>showing {id}</h2>
          <div className="navCon">
            <Link to="/accepted" className="nav">
              <HomeIcon data-testid='home' style={{ 'fontSize': '40px' }} />
            </Link>
          </div>
          <div className="formCon">
            <SubForm />
          </div>
        </div>
      );
  
}

export default AnalystArticle