import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './AnalystForm.css';

const AnalystForm = (props) => {
  const data = props.data;
  const [ID, setID] = useState('');

  useEffect(() => {
    const newValues = {
      title: data.title,
      authors: data.authors,
      journal: data.journal,
      year: data.year,
      volume: data.volume,
      version: data.version,
      pages: data.pages,
      doi: data.doi,
      status: 'completed',
      semethod: data.semethod,
      claim: data.claim,
      result: '',
      research: '',
      participant: '',
    };
    formik.setValues(newValues);
    document.getElementById('semethod').value = data.semethod;
    document.getElementById('claim').value = data.claim;
    setID(data._id);
  }, [data]);

  //formik form
  const formik = useFormik({
    //initial values
    initialValues: {
      title: '',
      authors: '',
      journal: '',
      year: '',
      volume: '',
      version: '',
      pages: '',
      doi: '',
      status: 'completed',
      semethod: '',
      claim: '',
      result: '',
      research: '',
      participant: '',
    },
    //use Yup for validation
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      authors: Yup.string().required('Required'),
      journal: Yup.string().required('Required'),
      year: Yup.number().required('Required'),
      volume: Yup.number().required('Required'),
      version: Yup.number().required('Required'),
      pages: Yup.string().required('Required'),
      doi: Yup.string().required('Required'),
      semethod: Yup.string().required('Required'),
      claim: Yup.string().required('Required'),
      result: Yup.string().required('Required'),
      research: Yup.string().required('Required'),
      participant: Yup.string().required('Required'),
    }),
    //on submission of form
    onSubmit: (values) => {
      axios
        .put('http://localhost:8082/api/articles/' + ID, values)
        .then((res) => {
          formik.resetForm();
          alert('Article completed');
        })
        .catch((err) => {
          console.log('Error when updating the article!');
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="inputCont">
        <div className="field">
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
        </div>
        <div className="errCon">
          {formik.touched.title && formik.errors.title ? (
            <div className="error">{formik.errors.title}</div>
          ) : null}
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Authors"
            name="authors"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.authors}
          />
        </div>
        <div className="errCon">
          {formik.touched.authors && formik.errors.authors ? (
            <div className="error">{formik.errors.authors}</div>
          ) : null}
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Journal Name"
            name="journal"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.journal}
          />
        </div>
        <div className="errCon">
          {formik.touched.journal && formik.errors.journal ? (
            <div className="error">{formik.errors.journal}</div>
          ) : null}
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Pub. Year"
            name="year"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.year}
          />
        </div>
        <div className="errCon">
          {formik.touched.year && formik.errors.year ? (
            <div className="error">{formik.errors.year}</div>
          ) : null}
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Volume"
            name="volume"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.volume}
          />
        </div>
        <div className="errCon">
          {formik.touched.volume && formik.errors.volume ? (
            <div className="error">{formik.errors.volume}</div>
          ) : null}
        </div>

        <div className="field">
          <input
            type="text"
            placeholder="Version"
            name="version"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.version}
          />
        </div>
        <div className="errCon">
          {formik.touched.version && formik.errors.version ? (
            <div className="error">{formik.errors.version}</div>
          ) : null}
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Pages"
            name="pages"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pages}
          />
        </div>
        <div className="errCon">
          {formik.touched.pages && formik.errors.pages ? (
            <div className="error">{formik.errors.pages}</div>
          ) : null}
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Doi"
            name="doi"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.doi}
          />
        </div>
        <div className="errCon">
          {formik.touched.doi && formik.errors.doi ? (
            <div className="error">{formik.errors.doi}</div>
          ) : null}
        </div>

        <div className="field">
          <select
            type="text"
            name="semethod"
            id="semethod"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.semethod}
          >
            <option value="">Select SE Method</option>
            <option value="TDD">TDD</option>
            <option value="BDD">BDD</option>
            <option value="ATDD">ATDD</option>
          </select>
        </div>
        <div className="errCon">
          {formik.touched.semethod && formik.errors.semethod ? (
            <div className="error">{formik.errors.semethod}</div>
          ) : null}
        </div>

        <div className="field">
          <select
            type="text"
            name="claim"
            id="claim"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.claim}
          >
            <option value="">Select Claim</option>
            <option value="Improves product quality">
              Improves product quality
            </option>
            <option value="Improves code quality">Improves code quality</option>
            <option value="Improves team confidence">
              Improves team confidence
            </option>
          </select>
        </div>
        <div className="errCon">
          {formik.touched.claim && formik.errors.claim ? (
            <div className="error">{formik.errors.claim}</div>
          ) : null}
        </div>

        <div className="field">
          <select
            type="text"
            name="result"
            id="result"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.result}
          >
            <option value="">Select Result</option>
            <option value="Agree">Agree</option>
            <option value="Disagree">Disagree</option>
          </select>
        </div>
        <div className="errCon">
          {formik.touched.result && formik.errors.result ? (
            <div className="error">{formik.errors.result}</div>
          ) : null}
        </div>

        <div className="field">
          <select
            type="text"
            name="research"
            id="research"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.research}
          >
            <option value="">Select Research Type</option>
            <option value="Case Study">Case Study</option>
            <option value="Experiment">Experiment</option>
          </select>
        </div>
        <div className="errCon">
          {formik.touched.research && formik.errors.research ? (
            <div className="error">{formik.errors.research}</div>
          ) : null}
        </div>

        <div className="field">
          <select
            type="text"
            name="participant"
            id="participant"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.participant}
          >
            <option value="">Select Participant Type</option>
            <option value="Student">Student</option>
            <option value="Practitioner">Practitioner</option>
          </select>
        </div>
        <div className="errCon">
          {formik.touched.participant && formik.errors.participant ? (
            <div className="error">{formik.errors.participant}</div>
          ) : null}
        </div>

        <div className="submit">
          <input type="submit" />
        </div>
      </div>
    </form>
  );
};

export default AnalystForm;
