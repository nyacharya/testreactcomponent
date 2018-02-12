import React from "react";

export const renderTextField = (
  { input, label, onChange, val, placeholder, meta: { touched, error }, ...custom },
) => {
  return (
    <div>
      <input
        className="form-control"
        onChange={onChange}
        {...input}
        placeholder={placeholder}
        {...custom}
      />
      <br/>
    </div>
  );
};

export const renderNumberField = (
  { input, label, onChange, val, placeholder, meta: { touched, error }, ...custom },
) => {
  return (
    <div>
      <input
        className="form-control"
        onChange={onChange}
        {...input}
        placeholder={placeholder}
        {...custom}
        type="number"
      />
      <br/>
    </div>
  );
};

export const RadioSelectValueField = (
  { input, label, data, val, meta: { touched, error }, ...custom },
) => {
  return (
    <div className="btn-group" data-toggle="buttons" {...input}>
      {label}
      {data.map((value, index) =>
        <div key={index}>
          {input.value === value.value ? <div>
            <input type= "radio" name="gender" value={value.value} checked/> {value.label} </div>
            :
            <div>
              <input type="radio" name="gender" value={value.value} /> {value.label}
            </div>
          }
        </div>
      )}
      {touched && error && <span className="text-danger"><h5>{error}</h5></span>}
    </div>

  );
};

export const renderSelect = (
  { input, label, val, placeholder, droplabel, options, meta: { touched, error }, ...custom },
) => {
  return (
    <div>
      <div >
        <select {...input} className="form-control" >
          <option value="" selected="">{droplabel ? droplabel : `select ${label}`} </option>
          {options.map((value, index) =>
            <option value={value.value} key={index}> {value.label}</option>
          )}
        </select>
        <label for="label">{placeholder}</label>
      </div>
      {touched && error && <span className="text-danger"><h5>{error}</h5></span>}
    </div>
  );
};

