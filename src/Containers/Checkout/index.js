import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../Components/Order/CheckoutSummary'
import ContactData from './ContactData'

class Checkout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: null,
      totalPrice: 0
    }
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const cart = {};
    let price = 0;
    let param= null
    for(param of query.entries()) {
      // ['salad', '1']
      if(param[0] === 'price') {
        price = param[1];
      } else {
        cart[param[0]] = +param[1];
      }
    }
    this.setState({ cart, totalPrice: price });
  }

  render() {
    return (
      <div className='mt-5'>
        <CheckoutSummary
          {...this.state}
          proceed={() => {this.props.history.replace('/checkout/contact-data')}}
          cancel={() => {this.props.history.goBack()}}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => (<ContactData {...this.state} {...props} />)}
        />
      </div>
    )
  }
}
export default Checkout
