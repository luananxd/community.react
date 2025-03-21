import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// Store
import {
  selectWeatherFilter,
  selectPhotosFilter,
  selectRoverPhotos,
  fetchRoverPhotos,
} from '@/stores/redux-toolkit/mars-exploration-reducer'

export default function MarsExplorationPage() {
  const dispatch = useDispatch()
  const weatherFilter = useSelector(selectWeatherFilter)
  const photosFilter = useSelector(selectPhotosFilter)
  const roverPhotos = useSelector(selectRoverPhotos)

  useEffect(() => {
    dispatch(fetchRoverPhotos(photosFilter) as any)
  }, [dispatch, photosFilter])

  return (
    <>
      <div>Hello from Mars!</div>
    </>
  )
}
