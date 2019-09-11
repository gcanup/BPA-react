import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
// Service worker is basically a service to provide consistency in web browser,
// lets say multiple tabs are open with same link then changes in one should update others as well
// it can be changed from register to unregister based on the purpose
