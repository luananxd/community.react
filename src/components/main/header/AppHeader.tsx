import style from './header.module.scss'
// Hooks
import { getPath } from '@/hooks/use-route'
// Components
import { NavLink, Link } from 'react-router'

export default function AppHeader() {
  const items = [
    {
      title: 'Mars exploration',
      link: 'mars',
    },
    {
      title: 'Technologies',
      link: 'technologies',
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
              key={item.title}
              className={style['app-header__link']}
            >
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
