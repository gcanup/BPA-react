import React, { Component } from 'react'
import orderForm from './orderForm'
import Input from '../../Helpers/Input'
import { Button } from 'reactstrap'
import Switch from '@material-ui/core/Switch';

export class ContactData extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orderForm,
      formIsValid: false,
      loading: false,
      checkedB: true,
    }
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = { ...this.state.orderForm}

    const updatedFormElement = {...updatedOrderForm[inputIdentifier]}

    updatedFormElement.value = event.target.value

    updatedOrderForm[inputIdentifier] = updatedFormElement
    this.setState({ orderForm: updatedOrderForm })
  }


  render() {
    const formElementsArray = [];
    let key = null
    for(key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      this.state.checkedB &&
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
        <Button
          color="success"
          disabled={!this.state.formIsValid}
          className='mb-3'>ORDER
        </Button>
      </form>
    )
    return (
      <div className='text-center'>
        <p>Contact Data</p>
        <Switch
          checked={this.state.checkedB}
          value="form enabled"
          onChange={(event) => { this.setState({ checkedB: event.target.checked }) }}
          color="primary"
        />
        {form}
      </div>
    )
  }
}

export default ContactData
