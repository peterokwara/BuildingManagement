import axios from "axios";
import { GET_ERRORS } from "./types";
import { GET_MOTION_DATA } from "./types";
import { GET_CLIMATE_DATA } from "./types";
import { GET_POWER_DATA } from "./types";
import { GET_DEVICES_DATA } from "./types";
import { GET_OCCUPANCY_DATA } from "./types";

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
export const getClimateData = () => dispatch => {
  axios
    .get("/api/climate/all")
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

// get data from current sensor
export const getPowerData = () => dispatch => {
  axios
    .get("/api/power/all")
    .then(res =>
      dispatch({
        type: GET_POWER_DATA,
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

// get data on devices state
export const getDevicesData = () => dispatch => {
  axios
    .get("/api/devices/all")
    .then(res =>
      dispatch({
        type: GET_DEVICES_DATA,
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

// get data on room occupancy
export const getOccupancyData = () => dispatch => {
  axios
    .get("/api/occupancy/all")
    .then(res =>
      dispatch({
        type: GET_OCCUPANCY_DATA,
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
