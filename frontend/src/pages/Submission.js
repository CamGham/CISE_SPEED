import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import bibtexParse from '@orcid/bibtex-parse-js';

const Submission = () => {
  const initialValues = {
    title: '',
    authors: '',
    journal: '',
    year: '',
    volume: '',
    version: '',
    pages: '',
    doi: '',
    status: 'pending',
    semethod: '',
    claim: '',
    result: true,
    research: '',
    participant: '',
  };

  const [values, setValues] = useState(initialValues);
  const titleRef = useRef();
  const authorRef = useRef();
  const journalRef = useRef();
  const yearRef = useRef();
  const volumeRef = useRef();
  const versionRef = useRef();
  const pagesRef = useRef();
  const doiRef = useRef();

  // called when typing in input fields 
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //submission of form
  const onSubmit = () => {
    axios
      .post('http://localhost:8082/api/articles', values)
      .then((res) => {
        console.log('resetting form');
        setValues(initialValues);
      })
      .catch((err) => {
        console.log('error when submitting');
      });
  };

  //upload bibtex file
  const handleUpload = async (e) => {
    const fileReader = new FileReader();

    // read method
    fileReader.onload = async (e) => {
      //extract text
      const text = e.target.result;
      //conver to JSON
      var data = bibtexParse.toJSON(text);
      //ref to fields
      const article = data[0].entryTags;

      // issues with different formats
      // place values in fields
      titleRef.current.value = article.TITLE;
      authorRef.current.value = article.AUTHOR;
      journalRef.current.value = article.JOURNAL;
      yearRef.current.value = article.YEAR;
      volumeRef.current.value = article.VOLUME;
      versionRef.current.value = article.NUMBER;
      pagesRef.current.value = article.PAGES;
      doiRef.current.value = article.DOI;

      // set values
      const newValues = {
        title: article.TITLE,
        authors: article.AUTHOR,
        journal: article.JOURNAL,
        year: article.YEAR,
        volume: article.VOLUME,
        version: article.NUMBER,
        pages: article.PAGES,
        doi: article.DOI,
        status: 'pending',
        semethod: '',
        claim: '',
        result: true,
        research: '',
        participant: '',
      };
      setValues(newValues);
    };
    //read file
    fileReader.readAsText(e.target.files[0]);
  };

  const show = () => {
    console.log(values);
  };

  return (
    <div className="doc">
      <h1>Article Submission</h1>
      <div>
        <Link to="/">Home</Link>
      </div>

      <form onSubmit={onSubmit} className="form" onChange={handleUpload}>
        <div>
          <div>
            <label>
              Bibtex file:
              <input type="file" name="file" />
            </label>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            ref={titleRef}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Authors"
            name="authors"
            ref={authorRef}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Journal Name"
            name="journal"
            ref={journalRef}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Pub. Year"
            name="year"
            ref={yearRef}
            values={values.year}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Volume"
            name="volume"
            ref={volumeRef}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Version"
            name="version"
            ref={versionRef}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Pages"
            name="pages"
            ref={pagesRef}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Doi"
            name="doi"
            ref={doiRef}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="button" onClick={show} />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Submission;
