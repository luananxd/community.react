import style from './patent-card.module.scss'
// Types
import type { Patent } from '@/types/technologies'

interface Props {
  patent: Patent
}

export default function PatentCard({ patent }: Props) {
  return (
    <div className={style['patent-card']}>
      <h3 className={style['patent-card__title']}>Patent</h3>
      <p>Description</p>
      <a href="#">Link</a>
    </div>
  )
}
