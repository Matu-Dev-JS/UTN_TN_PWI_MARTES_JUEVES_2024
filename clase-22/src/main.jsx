import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


/* 
createRoot es una funcion a la cual le puedo pasar el elementoHTML del dom donde queremos renderizar nuesta app de react
*/



createRoot(document.getElementById('root')).render(
  <App />
)
