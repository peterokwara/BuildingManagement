import axios from "axios";
import { GET_ERRORS } from "./types";
import { GET_MOTION_DATA } from "./types";
import { GET_CLIMATE_DATA } from "./types";

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

// get data from dht sensor
export const getDhtSensorData = () => dispatch => {
  axios
    .get("/api/dhtsensor/all")
    .then(res =>
      dispatch({
        type: GET_CLIMATE_DATA,
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
