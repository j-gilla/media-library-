import intialState from './intialState';
import * as types from '../constants/actionTypes';

export default function (state = intialState.images, action) {
  switch(action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return [...state, action.images];
    case types.SELECTED_IMAGE:
     return {...state, selectedImage: action.image}
     default:
      return state;
  }
}
