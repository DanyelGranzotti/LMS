import axios from "axios";

export const getMethod = (url) => {
  return axios.get(url);
};

export const postMethod = (url, data) => {
  return axios.post(url, data);
};

export const putMethod = (url, data) => {
  return axios.put(url, data);
};

export const deleteMethod = (url) => {
  return axios.delete(url);
};
