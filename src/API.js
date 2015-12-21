import rp from 'request-promise';

import { API_HOST } from './constants';

const getValidResponse = (response) => {
  if (!response.response) {
    throw new Error(response.message);
  } else {
    return response.response;
  }
};

const request = ({ path, method, body, query }) => {
  return rp({
    url: `${API_HOST}/${path}`,
    method,
    body,
    qs: query,
    json: true,
  });
};

export const get = ({ path, query }) => {
  return request({
    path,
    method: 'GET',
    query,
  }).then(getValidResponse);
};

export const post = ({ path, query, body }) => {
  return request({
    path,
    method: 'POST',
    body,
    query,
  }).then(getValidResponse);
};
