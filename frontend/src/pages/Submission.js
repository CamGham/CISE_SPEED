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
        <input type='text' placeholder="Journal"/>
        <input type='text'placeholder="Year"/>
        <input type='text' placeholder="Volume"/>
        <input type='text' placeholder="Version"/>
        <input type='text' placeholder="Pages"/>
        <input type='text' placeholder="Doi"/>
        <input type="submit"/>
    </form>
  );
}

export default Submission