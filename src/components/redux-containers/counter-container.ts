import { connect } from 'react-redux'
import { RootState, RootDispatch } from '@/stores/redux/store'
import { updateCounter, resetCounter } from '@/stores/redux/counter-reducer'
import Counter from '../Counter'

const mapStateToProps = (state: RootState) => {
  return {
    counter: state.counter?.value ?? 0,
  }
}

const mapDispatchToProps = (dispatch: RootDispatch) => {
  return {
    onUpdateCounter: (value: number) => {
      dispatch(updateCounter(value))
    },
    onResetCounter: () => {
      dispatch(resetCounter())
    },
  }
}

const CounterReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter)

export default CounterReduxContainer
