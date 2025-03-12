import style from './header.module.scss'

export default function AppHeader() {
  const items = [
    {
      title: 'Mars exploration',
      link: '',
    },
    {
      title: 'Photo & Video Library',
      link: '',
    },
    {
      title: 'Technologies',
      link: '',
    },
    {
      title: 'Contacts',
      link: '',
    },
  ]


  return (
    <header className={style['app-header']}>
      <div className={style['app-header__wrapper']}>
        <img src="logo.svg" alt="NASA's logo" width="85" height="70" />
        <nav className={style['app-header__navigation']}>
          {
            items.map(item => (
              <span key={item.title}>{item.title}</span>
            ))
          }
        </nav>
      </div>
    </header>
  )
}