import { GET_MOTION_DATA } from "../actions/types";
import { GET_CLIMATE_DATA } from "../actions/types";
const initialState = {
  motionData: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOTION_DATA:
      return {
        ...state,
        motionData: action.payload
      };
    case GET_CLIMATE_DATA:
      return {
        ...state,
        climateData: action.payload
      };
    default:
      return state;
  }
}
