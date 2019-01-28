import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import Main from './components/Main'
import store from './store.jsx'

render(
  <Provider store={ store }>
    <div>
      <Main />
    </div>
    </Provider>,
  document.getElementById('main')
);
