import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from '../App'
import { invoicesData } from '../data'
import Expenses from './Expenses'
import Invoice from './Invoice'
import Invoices from './Invoices'

export const AppRouter = () => {
  const [invoices, setInvoices] = useState(invoicesData)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Navigate replace to='invoices' />} />
          <Route
            path='invoices'
            element={
              <Invoices invoices={invoices} setInvoices={setInvoices} />
            }>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route
              path=':invoiceId'
              element={<Invoice setInvoices={setInvoices} />}
            />
          </Route>
          <Route path='expenses' element={<Expenses />} />
        </Route>
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
