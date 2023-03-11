import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function RedirectPage({ to }) {
  const nav = useNavigate()
  const token = JSON.parse(localStorage.getItem('user'))?.token
  useEffect(() => {
    if (token) nav(to)
  }, [token])
  if (token) return null
  return <Outlet />
}
