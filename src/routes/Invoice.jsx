import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useInvoiceData } from '../hooks/useInvoiceData'

const Invoice = ({ setInvoices }) => {
  const { number: invoiceId } = useInvoiceData()
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
      <span> individualinvoice id: {invoiceId}</span>
      <button
        onClick={() => {
          setInvoices((prev) =>
            prev.filter((invoice) => invoice.number !== invoiceId)
          )
          navigate('/invoices' + location.search)
        }}>
        Delete
      </button>
    </div>
  )
}

export default Invoice
