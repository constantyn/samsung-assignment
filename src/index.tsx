import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element #root');
}
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
