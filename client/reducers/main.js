import { UPDATE_EMAIL_BASE } from '../actions/main'

const INITIAL_STATE = {
  emailBase: 'ABC'
}

const emailBase = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_EMAIL_BASE:
      return { ...state }

    default:
      return state
  }
}

export default emailBase
