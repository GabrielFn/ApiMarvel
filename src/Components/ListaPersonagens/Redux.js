import marvelService from '../../Services/MarvelService';

const CONSULTAR_PERSONAGENS_REQUEST = 'CONSULTAR_PERSONAGENS_REQUEST';
const CONSULTAR_PERSONAGENS_SUCCESS = 'CONSULTAR_PERSONAGENS_SUCCESS';
const CONSULTAR_PERSONAGENS_ERROR   = 'CONSULTAR_PERSONAGENS_ERROR';

const initialState = {
  contextoBusca: "",
  ordem: "name",
  loading: false,
  dataSource: []
};

function consultarPersonagensRequest(state) {
  return { ...state, ...{ loading: true } };
}
function consultarPersonagensSuccess(state, action) {
  console.log('Valor da ação', action);
  return { ...state, ...{ 
    loading: false, 
    dataSource: action.data , 
    contextoBusca: action.contextoBusca,
    ordem: action.ordem
  }};
}
function consultarPersonagensError(state) {
  return { ...state, ...{ loading: false } };
}

export default function listaPersonagensReducer(state = initialState, action) {
  switch (action.type) {
    case CONSULTAR_PERSONAGENS_REQUEST: return consultarPersonagensRequest(state);
    case CONSULTAR_PERSONAGENS_SUCCESS: return consultarPersonagensSuccess(state, action);
    case CONSULTAR_PERSONAGENS_ERROR: return consultarPersonagensError(state);
    default:
      return state;
  }
}

export function consultarPersonagens(offset, ordem) {
  return {
    types: [CONSULTAR_PERSONAGENS_REQUEST, CONSULTAR_PERSONAGENS_SUCCESS, CONSULTAR_PERSONAGENS_ERROR],
    invoke: () => marvelService.consultarPersonagens(offset, ordem),
    handleApiError: true,
    contextoBusca: "",
    ordem: ordem
  };
}

export function buscaPersonagens(name, offset, ordem) {
  return {
    types: [CONSULTAR_PERSONAGENS_REQUEST, CONSULTAR_PERSONAGENS_SUCCESS, CONSULTAR_PERSONAGENS_ERROR],
    invoke: () => marvelService.buscaPersonagens(name, offset, ordem),
    handleApiError: true,
    contextoBusca: name,
    ordem: ordem
  };
}