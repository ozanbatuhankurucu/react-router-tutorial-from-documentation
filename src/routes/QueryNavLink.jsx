import { NavLink, useLocation } from 'react-router-dom'

export function QueryNavLink({ to, ...otherProps }) {
  let location = useLocation()
  return <NavLink {...otherProps} to={to + location.search} />
}
