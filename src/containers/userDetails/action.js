import axios from "axios";

function config(method, endpoint, data) {
  let json = data;
  try {
    json = JSON.parse(data);
  } catch (err) {
    json = JSON.stringify(data);
  }
  return {
    method: method,
    url: url + endpoint,
    data: json,
  };
}
const url = "https://dev.octilus.in/api/";
const addURL = "create.php";
const updateURL = "update.php";

export const addUser = (formData) => {
  const data = JSON.stringify(formData);
  return async (dispatch) => {
    const response = await axios(config("POST", addURL, data));
    dispatch({ type: "ADD_USER", payload: response.data });
  };
};

export const updateUser = (formData) => {
  const data = JSON.stringify(formData);
  return async (dispatch) => {
    const response = await axios(config("POST", updateURL, data));
    dispatch({ type: "UPDATE_USER", payload: response.data });
  };
};

export const clearUser = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAR_USER", payload: {} });
  };
};
