import {
  STATE_LIST_REQUEST,
  STATE_LIST_SUCCESS,
  STATE_LIST_FAIL,
  STATE_DETAILS_REQUEST,
  STATE_DETAILS_SUCCESS,
  STATE_DETAILS_FAIL,
} from "./stateConstants";

export const stateListReducer = (state = { states: [] }, action) => {
  switch (action.type) {
    case STATE_LIST_REQUEST:
      return {
        loading: true,
        states: [],
      };
    case STATE_LIST_SUCCESS:
      return {
        loading: false,
        states: action.payload,
      };
    case STATE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const stateDetialsReducer = (
  state = { states: { places: [] } },
  action
) => {
  switch (action.type) {
    case STATE_DETAILS_REQUEST:
      return {
        loading: true,
        // product: action.payload,
        // ...state,
      };
    case STATE_DETAILS_SUCCESS:
      return {
        loading: false,
        states: action.payload,
      };
    case STATE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
