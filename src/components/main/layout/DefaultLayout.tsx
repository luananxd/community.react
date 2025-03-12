import style from './default-layout.module.scss'
// Types
import { JSX } from 'react'
// Components
import AppHeader from "../header/AppHeader"

interface Props {
  content: () => JSX.Element
}

export default function DefaultLayout({ content }: Props) {
  return (
    <div className={style['default-layout']}>
      <AppHeader></AppHeader>
      <main className={style['default-layout__content']}>
        <div className={style['default-layout__wrapper']}>
          { content() }
        </div>
      </main>
    </div>
  )
}