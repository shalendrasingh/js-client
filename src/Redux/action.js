import axios from "axios";
import * as types from "./actionType";

const getData = () => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });

  return axios
    .get("https://jstechbackend.onrender.com/api/vendor")
    .then((res) =>
      dispatch({
        type: types.GET_DATA_SUCCESS,
        payload: res.data,
      })
    )
    .catch((e) => {
      dispatch({ type: types.GET_DATA_FAILURE, payload: e });
    });
};
const getSingleData = (_id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLE_DATA_REQUEST });

  return axios
    .get(`https://jstechbackend.onrender.com/api/vendor/${_id}`)
    .then((res) =>
      dispatch({
        type: types.GET_SINGLE_DATA_SUCCESS,
        payload: res.data,
      })
    )
    .catch((e) => {
      dispatch({ type: types.GET_SINGLE_DATA_FAILURE, payload: e });
    });
};

const addData = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_DATA_REQUEST });
  return axios
    .post("https://jstechbackend.onrender.com/api/createvendor", payload)
    .then((res) => {
      dispatch({
        type: types.ADD_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.ADD_DATA_FAILURE, payload: e });
    });
};
const deleteData = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_DATA_REQUEST });
  return axios
    .delete(`https://jstechbackend.onrender.com/api/vendor/${id}`)
    .then((r) => {
      dispatch({
        type: types.DELETE_DATA_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      dispatch({ type: types.DELETE_DATA_FAILURE, payload: e });
    });
};

const updateData = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_DATA_REQUEST });
  return axios
    .put(`https://jstechbackend.onrender.com/api/vendor/${id}`, payload)
    .then((r) => {
      dispatch({ type: types.UPDATE_DATA_SUCCESS });
      dispatch(getData());
    })
    .catch((e) => {
      dispatch({ type: types.UPDATE_DATA_FAILURE });
    });
};

export { deleteData, addData, getData, getSingleData, updateData };
