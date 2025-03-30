import style from './default-layout.module.scss'
// Components
import AppHeader from '../header/AppHeader'
import AppFooter from '../footer/AppFooter'
import { Outlet } from 'react-router'

export default function DefaultLayout() {
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
