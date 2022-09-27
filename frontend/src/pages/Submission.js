import React, { useRef, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import bibtexParse from "@orcid/bibtex-parse-js";


const Submission = () => {
    // const { register, handleSubmit} = useForm();
    // const [result, setResult] = useState("");
    // const onSubmit = (data) => setResult(JSON.stringify(data));

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
    participant: ''
  }
  

  const [values, setValues] = useState(initialValues);
  const titleRef = useRef();
  const authorRef = useRef();
  const journalRef = useRef();
  const yearRef = useRef();
  const volumeRef = useRef();
  const versionRef = useRef();
  const pagesRef = useRef();
  const doiRef = useRef();
  // const [extractInfo, setExtractInfo] = useState(null);

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const onSubmit = () =>{
    console.log(values)

    axios
    .post('http://localhost:8082/api/articles', values)
    .then(res => {
      console.log("resetting form");
      setValues(initialValues)
    })
    .catch(err => {
      console.log("error when submitting");
    })
  }

  const handleUpload = async (e) => {
    const fileReader = new FileReader();
    fileReader.onload = async (e) =>{
      //extract text
      const text = (e.target.result);
      //conver to JSON
      var data = bibtexParse.toJSON(text);

      // console.log(data[0].entryTags);
      //ref to fields
      const article = data[0].entryTags;

      // issues with different formats
      titleRef.current.value = article.TITLE;
      authorRef.current.value = article.AUTHOR;
      journalRef.current.value = article.JOURNAL;
      yearRef.current.value = article.YEAR;
      volumeRef.current.value = article.VOLUME;
      versionRef.current.value = article.NUMBER;
      // pagesRef.current.value = article.pages;
      doiRef.current.value = article.DOI;
    }
    fileReader.readAsText(e.target.files[0]);
  }

  

  return (
    <div className="doc">
      <h1>Article Submission</h1>
      <div>
        <Link to="/">
            Home
        </Link>
        </div>

    <form onSubmit={onSubmit} className="form" onChange={handleUpload}>
      <div>
        <div>

        <label>
          Bibtex file:
        <input type='file' name ="file"/>

        </label>
        </div>
        <input type='text' placeholder="Title" name='title' ref={titleRef} value={values.title} onChange={handleChange}/>
        </div>
        <div>
        <input type='text' placeholder="Authors" name='authors' ref={authorRef} value={values.authors} onChange={handleChange}/>
        </div>
        <div>
        <input type='text' placeholder="Journal" name='journal' ref={journalRef} values={values.journal} onChange={handleChange}/>
        </div>
        <div>
        <input type='text'placeholder="Year" name='year' ref={yearRef} values={values.year} onChange={handleChange}/>
        </div>
        <div>
        <input type='text' placeholder="Volume" name='volume' ref={volumeRef} values={values.volume} onChange={handleChange}/>
        </div>
        <div>
        <input type='text' placeholder="Version" name='version' ref={versionRef} values={values.version} onChange={handleChange}/>
        </div>
        <div>
        <input type='text' placeholder="Pages" name='pages' ref={pagesRef} values={values.pages} onChange={handleChange}/>
        </div>
        <div>
        <input type='text' placeholder="Doi" name='doi' ref={doiRef} values={values.doi} onChange={handleChange}/>
        </div>
        <div>
        <input type="submit"/>
        </div>
    </form>
    </div>
  );
}

export default Submission