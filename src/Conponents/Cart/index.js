import React, { Component } from 'react'
import math from '../../images/math.png'
import biology from '../../images/biology.png'
import technology from '../../images/technology.png'
import programming from '../../images/programming.png'
import './cart.scss'

export class Cart extends Component {
  render() {
    return (
      <div className='cart text-center' >
        <img src={math} alt='bookname' />
      </div>
    )
  }
}

export default Cart
