import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NavHeader from './Containers/NavHeader'
import Checkout from './Containers/Checkout'
import Orders from './Containers/Orders'
import LandingPAge from './Containers/LandingPage'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavHeader />
        <Route path='/checkout' component={Checkout} />
        <Route path='/orders' component={Orders} />
        <Route path='/' exact component={LandingPAge} />
      </div>
    )
  }
}

export default App
