import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getInvoice } from '../utils'

export const useInvoiceData = () => {
  const { invoiceId } = useParams()

  return useMemo(() => getInvoice(invoiceId), [invoiceId])
}
