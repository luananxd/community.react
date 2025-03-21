import { useLocation } from 'react-router'

export default function useLogMiddleware() {
  const location = useLocation()

  const check = () => {
    if (location.pathname.includes('/counter')) {
      console.log('COUNTER')
    }
  }

  return { check }
}
