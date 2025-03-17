import { useEffect } from 'react'
import Button from '@/components/ui/button/Button'
import store from '@/stores/redux/store'
import { fetchRoverPhotos } from '@/stores/redux/mars-exploration-reducer'

export default function MarsExplorationPage() {
  useEffect(() => {
    store.dispatch(fetchRoverPhotos())
  })

  return (
    <>
      <div>Hello from Mars!</div>
      <Button label="Fetch Data"></Button>
    </>
  )
}
