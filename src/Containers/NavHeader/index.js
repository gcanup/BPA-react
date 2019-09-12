import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap'

import logo from '../../images/book-pile.png'
import './nav-header.scss'

export default class NavHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const navigationItems = [
      { id: 1, path: '/', value: 'Home' },
      { id: 2, path: '/orders', value: 'Orers' }
    ]
    return (
      <>
        <Navbar expand='md'>
          <NavLink to='/'><img src={logo} className='logo' alt='app representation' /></NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {navigationItems.map(menu =>
                <NavItem key={menu.id}>
                  <NavLink exact to={menu.path} activeClassName='active'>{menu.value}</NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}
