import style from './footer.module.scss'

export default function AppFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={style['app-footer']}>
      <div className={style['app-footer__wrapper']}>
        <div>
          <p className={style['app-footer__title']}>
            National Aeronautics and Space Administration
          </p>
          <span>{currentYear}</span>
        </div>

        <div>
          <span className={style['socials__title']}>Follow NASA</span>
          <ul className={style['socials__list']}>
            <li>
              <a href="https://www.youtube.com/@NASA">
                <img
                  src="/src/assets/icons/socials/youtube.svg"
                  alt="YouTube logo"
                  width="29"
                  height="20"
                ></img>
              </a>
            </li>
            <li>
              <a href="https://x.com/NASA">
                <img
                  src="/src/assets/icons/socials/x.svg"
                  alt="X logo"
                  width="20"
                  height="20"
                ></img>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nasa/">
                <img
                  src="/src/assets/icons/socials/instagram.svg"
                  alt="Instagram logo"
                  width="20"
                  height="20"
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
