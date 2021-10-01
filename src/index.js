import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer);
store.subscribe(()=>{
  localStorage.setItem('current user', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
