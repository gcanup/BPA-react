import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './cart.scss'
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';
import { FaTimes } from 'react-icons/fa';

export class Cart extends Component {
  render() {
    const { imgLibrary, removeBook } = this.props
    return (
      <div className='cart-store d-flex'>
       <h1 className={`align-content-center align-self-center ${(imgLibrary.length === 0)?'d-block': 'd-none'} `}>Book Store is Empty</h1>
        <TransitionGroup className={`cart text-center mb-2 ${(imgLibrary.length > 0)?'d-grid': 'd-none'}`}>
          {imgLibrary.map((image, i) =>{
            return (
              <CSSTransition
              timeout={400}
              classNames="item"
              key={i}>
              <div className='d-flex flex-column position-relative'>
                <button className='del-btn' onClick={()=>removeBook(image)}>
                  <span><FaTimes /></span>
                </button>
                  <img
                    src={require(`../../images/${image}.png`)}
                    alt='bookname'
                    className='mx-1' />
              </div>
              </CSSTransition>
            )
          }
          )}
        </TransitionGroup>
      </div>
    )
  }
}

Cart.propTypes = {
  imgLibrary: PropTypes.array,
  removeBook: PropTypes.any
}

export default Cart
