import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import First from './First'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <First title="Mis libros"/>
    {/* <First title="Mis libros" count={182}/> */}
  </React.StrictMode>
);
