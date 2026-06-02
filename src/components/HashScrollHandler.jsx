import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function HashScrollHandler() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [location])

  return null
}
