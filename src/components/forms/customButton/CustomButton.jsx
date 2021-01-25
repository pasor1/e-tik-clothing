import React from 'react';
import './CustomButton.scss';

const CustomButton= props => (
  <button className="custom-button" type={props.type} onClick={props.onClick}>{props.children}</button>
)

export default CustomButton;