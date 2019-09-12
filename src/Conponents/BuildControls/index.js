import React, { Component } from 'react'
import { Button, Alert } from 'reactstrap'
import PropTypes from 'prop-types'
import './build-controls.scss'

const buildControls = [
  { id: 1, name: 'Mathematics', label: 'math', value: 0 },
  { id: 2, name: 'Programming', label: 'programming', value: 0 },
  { id: 3, name: 'Computer Science', label: 'computer', value: 0 },
  { id: 4, name: 'Biology', label: 'biology', value: 0 }
]

class BuildControls extends Component {
  render() {
    const { addBook, totalCount, removeBook, cart } = this.props
    const alertMessage = <Alert color='info'>
      'You can only order 5 books at a time'
    </Alert>

    return (
      <div className='buildControls'>
        <h5 className='mb-3 text-center'>Please add or remove books</h5>
        <hr className='w-50 mx-auto' />
        {totalCount === 5 && alertMessage}
        {buildControls.map(book => {
          return (
            <div key={book.id} className='d-flex mb-1 controls mx-auto'>
              <span style={{ flex: '5' }}>{book.name}</span>
              <Button
                color='danger'
                style={{ flex: '2' }}
                className='mx-1'
                disabled={cart[book.label] <= 0}
                onClick={() => removeBook(book.label)}>
                  Remove
              </Button>
              <Button
                color='success'
                style={{ flex: '2' }}
                className='mx-1'
                disabled={cart[book.label] >= 5 || totalCount >= 5}

                onClick={() => addBook(book.label)}>
                  Add
              </Button>
              <span className='text-center' style={{ flex: '2' }} >{cart[book.label]}</span> <br />
            </div>
          )
        })}
        <h5 className='my-3 text-center'>Total number of books is: {totalCount}</h5>
        <Button
          className='mx-auto w-50 d-block'
          color='warning'
          disabled={totalCount <= 0}
        >CONTINUE</Button>
      </div>
    )
  }
}

BuildControls.propTypes = {
  addBook: PropTypes.func,
  removeBook: PropTypes.func,
  totalCount: PropTypes.number,
  cart: PropTypes.object
}

export default BuildControls
