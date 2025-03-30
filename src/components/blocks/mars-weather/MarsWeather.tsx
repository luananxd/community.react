import style from './mars-weather.module.scss'
import { useState, useEffect } from 'react'
// Types
import type { MarsSolInfo } from '@/types/mars-exploration'
// Store
import { useDispatch, useSelector } from 'react-redux'
import {
  selectMarsWeather,
  selectWeatherFilter,
  fetchMarsWeather,
} from '@/stores/redux-toolkit/mars-exploration-reducer'
// Components
import MarsWeatherCard from '@/components/ui/cards/MarsWeatherCard'

export default function MarsWeather() {
  const dispatch = useDispatch()
  const filter = useSelector(selectWeatherFilter)
  const weather = useSelector(selectMarsWeather)

  const [currentSol, setCurrentSol] = useState<number>(0)
  const [currentSeason, setCurrentSeason] = useState('')
  const [days, setDays] = useState<MarsSolInfo[]>([])

  useEffect(() => {
    dispatch(fetchMarsWeather(filter) as any)
  }, [dispatch, filter])

  useEffect(() => {
    const _sols = weather?.solKeys?.map(i => Number(i)) ?? []
    const _currentSol = Math.max(..._sols, 0)
    const _season = (weather?.[_currentSol]?.season ?? '').toUpperCase()
    let _days = []

    for (const [key, value] of Object.entries(weather ?? {})) {
      if (Number(key))
        _days.push({
          ...value,
          sol: key,
        })
    }

    _days = _days.splice(2)

    setCurrentSol(_currentSol)
    setCurrentSeason(_season)
    setDays(_days)
  }, [weather])

  return (
    <div className={style['mars-weather']}>
      <div>
        <h2 className={style['mars-weather__title']}>Mars Weather</h2>
        <div className={style['mars-weather__subtitle']}>
          Sol {currentSol}/687 — {currentSeason}
        </div>
      </div>

      <div className={style['mars-weather__days']}>
        {days.map(item => (
          <MarsWeatherCard
            key={item.sol}
            sol={item}
          />
        ))}
      </div>
    </div>
  )
}
