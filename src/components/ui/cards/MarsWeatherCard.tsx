import style from './mars-weather.module.scss'
// Types
import type { MarsSolInfo } from '@/types/mars-exploration'
// Utils
import { getCalendarDateFromString } from '@/utils/helpers'

interface Props {
  sol: MarsSolInfo
}

export default function MarsWeatherCard({ sol }: Props) {
  return (
    <div className={style['mars-weather-card']}>
      <div className={style['mars-weather-card__date']}>
        <h3>Sol {sol?.sol ?? 0}</h3>
        <span>{getCalendarDateFromString(sol?.firstUtc)}</span>
      </div>

      <hr />

      <dl className={style['mars-weather-card__temperature']}>
        <div className={style['mars-weather-card__row']}>
          <dt>High: </dt>
          <dd>{(sol?.at?.mx ?? 0).toFixed(0)}°F</dd>
        </div>
        <div className={style['mars-weather-card__row']}>
          <dt>Low: </dt>
          <dd>{(sol?.at?.mn ?? 0).toFixed(0)}°F</dd>
        </div>
      </dl>
    </div>
  )
}
