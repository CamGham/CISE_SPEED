import React from 'react';
import axios from 'axios';
import bibtexParse from '@orcid/bibtex-parse-js';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SubForm = () => {
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
      status: 'pending',
      semethod: '',
      claim: '',
      result: true,
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
      pages: Yup.number().required('Required'),
      doi: Yup.string().required('Required'),
    }),
    //on submission of form
    onSubmit: (values) => {
      axios
        .post('http://localhost:8082/api/articles', values)
        .then((res) => {
          formik.resetForm();
        })
        .catch((err) => {
          console.log('error when submitting: ' + err);
        });
    },
  });

  //upload bibtex file
  const handleUpload = async (e) => {
    const fileReader = new FileReader();
    fileReader.onload = async (e) => {
      //extract text
      const text = e.target.result;
      //conver to JSON
      var data = bibtexParse.toJSON(text);
      //ref to fields
      const article = data[0].entryTags;
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
      formik.setValues(newValues);
      formik.handleChange();
    };
    //read file
    fileReader.readAsText(e.target.files[0]);
  };
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div>
        <div>
          <label>
            Bibtex file:
            <input type="file" name="file" onChange={handleUpload} />
          </label>
        </div>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
      </div>
      <div>
        <input
          type="text"
          placeholder="Authors"
          name="authors"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.authors}
        />
        {formik.touched.authors && formik.errors.authors ? (
          <div>{formik.errors.authors}</div>
        ) : null}
      </div>
      <div>
        <input
          type="text"
          placeholder="Journal Name"
          name="journal"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.journal}
        />
        {formik.touched.journal && formik.errors.journal ? (
          <div>{formik.errors.journal}</div>
        ) : null}
      </div>
      <div>
        <input
          type="text"
          placeholder="Pub. Year"
          name="year"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.year}
        />
        {formik.touched.year && formik.errors.year ? (
          <div>{formik.errors.year}</div>
        ) : null}
      </div>
      <div>
        <input
          type="text"
          placeholder="Volume"
          name="volume"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.volume}
        />
        {formik.touched.volume && formik.errors.volume ? (
          <div>{formik.errors.volume}</div>
        ) : null}
      </div>
      <div>
        <input
          type="text"
          placeholder="Version"
          name="version"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.version}
        />
        {formik.touched.version && formik.errors.version ? (
          <div>{formik.errors.version}</div>
        ) : null}
      </div>
      <div>
        <input
          type="text"
          placeholder="Pages"
          name="pages"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pages}
        />
        {formik.touched.pages && formik.errors.pages ? (
          <div>{formik.errors.pages}</div>
        ) : null}
      </div>
      <div>
        <input
          type="text"
          placeholder="Doi"
          name="doi"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.doi}
        />
        {formik.touched.doi && formik.errors.doi ? (
          <div>{formik.errors.doi}</div>
        ) : null}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default SubForm;
