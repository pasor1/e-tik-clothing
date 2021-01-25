import React from 'react';
import './FormInput.scss';

const FormInput = props => (
  <div className="group">
    {props.label
      ? <label htmlFor={props.name} className={`${props.value.length ? 'shrink' : ''} form-input-label`}>{props.label}</label>
      : null
    }
    <input className="form-input" type={props.type} name={props.name} required value={props.value} onChange={props.onChange} />
  </div>
)

export default FormInput;