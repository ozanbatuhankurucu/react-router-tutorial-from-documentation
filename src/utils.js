import { invoicesData } from './data'

export function getInvoice(number) {
  return invoicesData.find((invoice) => invoice.number === number)
}
