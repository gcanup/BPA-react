import React, { Component } from 'react'
import bookpile from '../../images/book-pile.png'
import { Row, Col, Table, Button } from 'reactstrap'

export class CheckoutSummary extends Component {
  render() {
    const { cart, totalPrice, cancel, proceed} = this.props
    return (
        <Row>
          <Col className='text-center'><img src={bookpile} className='w-50' alt='cart appearance' /> </Col>
          <Col>{cart ? Object.keys(cart).map((book) => {
            return <Table borderless key={Math.random() + Date()}>
              <td className='w-50 p-0'>{book} </td>
              <td className='p-0'>{cart[book]}</td>
            </Table>
          })
            : null}
            <h3>Total Price = {totalPrice}</h3>
            <Button color='danger' className='mx-2' onClick={cancel}>Cancel</Button>
            <Button color='success' onClick={proceed}>Continue</Button>
          </Col>
        </Row>
    )
  }
}

export default CheckoutSummary
