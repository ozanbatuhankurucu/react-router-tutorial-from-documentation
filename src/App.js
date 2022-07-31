import { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    console.log(navigate)
    console.log('useeffect')
    navigate('/invoices')
  }, [])

  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}>
        <Link to='/invoices'>Invoices</Link> |
        <Link to='/expenses'>Expenses</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
