import React from 'react';
import { marginBottom, marginTop } from "./style.module.css";


export default ({ className }) => (
  <hr 
    style={{ borderWidth: '.5px' }} 
    className={`border border-solid border-grey-light ${className} ${marginTop} ${marginBottom}`} 
  />
)