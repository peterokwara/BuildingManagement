import axios from "axios";
import { GET_ERRORS } from "./types";
import { GET_MOTION_DATA } from "./types";

// get data from motion sensor
export const getMotionSensorData = () => dispatch => {
  axios
    .get("/api/motionsensors/all")
    .then(res =>
      dispatch({
        type: GET_MOTION_DATA,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};
