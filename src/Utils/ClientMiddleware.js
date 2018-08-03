import errorApiHandler from '../Utils/errorApiHandler';

const clientMiddleware = ({ dispatch, getState }) => next => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  const {
    invoke, successInvoke, handleApiError, types, ...rest
  } = action;

  if (!invoke) {
    return next(action);
  }

  const [REQUEST, SUCCESS, FAILURE] = types;
  next({ ...rest, type: REQUEST });

  const actionCaller = invoke(dispatch);
  actionCaller
    .then((response) => {
      const result = next({ ...rest, data: response.data, type: SUCCESS });
      if (successInvoke) successInvoke(response.data, dispatch);

      return result;
    })
    .catch((erro) => {
      const result = next({ ...rest, error: erro, type: FAILURE });
      if (typeof handleApiError === 'object') {
        errorApiHandler({ ...erro.response, ...{ title: handleApiError.title } });
      } else if (handleApiError) {
        if (erro.response) {
          errorApiHandler(erro.response);
        } else if (erro.request) {
          errorApiHandler(erro.request);
        } else {
          const erroTratado = {
            title: 'Erro',
            message: erro,
            data: {
              code: 1,
              status: 400
            }
          };
          errorApiHandler(erroTratado);
        }
      }
      return result;
    });
  return actionCaller;
};

export default clientMiddleware;
