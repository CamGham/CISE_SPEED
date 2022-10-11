import React from 'react';
import { Link } from 'react-router-dom';
import SubForm from '../components/SubForm';
import './Submission.css';
import HomeIcon from '@mui/icons-material/ArrowBack';

const AnalystArticle = () => {
    return (
        <div className="doc">
          <h1>Article Analysis</h1>
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