import style from './tabs.module.scss'
import { useState, useEffect, createRef } from 'react'
// Types
import { JSX } from 'react'
// Components
import { CSSTransition } from 'react-transition-group'

interface Props {
  children?: JSX.Element
}

interface TabItem {
  body: JSX.Element
  ref: React.RefObject<HTMLDivElement> | undefined
}

export default function Tabs({ children }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [headers, setHeaders] = useState([])
  const [items, setItems] = useState<TabItem[]>([])

  useEffect(() => {
    const _headers = children?.props?.children.map((i: JSX.Element) => {
      return i.props.header
    })

    const _items =
      children?.props?.children.map((item: any) => {
        return {
          body: item,
          ref: createRef(),
        }
      }) ?? []

    setHeaders(_headers)
    setItems(_items)
  }, [children])

  return (
    <div className={style['tabs']}>
      <div className={style['tabs__headers']}>
        {headers.map((header, index) => (
          <button
            key={header}
            className={
              style['tabs__header'] +
              (index === activeIndex ? ` ${style['tabs__header--active']}` : '')
            }
            type="button"
            onClick={() => setActiveIndex(index)}
          >
            {header}
          </button>
        ))}
      </div>

      <div>
        {items.map((item, index) => (
          <CSSTransition
            in={activeIndex === index}
            key={index}
            nodeRef={item.ref}
            timeout={400}
            classNames="fade"
          >
            <div ref={item.ref}>{activeIndex === index && item.body}</div>
          </CSSTransition>
        ))}
      </div>
    </div>
  )
}
