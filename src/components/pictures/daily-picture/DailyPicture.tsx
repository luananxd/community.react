import style from './daily-picture.module.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// Store
import {
  selectPicture,
  selectFilter,
  fetchPicture,
} from '@/stores/redux-toolkit/picture-of-the-day-reducer'

export default function DailyPicture() {
  const dispatch = useDispatch()
  const picture = useSelector(selectPicture)
  const filter = useSelector(selectFilter)

  useEffect(() => {
    dispatch(fetchPicture(filter) as any)
  }, [dispatch, filter])

  return (
    <div className={style['daily-picture']}>
      <img
        src={picture?.hdurl ?? ''}
        alt={picture?.title ?? ''}
        width="1000"
        height="500"
      />
      <p className={style['daily-picture__caption']}>{picture?.title ?? ''}</p>
    </div>
  )
}
