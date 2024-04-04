import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/store'; // Ensure you have the correct path to your store configuration
import './index.css'; // Your CSS file path may differ

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
