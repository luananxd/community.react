import style from './daily-picture.module.scss'

export default function DailyPicture() {
  const picture = {
    src: '/src/assets/images/daily-picture.jpg',
    description: 'NGC 1672: Barred Spiral Galaxy from Hubble',
  }

  return (
    <div className={style['daily-picture']}>
      <img
        src={picture.src}
        alt={picture.description}
        width="1000"
        height="500"
      />
      <p className={style['daily-picture__caption']}>{picture.description}</p>
    </div>
  )
}
