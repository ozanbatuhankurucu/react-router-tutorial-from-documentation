import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expenses from './routes/expenses'
import Invoices from './routes/invoices'
import IndividualInvoice from './routes/IndividualInvoice'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='invoices' element={<Invoices />} />
        <Route path='expenses' element={<Expenses />} />
      </Route>
      <Route path='invoices/:invoiceNumber' element={<IndividualInvoice />} />
      <Route path='*' element={<p>page not found</p>} />
    </Routes>
  </BrowserRouter>
)
