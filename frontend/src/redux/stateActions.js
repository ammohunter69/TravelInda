import {
  STATE_LIST_REQUEST,
  STATE_LIST_SUCCESS,
  STATE_LIST_FAIL,
  STATE_DETAILS_REQUEST,
  STATE_DETAILS_SUCCESS,
  STATE_DETAILS_FAIL,
} from "./stateConstants";
import axios from "axios";

export const listStates = () => async (dispatch) => {
  try {
    dispatch({ type: STATE_LIST_REQUEST });

    const { data } = await axios.get("/api/states");

    dispatch({ type: STATE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STATE_LIST_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listStateDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: STATE_DETAILS_REQUEST, payload: {} });

    // const { data } = await axios.get("/api/states");
    const { data } = await axios.get(`/api/states/${id}`);
    // console.log(`the data is ${JSON.stringify(data)}`);
    // console.log(`the data is ${data1.places}`);
    // const data = data1;

    dispatch({ type: STATE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STATE_DETAILS_FAIL,
      payload: error.response.data.message,
      // error.message && error.response.data.message
      //   ? error.response.data.message
      //   : error.message,
    });
  }
};
