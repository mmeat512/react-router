import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './lib/Router.tsx';
import Route from './lib/Route.tsx';
import About from './pages/About.tsx';
import Root from './pages/Root.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={<Root />}></Route>
      <Route path="/about" component={<About />}></Route>
    </Router>
  </React.StrictMode>
);
