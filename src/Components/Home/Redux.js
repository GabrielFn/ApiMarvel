import marvelService from '../../Services/MarvelService';

const CONSULTAR_PERSONAGENS_REQUEST = 'CONSULTAR_PERSONAGENS_REQUEST';
const CONSULTAR_PERSONAGENS_SUCCESS = 'CONSULTAR_PERSONAGENS_SUCCESS';
const CONSULTAR_PERSONAGENS_ERROR   = 'CONSULTAR_PERSONAGENS_ERROR';

const initialState = {
  loading: false,
  dataSource: []
};

function consultarPersonagensRequest(state) {
  return { ...state, ...{ loading: true } };
}
function consultarPersonagensSuccess(state, action) {
  return { ...state, ...{ loading: false, dataSource: action.data } };
}
function consultarPersonagensError(state) {
  return { ...state, ...{ loading: false } };
}

export default function calendarioAssembleiaReducer(state = initialState, action) {
  switch (action.type) {
    case CONSULTAR_PERSONAGENS_REQUEST: return consultarPersonagensRequest(state);
    case CONSULTAR_PERSONAGENS_SUCCESS: return consultarPersonagensSuccess(state, action);
    case CONSULTAR_PERSONAGENS_ERROR: return consultarPersonagensError(state);
    default:
      return state;
  }
}

export function consultarPersonagens() {
  return {
    types: [CONSULTAR_PERSONAGENS_REQUEST, CONSULTAR_PERSONAGENS_SUCCESS, CONSULTAR_PERSONAGENS_ERROR],
    invoke: () => marvelService.consultarPersonagens(),
    handleApiError: true
  };
}
