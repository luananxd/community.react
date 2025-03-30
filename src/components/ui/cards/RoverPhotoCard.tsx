import style from './rover-photo-card.module.scss'
import { useState, useEffect } from 'react'
// Types
import type { MarsRoverPhoto } from '@/types/mars-exploration'
// Components
import Button from '../button/Button'

interface Props {
  photo: MarsRoverPhoto
}

export default function RoverPhotoCard({ photo }: Props) {
  const [photoAlt, setPhotoAlt] = useState('')

  useEffect(() => {
    setPhotoAlt(
      `Rover photo. Camera: ${photo.camera.full_name}, Rover: ${photo.rover.name}`,
    )
  }, [photo])

  return (
    <div className={style['rover-photo-card']}>
      <img
        className={style['rover-photo-card__image']}
        src={photo.imgSrc}
        alt={photoAlt}
        width="320"
        height="320"
      />
      <div className={style['rover-photo-card__wrapper']}>
        <dl className={style['rover-photo-card__info']}>
          <div className={style['rover-photo-card__row']}>
            <dt>Date:</dt>
            <dd>{photo.earthDate}</dd>
          </div>
          <div className={style['rover-photo-card__row']}>
            <dt>Rover:</dt>
            <dd>{photo.rover.name}</dd>
          </div>
          <div className={style['rover-photo-card__row']}>
            <dt>Camera:</dt>
            <dd>{photo.camera.name}</dd>
          </div>
        </dl>

        <Button label="Open fullscreen" />
      </div>
    </div>
  )
}
