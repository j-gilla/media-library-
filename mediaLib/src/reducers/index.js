import { comboineReducers } from 'redux';
import images from './imageReducer';
import videos from './videoReducer';

const rootReducer = comboineReducers({
  images,
  videos,
});

export default rootReducer;
