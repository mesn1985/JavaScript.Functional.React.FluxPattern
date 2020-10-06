import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configurationStore from './store'
import './index.css'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
<Provider store={configurationStore()}>
<App/>
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
