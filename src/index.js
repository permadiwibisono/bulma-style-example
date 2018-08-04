import React from 'react';
import 'bulma-extensions/dist/js/bulma-extensions';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

render(
  (
    <Router>
      <App />
    </Router>
  ), document.getElementById('root'),
);
