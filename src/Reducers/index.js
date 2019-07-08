import { combineReducers } from 'redux';

import songListReducer from './songListReducer';
import songSelectedReducer from './songSelectedReducer';

const rootReducer = combineReducers({
  songList : songListReducer,
  songSelected : songSelectedReducer
});

export default rootReducer;
