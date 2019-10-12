import React, { Component } from 'react'
import orderForm from './orderForm'
import Input from '../../Helpers/Input'
import {Button} from 'reactstrap'

export class ContactData extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      orderForm,
      formIsValid: false,
      loading: false
    }
  }
  
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
        formElementsArray.push({
            id: key,
            config: this.state.orderForm[key]
        });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
          {formElementsArray.map(formElement => (
              <Input 
                  key={formElement.id}
                  elementType={formElement.config.elementType}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value}
                  invalid={!formElement.config.valid}
                  shouldValidate={formElement.config.validation}
                  touched={formElement.config.touched}
                  changed={(event) => this.inputChangedHandler(event, formElement.id)} />
          ))}
          <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
      </form>
  )
  console.log(formElementsArray)
    return (
      <div>
        <h2>Contact Data</h2>
        {form}
      </div>
    )
  }
}

export default ContactData
