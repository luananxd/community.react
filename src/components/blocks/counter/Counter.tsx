import style from './counter.module.scss'
// Stores
import { useSelector, useDispatch } from 'react-redux'
import { updateCounter, resetCounter } from '@/stores/redux/counter-reducer'
// Types
import { RootState } from '@/stores/redux/store'

export default function Counter() {
  const counter = useSelector((state: RootState) => state.counter?.value ?? 0)
  const dispatch = useDispatch()

  const onUpdateCounter = (value: number) => {
    dispatch(updateCounter(value))
  }

  const onResetCounter = () => {
    dispatch(resetCounter())
  }

  return (
    <div className={style['counter']}>
      <span className={style['counter__value']}>{counter}</span>
      <button
        className={style['counter__button']}
        type="button"
        onClick={() => onUpdateCounter(counter + 1)}
      >
        Increase counter
      </button>
      <button
        className={style['counter__button']}
        type="button"
        onClick={() => onResetCounter()}
      >
        Reset counter
      </button>
    </div>
  )
}
