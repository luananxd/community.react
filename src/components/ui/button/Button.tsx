import style from './button.module.scss'

interface Props {
  label: string
  onClick?: (...args: any[]) => any
}

export default function Button({ label, onClick }: Props) {
  return (
    <button
      className={style['button']}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
