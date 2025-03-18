import style from './default-layout.module.scss'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { getMeta } from '@/routes/routes-utils'
// Components
import AppHeader from '../header/AppHeader'
import AppFooter from '../footer/AppFooter'
import { Outlet } from 'react-router'

export default function DefaultLayout() {
  const location = useLocation()

  useEffect(() => {
    const meta = getMeta(location.pathname)
    document.title = meta?.title ?? ''
  }, [location])

  return (
    <div className={style['default-layout']}>
      <AppHeader />
      <main className={style['default-layout__content']}>
        <div className={style['default-layout__wrapper']}>
          <Outlet />
        </div>
      </main>
      <AppFooter />
    </div>
  )
}
