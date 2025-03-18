interface Data {
  [key: string]: {
    path: string
    meta?: any
  }
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
  'counter': {
    path: '/counter',
    meta: {
      title: 'NASA - Counter',
    },
  },
}

export const getMeta = (path: string) => {
  const item = Object.values(data).find(i => i.path === path)
  return item?.meta
}

export const getPath = (name: string) => {
  return data[name]?.path
}
