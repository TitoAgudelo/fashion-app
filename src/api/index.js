import 'whatwg-fetch';

const serverUrl = 'http://localhost:8080/api';

export const getBrandList = () =>
  fetch(`${serverUrl}/brands`)
    .then(callback(200));

export const getBrandById = (id) =>
  fetch(`${serverUrl}/brands/${id}`)
    .then(callback(200));

const callback = status => (resp) => {
  if (resp.status === status) {
    return resp.json();
  }

  const error = new Error(resp.statusText);
  error.response = resp;
  throw error;
};