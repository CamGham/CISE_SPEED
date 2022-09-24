import React, {useState} from 'react';
import axios from "axios";


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
    pages: '',
    doi: ''
  }

  const [values, setValues] = useState(initialValues);

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

  return (
    <form onSubmit={onSubmit}>
        <input type='text' placeholder="Title" name='title' value={values.title} onChange={handleChange}/>
        <input type='text' placeholder="Authors" name='authors' value={values.authors} onChange={handleChange}/>
        <input type='text' placeholder="Journal" name='journal' values={values.journal} onChange={handleChange}/>
        <input type='text'placeholder="Year" name='year' values={values.year} onChange={handleChange}/>
        <input type='text' placeholder="Volume" name='volume' values={values.volume} onChange={handleChange}/>
        <input type='text' placeholder="Version" name='version' values={values.version} onChange={handleChange}/>
        <input type='text' placeholder="Pages" name='pages' values={values.pages} onChange={handleChange}/>
        <input type='text' placeholder="Doi" name='doi' values={values.doi} onChange={handleChange}/>
        <input type="submit"/>
    </form>
  );
}

export default Submission