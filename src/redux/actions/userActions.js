// Actions
export const SET_NAME = 'SET_NAME'

// Action creators
export const setName = (name) => {
  return {
      type: SET_NAME,
      payload: {
          name
      }
  }
}