import path from 'path';

import rp from 'request-promise';

import { API_HOST } from './constants';

const getValidResponse = (response) => {
  if (!response.response) {
    throw new Error(response.message);
  } else {
    return response.response;
  }
};

const request = ({ apiPath, method, body, query }) => {
  return rp({
    url: path.join(API_HOST, apiPath),
    method,
    body,
    qs: query,
    json: true,
  });
};

export const get = ({ apiPath, query }) => {
  return request({
    apiPath,
    method: 'GET',
    query,
  }).then(getValidResponse);
};

export const post = ({ apiPath, query, body }) => {
  return request({
    apiPath,
    method: 'POST',
    body,
    query,
  }).then(getValidResponse);
};
