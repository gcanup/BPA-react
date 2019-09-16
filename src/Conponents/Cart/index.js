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
    const { imgLibrary } = this.props
    return (
      <>
        <TransitionGroup className="cart text-center mb-2">
          {imgLibrary.map((images, i) => {
            return (
              <CSSTransition
              timeout={400}
              classNames="item">
              <div key={i} className='d-flex flex-column position-relative'>
                <button className='del-btn'>
                  <span><FaTimes /></span>
                </button>
                  <img
                    src={require(`../../images/${images}.png`)}
                    alt='bookname'
                    className='mx-1' />
              </div>
              </CSSTransition>
            )
          }
          )}
        </TransitionGroup>
      </>
    )
  }
}

Cart.propTypes = {
  imgLibrary: PropTypes.array
}

export default Cart
