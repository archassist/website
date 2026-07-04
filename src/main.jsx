import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Version marker — if you see this in the browser console (F12), the
// navbar-fix build is running. If you DON'T see it, you are viewing old code.
console.log(
  '%cARCH ASSIST — NAVBAR FIX v2 ACTIVE',
  'background:#C9A66B;color:#fff;padding:4px 10px;border-radius:6px;font-weight:bold'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
