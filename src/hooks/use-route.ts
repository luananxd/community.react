import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

interface Data {
  [key: string]: {
    path: string
    meta?: any
  }
}

interface Match {
  name: string
  path: string
  meta: any
}

interface Route {
  name: string | null
  path: string | null
  meta: any | null
  matches: Match[]
  push: (options: RouteNavigateOptions) => void
  replace: (options: RouteNavigateOptions) => void
  go: (delta: number) => void
}

interface RouteNavigateOptions {
  name: string
  params?: any
  state?: any
}

const data: Data = {
  'main': {
    path: '/',
    meta: {
      title: 'NASA - Unofficial Site',
    },
  },
  'mars': {
    path: '/mars-exploration',
    meta: {
      title: 'NASA - Mars Exploration',
    },
  },
  'technologies': {
    path: '/technologies',
    meta: {
      title: 'NASA - Technologies',
    },
  },
  'counter': {
    path: '/counter',
    meta: {
      title: 'NASA - Counter',
    },
  },
}

export const getName = (path: string) => {
  let n: string | null = null

  for (const [key, value] of Object.entries(data)) {
    if (value.path === path) {
      n = key
    }
  }

  return n
}

export const getMeta = (path: string) => {
  const item = Object.values(data).find(i => i.path === path)
  return item?.meta
}

export const getPath = (name: string, params?: { [key: string]: any }) => {
  let path = data[name]?.path

  if (params) {
    for (const [param, value] of Object.entries(params)) {
      path = path.replaceAll(`:${param}`, value)
    }
  }

  return path
}

export const getMatches = (path: string) => {
  const pathElements = path.split('/').slice(1)
  const matches: Match[] = []

  pathElements.forEach((_, index) => {
    const path = '/' + pathElements.slice(0, index + 1).join('/')
    const regex = new RegExp(path.replaceAll(/:.+/gm, '.+'), 'gm')

    for (const [key, value] of Object.entries(data)) {
      const _currentPath = path.split('/').filter(Boolean)
      const _cyclePath = value.path.split('/').filter(Boolean)

      const isMatch =
        regex.test(value.path) && _currentPath.length === _cyclePath.length
      if (isMatch) {
        matches.push({
          name: key,
          path: value.path,
          meta: value.meta,
        })
      }
    }
  })

  return matches
}

export const useRoute = (): Route => {
  // Utils
  const location = useLocation()
  const navigation = useNavigate()
  // State
  const [path, setPath] = useState<string | null>(null)
  const [name, setName] = useState<string | null>(null)
  const [meta, setMeta] = useState<any | null>(null)
  const [matches, setMatches] = useState<Match[]>([])

  // Initialization
  useEffect(() => {
    const _path = location.pathname
    const _name = getName(_path)
    const _meta = getMeta(_path)
    const _matches = getMatches(_path)

    setPath(_path)
    setName(_name)
    setMeta(_meta)
    setMatches(_matches)
  }, [location])

  // Functions

  const push = (options: RouteNavigateOptions) => {
    const _path = getPath(options.name, options.params)
    navigation(_path, { state: options.state })
  }

  const replace = (options: RouteNavigateOptions) => {
    const _path = getPath(options.name, options.params)
    navigation(_path, { replace: true, state: options.state })
  }

  const go = (delta: number) => {
    navigation(delta)
  }

  return {
    path,
    name,
    meta,
    matches,
    push,
    replace,
    go,
  }
}
