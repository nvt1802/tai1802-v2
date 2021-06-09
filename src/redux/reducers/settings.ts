import * as actionTypes from "../actions/actionTypes"

const initialState = {
  logo: "1",
  duration: "5",
  color: "black",
}

const message = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SETTING_CHANGE_REQUEST:
      return {
        ...state,
        logo: action.payload.logo,
        duration: action.payload.duration,
        color: action.payload.color,
      }
    case actionTypes.SETTING_CHANGE_SUCCESS:
      return {
        ...state,
        logo: action.payload.logo,
        duration: action.payload.duration,
        color: action.payload.color,
      }
    case actionTypes.SETTING_CHANGE_FAILURE:
      return initialState
    default:
      return state
  }
}

export default message
