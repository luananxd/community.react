interface Action {
  type: string
  payload?: any
}

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

// Actions

export const updateCounter = (value: number) => {
  return {
    type: 'counter/updateCounter',
    payload: value,
  }
}

export const resetCounter = () => {
  return {
    type: 'counter/resetCounter',
  }
}

// Reducer

const reducer = (state = initialState, action: Action): CounterState => {
  switch (action.type) {
    case 'counter/updateCounter':
      return {
        ...state,
        value: action.payload,
      }

    case 'counter/resetCounter':
      return {
        ...state,
        value: 0,
      }

    default:
      return state
  }
}

export default reducer
