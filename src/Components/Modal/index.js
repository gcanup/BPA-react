import React, { PureComponent } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class ModalComponent extends PureComponent {
  render() {
    const bookLabels = Object.keys(this.props.cart)
    return (
        <Modal isOpen={this.props.purchasing} toggle={this.props.purchase}>
          <ModalHeader>Purchase Summary</ModalHeader>
          <ModalBody>
            You have added following content in your cart. <br />
                {bookLabels.map(book=> 
                <div key={Math.random() + Date.now()} className='d-flex'>
                  <span className='w-50 text-center'>{book} </span>
                  <span className='w-50 text-center'>{this.props.cart[book]}</span>
                  <br />
                  </div>
                )}
             <h5 className='text-center'>Total Books: {this.props.totalCount}</h5> 
             <h5 className='text-center'>Total Price: {this.props.totalPrice}</h5> 
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.continue}>Continue</Button>{' '}
            <Button color="danger" onClick={this.props.purchase}>Cancel</Button>
          </ModalFooter>
        </Modal>
    );
  }
}

export default ModalComponent;