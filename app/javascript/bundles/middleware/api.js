const SERVER_PATH = 'http://localhost:3000/api/';

const fetchApi = (action, store) => {
  return fetch(SERVER_PATH + action.endpoint, action.props).then((response) => {
    if (action.cb) action.cb(store.dispatch);
    return response.json();
  }).catch((error) => { action.callbackErr(error); });
};

export const CALL_API = 'CALL_API';
export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') return next(action);
  const [successType, failureType] = callAPI.types;
  const { isChanged } = callAPI;
  const actionWith = (newInfo) => {
    const newAction = Object.assign({}, action, newInfo);
    delete newAction[CALL_API];
    return newAction;
  };
  return fetchApi(callAPI, store).then(
    payload => {
      next(actionWith({
        payload,
        type: successType,
        isChanged
      }));
    },
    error => {
      next(actionWith({
        errorMsg: error.message,
        type: failureType
      }));
    }
  );
};
