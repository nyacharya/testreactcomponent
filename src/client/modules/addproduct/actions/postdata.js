import { GETDETAIL, POSTDATA } from "./constant";
import _ from "lodash";
import { data } from "../../../constant";

export function getSuccess(SUCCESS, data) {
  return {
    type: SUCCESS,
    payload: data,
  };
}

export function getFailure(FAILURE, error) {
  return {
    type: FAILURE,
    payload: error,
  };
}

export function getReset(RESET) {
  return {
    type: RESET,
    payload: null,
  };
}

export function editData(prop) {
  var index = _.findIndex(data, { id: prop.id });
  data.splice(index, 1, prop);
  return function(dispatch) {
    dispatch(getSuccess(POSTDATA.POSTDATA_RESET));
    dispatch(getSuccess(POSTDATA.POSTDATA_SUCCESS, data));
  };
}

export function postData(prop) {
  let temp = prop;
  prop = {
    id: data.length,
    name: temp.name,
    brand: temp.brand,
    price: temp.price,
    quantity: temp.quantity,
  },
  data.push(prop);
  return function(dispatch) {
    dispatch(getSuccess(POSTDATA.POSTDATA_RESET));
    dispatch(getSuccess(POSTDATA.POSTDATA_SUCCESS, data));
  };
}

export function getsingledata(id) {
  let idd = parseInt(id);
  return _.filter(data,  {  "id": idd })[0];
}

export function getDetail(id) {
  return function(dispatch) {
    let aa = getsingledata(id);
    dispatch(getSuccess(GETDETAIL.GET_DATA_SUCCESS, aa));
  };
};
