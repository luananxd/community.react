import style from './patents.module.scss'
import { useEffect, useState } from 'react'
// Store
import { useDispatch, useSelector } from 'react-redux'
import {
  selectTechnologiesFilter,
  selectPatents,
  fetchPatents,
} from '@/stores/redux-toolkit/technologies-reducer'
// Components
import PatentCard from '@/components/ui/cards/patent-card/PatentCard'
import Paginator from '@/components/ui/paginator/Paginator'

export default function Patents() {
  const dispatch = useDispatch()
  const filter = useSelector(selectTechnologiesFilter)
  const patents = useSelector(selectPatents)

  const [pageMeta, setPageMeta] = useState({ page: 1, perPage: 10, total: 0 })

  const getPatents = async () => {
    const { payload } = await dispatch(fetchPatents(filter) as any)
    setPageMeta(payload.meta)
  }

  useEffect(() => {
    getPatents()
  }, [])

  return (
    <div className={style['patents']}>
      <div className={style['patents__list']}>
        {patents.map(patent => (
          <PatentCard
            key={patent.id}
            patent={patent}
          />
        ))}
      </div>
      <Paginator meta={pageMeta} />
    </div>
  )
}
