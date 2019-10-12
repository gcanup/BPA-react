import React, { Component } from 'react'
import { Button, Alert, Table } from 'reactstrap'
import PropTypes from 'prop-types'
import './build-controls.scss'

const buildControls = [
  { id: 1, name: 'Mathematics', label: 'math', price: 10 },
  { id: 2, name: 'Programming', label: 'programming', price: 15 },
  { id: 3, name: 'Technology', label: 'technology', price: 20 },
  { id: 4, name: 'Biology', label: 'biology', price: 25 }
]

class BuildControls extends Component {
  render() {
    const { addBook, totalCount, removeBook, cart, totalPrice } = this.props
    const alertMessage = <Alert color='info'>
      'You can only order 5 books at a time'
    </Alert>

    return (
      <div className='buildControls'>
        <h5 className='mb-3 text-center'>Please add or remove books</h5>
        <hr className='w-50 mx-auto' />
        {totalCount === 5 && alertMessage}
        <Table>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Price</th>
              <th className='text-center'>Remove</th>
              <th className='text-center'>Add</th>
              <th className='text-center'>Book Amount</th>
              <th className='text-center'>Price</th>
            </tr>
          </thead>
          <tbody>
              {buildControls.map(book => {
                return (
                  <tr key={book.id}>
                  {/*  <div key={book.id} className='d-flex mb-1 controls mx-auto'> */}
                  <th>{book.name}</th>
                  <th>{book.price}</th>
                  <th>
                    <Button
                      color='danger'
                      disabled={cart[book.label] <= 0}
                      className='w-100'
                      onClick={() => removeBook(book.label, book.price)}>
                      Remove
                      </Button>
                  </th>
                  <th>
                    <Button
                      color='success'
                      disabled={cart[book.label] >= 5 || totalCount >= 5}
                      className='w-100'
                      onClick={() => addBook(book.label, book.price)}>
                      Add
                    </Button>
                  </th>
                  <th className='text-center'>
                   {cart[book.label]}
                  </th>
                  <th className='text-center'>
                   {cart[book.label]*book.price}
                  </th>
                  </tr>
            )
          })}
          </tbody>
        </Table>

      <h5 className='my-3 text-center'>Total number of books is: {totalCount}</h5>
      <h5 className='my-3 text-center'>Total price is: {totalPrice}</h5>
      <Button
        className='mx-auto w-50 d-block'
        color='warning'
        disabled={totalCount <= 0}
        onClick={this.props.purchase}
      >Order Now!!</Button>
      </div >
    )
  }
}

BuildControls.propTypes = {
  addBook: PropTypes.func,
  removeBook: PropTypes.func,
  totalCount: PropTypes.number,
  totalPrice: PropTypes.number,
  cart: PropTypes.object,
  purchase: PropTypes.func
}

export default BuildControls
