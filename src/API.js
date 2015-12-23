import { format as urlFormat } from 'url';
import Promise from 'bluebird';

import rp from 'request-promise';

import { SERVER } from './constants';

const getValidResponse = (response) => {
  if (!response.response) {
    throw new Error(response.message);
  } else {
    return response.response;
  }
};

const request = ({ path, method, body, query }) => {
  return rp({
    url: urlFormat({
      protocol: SERVER.PROTOCOL,
      host: SERVER.HOST,
      pathname: path,
    }),
    method,
    body,
    qs: query,
    json: true,
  });
};

const get = ({ path, query }) => {
  return request({
    path,
    method: 'GET',
    query,
  }).then(getValidResponse);
};

const post = ({ path, query, body }) => {
  return request({
    path,
    method: 'POST',
    body,
    query,
  }).then(getValidResponse);
};

export default { get, post };
