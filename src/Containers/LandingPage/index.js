import React, { Component } from 'react'
import './landing-page.scss'
import BuildControls from '../../Conponents/BuildControls'
import Cart from '../../Conponents/Cart'

class LandingPage extends Component {
  state= {
    cart: {
      math: 0,
      programming: 0,
      computer: 0,
      biology: 0 }, // coming from db
    totalCount: 0,
    imgLibrary: []
  }

  addBookHandler = (bookType) => {
    const { totalCount, cart, imgLibrary } = this.state
    const newBookCount = cart[bookType] + 1
    const updatedCart = { ...cart }
    updatedCart[bookType] = newBookCount
    totalCount < 5 &&
      this.setState({
        totalCount: totalCount + 1,
        cart: updatedCart,  //solve this in single line as image state
        alert: false,
        imgLibrary: [...imgLibrary, bookType]
      })
  }

  removeBookHandler = (bookType) => {
    const { totalCount, cart } = this.state
    const newBookCount = cart[bookType] - 1
    const updatedCart = { ...cart }
    updatedCart[bookType] = newBookCount
    totalCount > 0 &&
      this.setState({
        totalCount: totalCount - 1,
        cart: updatedCart
      })
  }

  render() {
    console.log(this.state.imgLibrary)
    return (
      <div className='mt-5 mx-auto'>
        <Cart {...this.state} />
        <BuildControls
          addBook={this.addBookHandler}
          removeBook={this.removeBookHandler}
          {...this.state} />
      </div>
    )
  }
}

export default LandingPage
