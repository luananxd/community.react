import style from './paginator.module.scss'
import { useState, useEffect } from 'react'
// Types
import type { Meta } from '@/types/common'
// Utils
import { classes } from '@/utils/helpers'

interface Props {
  meta: Meta
  onPageUpdate?: (page: number) => void
}

export default function Paginator({ meta, onPageUpdate }: Props) {
  const [pages, setPages] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const _pagesCount = Math.ceil(meta.total / meta.perPage)
    const _pages: number[] = []

    for (let i = 1; i <= _pagesCount; i++) {
      _pages.push(i)
    }

    setPages(_pages)
  }, [meta])

  const onPageClick = (page: number) => {
    setCurrentPage(page)
    onPageUpdate ? onPageUpdate(page) : null
  }

  return (
    <div className={style['paginator']}>
      {pages.map(page => (
        <button
          key={page}
          className={classes({
            [style['paginator__button']]: true,
            [style['paginator__button--active']]: page === currentPage,
          })}
          type="button"
          onClick={() => onPageClick(page)}
        >
          {page}
        </button>
      ))}
    </div>
  )
}
