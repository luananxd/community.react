import style from './header.module.scss'
import { NavLink, Link } from 'react-router'
import { getPath } from '@/routes/routes-utils'

export default function AppHeader() {
  const items = [
    {
      title: 'Mars exploration',
      link: 'mars',
    },
    {
      title: 'Photo & Video Library',
      link: 'counter',
    },
    {
      title: 'Technologies',
      link: 'counter',
    },
    {
      title: 'Contacts',
      link: 'counter',
    },
  ]

  return (
    <header className={style['app-header']}>
      <div className={style['app-header__wrapper']}>
        <Link to="/">
          <img
            src="/logo.svg"
            alt="NASA's logo"
            width="85"
            height="70"
          />
        </Link>
        <nav className={style['app-header__navigation']}>
          {items.map(item => (
            <NavLink
              to={getPath(item.link)}
              className={style['app-header__link']}
            >
              <span key={item.title}>{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
