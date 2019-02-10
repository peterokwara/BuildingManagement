import { GET_MOTION_DATA } from "../actions/types";

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
    default:
      return state;
  }
}
