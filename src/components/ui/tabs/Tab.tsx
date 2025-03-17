import style from './tab.module.scss'
// Types
import { JSX } from "react"

interface Props {
  header: string
  children: JSX.Element
}

export default function Tab({ header, children }: Props) {
  return (
    <div className={style['tab']} data-header={header} data-tab>
      { children }
    </div>
  )
}