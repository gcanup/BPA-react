import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import './index.scss'

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
ReactDOM.render(app, document.getElementById('root'))

serviceWorker.unregister()
// Service worker is basically a service to provide consistency in web browser,
// lets say multiple tabs are open with same link then changes in one should update others as well
// it can be changed from register to unregister based on the purpose
