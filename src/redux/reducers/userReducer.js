import { SET_NAME } from "../actions/userActions";

const initialState = {
  name: 'Login'
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload.name   // Revisar aquí: podría ser solo action.payload
      }
    default:
      return state;
  }
}

export default user;