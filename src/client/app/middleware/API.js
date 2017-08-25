/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "_ignored" }]*/

import request from 'superagent';
import { assign, pick } from 'lodash/object';
import { stringify } from 'qs';
import Api from './../helpers/Api';

function APICall({ endpoint, method, query, payload }) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${Api.hostname}${endpoint}`);

    if (query)
      r.query(stringify(query));

    if (payload)
      r = r.send(payload);

    r.end((error, data) => (
      error ? reject(error) : resolve(data.body)
    ));
  });
}

export const API_CALL = 'API_CALL';

const nextAction = (action, data) => (
  assign({}, action, data, {[API_CALL]: undefined})
);

export default _ignoredState => next => action => {
  if (!action[API_CALL]) return next(action);

  const [requestType, successType, failureType] = action[API_CALL].types;

  next(nextAction(action, { type: requestType }));

  const promise = APICall(
    pick(action[API_CALL], ['endpoint', 'method', 'query', 'payload'])
  );

  promise.then(
    (res) => next(
      nextAction(action, { res, type: successType })
    ),
    (error) => next(
      nextAction(action, { error, type: failureType })
    )
  );

  return promise;
};
