import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './route/Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div className='bg-black'>
<RouterProvider router={Route}></RouterProvider>
</div>
  </React.StrictMode>,
)
