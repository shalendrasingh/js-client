import * as types from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  vendorsList: [],
  singleData: [],
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        vendorsList: payload,
      };
    case types.GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.GET_SINGLE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_SINGLE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        singleData: payload,
      };
    case types.GET_SINGLE_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.DELETE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.DELETE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.DELETE_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
export { reducer };
