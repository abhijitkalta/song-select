import { SELECT_SONG } from '../Actions/types'

const INITIAL_STATE = null;

const songSelectedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return action.payload;
      break;
    default:
      return state;
  }
}

export default songSelectedReducer;
