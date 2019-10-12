import React from 'react';
import TextField from '@material-ui/core/TextField';

// import classes from './Input.css';

const input = (props) => {
  let inputElement = null;
  switch(props.elementType) {
    case ('input'):
      inputElement = 
      <TextField
      id="standard-password-input"
      label={props.elementConfig.placeholder}
      autoComplete="current-password"
      margin="normal"
    />
      // <input
      //   {...props.elementConfig}
      //   value={props.value}
      // // onChange={props.changed}
      // />;
      break;
    case ('textarea'):
      inputElement =
      <TextField
      id="standard-password-input"
      label={props.value}

      type="password"
      autoComplete="current-password"
      margin="normal"
      width={1}
    />
      // <textarea
      //   // className={inputClasses.join(' ')}
      //   {...props.elementConfig}
      //   value={props.value}
      // // onChange={props.changed} 
      // />;
      break;
    case ('select'):
      inputElement =
        <select
          // className={inputClasses.join(' ')}
          value={props.value}
        // onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      break;
    default:
      inputElement = <input
        // className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
      // onChange={props.changed}
      />;
  }

  return (
    <div >
      <label>{props.label}</label>
      {inputElement}
    </div>
  );

};

export default input;