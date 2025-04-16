import style from './mars-rover-photos.module.scss'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// Types
import type { MarsCamera } from '@/types/mars-exploration'
// Utils
import { classes } from '@/utils/helpers'
// Store
import {
  updatePhotosFilter,
  selectPhotosFilter,
  selectRoverPhotos,
  fetchRoverPhotos,
} from '@/stores/redux-toolkit/mars-exploration-reducer'
// Components
import RoverPhotoCard from '@/components/ui/cards/rover-photo-card/RoverPhotoCard'

export default function MarsRoverPhotos() {
  const dispatch = useDispatch()
  const photosFilter = useSelector(selectPhotosFilter)
  const roverPhotos = useSelector(selectRoverPhotos)

  const [activeIndex, setActiveIndex] = useState(0)
  const filterCameraOptions: MarsCamera[] = [
    'FHAZ',
    'RHAZ',
    'MAST',
    'CHEMCAM',
    'MAHLI',
  ]

  const updateFilterCamera = (index: number) => {
    const _filter = {
      ...photosFilter,
      camera: filterCameraOptions[index],
    }
    dispatch(updatePhotosFilter(_filter))
    setActiveIndex(index)
  }

  useEffect(() => {
    dispatch(fetchRoverPhotos(photosFilter) as any)
  }, [dispatch, photosFilter])

  return (
    <div className={style['mars-rover-photos']}>
      <h2 className="header-2">Rover photos</h2>
      <div className={style['mars-rover-photos__tabs']}>
        {filterCameraOptions.map((option, index) => (
          <div
            key={option}
            className={classes({
              [style['mars-rover-photos__tab']]: true,
              [style['mars-rover-photos__tab--active']]: index === activeIndex,
            })}
            onClick={() => updateFilterCamera(index)}
          >
            {option}
          </div>
        ))}
      </div>

      <div>
        {roverPhotos.length ? (
          <div className={style['mars-rover-photos__list']}>
            {roverPhotos.map(photo => (
              <RoverPhotoCard
                key={photo.id}
                photo={photo}
              />
            ))}
          </div>
        ) : (
          <div>We can't find photos for you :(</div>
        )}
      </div>
    </div>
  )
}
