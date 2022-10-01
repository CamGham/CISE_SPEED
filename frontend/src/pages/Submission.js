import React from 'react';
import { Link } from 'react-router-dom';
import SubForm from '../components/SubForm';
import './Submission.css';

const Submission = () => {
 
  return (
    <div className="doc">
      <h1>Article Submission</h1>
      <div>
        <div className='navContainer'>
        <Link to="/" className='nav'>
          <div className='navButton'>
            Home
          </div>
        </Link>
        </div>
      </div>
      <div className='formCon'>
      <SubForm />
      </div>
    </div>
  );
};

export default Submission;