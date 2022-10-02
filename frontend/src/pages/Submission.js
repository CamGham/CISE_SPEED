import React from 'react';
import { Link } from 'react-router-dom';
import SubForm from '../components/SubForm';
import './Submission.css';

const Submission = () => {
  return (
    <div className="doc">
      <div className="navCon">
        <h1>Article Submission</h1>
        <Link to="/" className="nav">
          <div className="navButton">Home</div>
        </Link>
      </div>
      <div className="formCon">
        <SubForm />
      </div>
    </div>
  );
};

export default Submission;
