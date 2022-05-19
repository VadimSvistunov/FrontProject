import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Styles from './Style'
import { Form, Field } from 'react-final-form'
import api from "../services/allEndpoints";

const required = (value) => (value ? undefined : 'Required')

const Forms = ({ active }) => {
  const [file, setFile] = useState(null);

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const onSubmit = async (values) => {
    alert('was add music')
    const formData = new FormData()
    formData.append('name', values.name)
    formData.append('genre', values.genre)
    formData.append('author', values.author)
    formData.append('musicFile', file)
    console.log(formData.get('file'))
    await api.auth.setMusic(formData);
  }

  return (
    <Styles>
      {(active) && (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="genre" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Genre</label>
                    <input {...input} type="text" placeholder="Genre" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Name Music</label>
                    <input {...input} type="text" placeholder="Name Music" ></input>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="author" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Author</label>
                    <input {...input} type="text" placeholder="Author" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="file">
                {({ input, meta }) => (
                  <div>
                    <label>File</label>
                    <input type="file" placeholder="Path" onChange={selectFile}  />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values)}</pre>
            </form>
          )}
        />
      )}
      {(!active) && (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Name Car</label>
                    <input {...input} type="text" placeholder="Car" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="model" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Model</label>
                    <input {...input} type="text" placeholder="Model" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field
                name="manufacturer"
                validate={required}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Manufacturer</label>
                    <input {...input} type="text" placeholder="Manufacturer" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field
                name="cost_in_credits"
                validate={required}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Cost</label>
                    <input {...input} type="text" placeholder="Cost" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values)}</pre>
            </form>
          )}
        />
      )}


    </Styles>
  );

}

export default Forms