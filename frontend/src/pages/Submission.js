import React from 'react';
import { Link } from 'react-router-dom';
import SubForm from '../components/SubForm';

const Submission = () => {
 
  return (
    <div className="doc">
      <h1>Article Submission</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <SubForm />
    </div>
  );
};

export default Submission;