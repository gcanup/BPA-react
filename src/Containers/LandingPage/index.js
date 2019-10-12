import React, { Component } from 'react'
import './landing-page.scss'
import BuildControls from '../../Components/BuildControls'
import Cart from '../../Components/Cart'
import ModalComponent from '../../Components/Modal'

class LandingPage extends Component {
  state = {
    cart: {
      math: 0,
      programming: 0,
      technology: 0,
      biology: 0
    }, // coming from db
    totalCount: 0,
    totalPrice: 0,
    imgLibrary: [],
    purchasing: false
  }

  addBookHandler = (bookType, bookPrice) => {
    const { totalCount, totalPrice, cart, imgLibrary } = this.state
    const updatedCart = { ...cart }
    updatedCart[bookType] = cart[bookType] + 1
    totalCount < 5 &&
      this.setState({
        totalCount: totalCount + 1,
        cart: updatedCart,
        alert: false,
        imgLibrary: [...imgLibrary, bookType],
        totalPrice: totalPrice + bookPrice
      })
  }

  removeBookHandler = (bookType, bookPrice) => {
    const { totalCount, cart, imgLibrary, totalPrice } = this.state
    const newBookCount = cart[bookType] - 1
    const updatedCart = { ...cart }
    updatedCart[bookType] = newBookCount
    imgLibrary.splice(imgLibrary.findIndex(name => name === bookType), 1)
    totalCount > 0 &&
      this.setState({
        totalCount: totalCount - 1,
        cart: updatedCart,
        totalPrice: totalPrice-bookPrice
      })
  }

  purchasing = () => {
    this.setState(prevState => ({
      purchasing: !prevState.purchasing
    }));
  }

  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in this.state.cart) {
        queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.cart[i])); //tested without encodeURIComponent and still works
    }
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&');
    this.props.history.push({
        pathname: '/checkout',
        search: '?' + queryString
    });
}

  render() {
    return (
      <div className='mt-5 mx-auto landing-page'>
        <Cart {...this.state} removeBook={this.removeBookHandler} />
        <BuildControls
          addBook={this.addBookHandler}
          removeBook={this.removeBookHandler}
          {...this.state}
          purchase={this.purchasing} />
        <ModalComponent
          {...this.state}
          purchase={() => { this.setState(prevState => ({ purchasing: !prevState.purchasing })) }}
          continue={this.purchaseContinueHandler}  />
      </div>
    )
  }
}

export default LandingPage
