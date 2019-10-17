import React from 'react';
import TextField from '@material-ui/core/TextField';

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
          style={{ width: 500 }}
          onChange = {props.changed}
        />
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
      break;
    case ('select'):
      inputElement =
        <TextField
          id="standard-select-currency-native"
          select
          value={props.value}
          helperText="Please select your currency"
          margin="normal"
          style={{ width: 500 }}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={Math.random()} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </TextField>
        

      break;
    default:
      inputElement = <input
        {...props.elementConfig}
        value={props.value}
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