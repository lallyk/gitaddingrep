import React, { useState } from 'react';

const FormPage = ({ page }) => {
  const [formFields, setFormFields] = useState({});

  const handleChange = (e, fieldId) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [fieldId]: { ...prevFields[fieldId], [name]: value },
    }));
  };

  const handleFileChange = (e, fieldId) => {
    const file = e.target.files[0];
    setFormFields((prevFields) => ({
      ...prevFields,
      [fieldId]: { ...prevFields[fieldId], fileAttachment: file },
    }));
  };

  return (
    <div className="form-page">
      <h2>{page.pageName}</h2>
      {page.fields.map((field) => (
        <div key={field.fieldId} className="form-field">
          <label>{field.fieldName}:</label>
          {field.type === 'string' && (
            <input
              type="text"
              name={field.fieldId}
              value={formFields[field.fieldId]?.value || ''}
              onChange={(e) => handleChange(e, field.fieldId)}
            />
          )}
          {field.type === 'dropdown' && (
            <select
              name={field.fieldId}
              value={formFields[field.fieldId]?.value || ''}
              onChange={(e) => handleChange(e, field.fieldId)}
            >
              <option value="">Select an option</option>
              {field.selectableValues.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          )}
          {field.type === 'textarea' && (
            <textarea
              name={field.fieldId}
              value={formFields[field.fieldId]?.value || ''}
              onChange={(e) => handleChange(e, field.fieldId)}
            />
          )}
          {field.type === 'file' && (
            <input
              type="file"
              name={field.fieldId}
              onChange={(e) => handleFileChange(e, field.fieldId)}
            />
          )}
        </div>
      ))}
    </div>
  );
};
/*
const options = ["option1", "option2", "option3"];
  const [selected1, setSelected1] = useState(options[0]);
  const [selected2, setSelected2] = useState(options[0]);
  const [selected3, setSelected3] = useState(options[0]);

  const handleChange1 = (event) => {
    const { value } = event.target;
    setSelected1(value);
    setSelected2(value === "option1" ? options[0] : selected2);
    setSelected3(value === "option1" ? options[0] : selected3);
  };

  const handleChange2 = (event) => {
    setSelected2(event.target.value);
  };

  const handleChange3 = (event) => {
    setSelected3(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <select value={selected1} onChange={handleChange1}>
          {options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </form>
      <form>
        <select
          value={selected2}
          onChange={handleChange2}
          disabled={selected1 === options[0]}
        >
          {options.map(
            (value) =>
              value !== selected1 && (
                <option value={value} key={value}>
                  {value}
                </option>
              )
          )}
        </select>
      </form>
      <form>
        <select
          value={selected3}
          onChange={handleChange3}
          disabled={selected1 === options[0]}
        >
          {options.map(
            (value) =>
              value !== selected1 && (
                <option value={value} key={value}>
                  {value}
                </option>
              )
          )}
        </select>
      </form>
    </div>
  ); */