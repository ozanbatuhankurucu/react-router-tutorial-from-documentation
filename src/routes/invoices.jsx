import { useMemo } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import { QueryNavLink } from './QueryNavLink'
export default function Invoices({ invoices, setInvoices }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const allSearchParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  )
  const sortParam = useMemo(
    () => allSearchParams.sort || 'desc',
    [allSearchParams]
  )
  const filteredInvoices = invoices
    .filter((invoice) => {
      let filter = searchParams.get('filter')
      console.log('%c -----filter----- ', 'background: #FF0000')
      console.log(filter)
      console.log('%c -----filter----- ', 'background: #FF0000')

      if (!filter) return true
      let name = invoice.name.toLowerCase()
      return name.startsWith(filter.toLowerCase())
    })
    .sort((a, b) =>
      sortParam === 'desc' ? b.amount - a.amount : a.amount - b.amount
    )
  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem'
        }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            value={searchParams.get('filter') || ''}
            onChange={(event) =>
              setSearchParams({
                ...allSearchParams,
                filter: event.target.value
              })
            }
          />
          Sort by amount:
          <select
            name='sortOptions'
            onChange={(event) =>
              setSearchParams({
                ...allSearchParams,
                sort: event.target.value
              })
            }
            value={sortParam}>
            <option value='desc'>Desc</option>
            <option value='asc'>Asc</option>
          </select>
        </div>
        {filteredInvoices.map((invoice) => (
          <QueryNavLink
            style={({ isActive }) => {
              return {
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : ''
              }
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}>
            {invoice.name} (${invoice.amount})
          </QueryNavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}
