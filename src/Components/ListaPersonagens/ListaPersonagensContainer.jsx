import React from "react";
import { connect } from "react-redux";

import Box from '../Shared/Box/Box';
import Busca from '../Shared/Busca/Busca';
import Loading from '../Shared/Loading/Loading';
import Paginacao from '../Shared/Paginacao/Paginacao';
import ListaPersonagens from './ListaPersonagens';
import { isEmpty } from '../../Utils/ValidationUtils';
import { consultarPersonagens, buscaPersonagens } from "./Redux";
import "./ListaPersonagens.css";

class ListaPersonagensContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            quantidadeListada: 0
        }

        this.handleOrdem = this.handleOrdem.bind(this);
        this.handleBusca = this.handleBusca.bind(this);
        this.handlePaginacao = this.handlePaginacao.bind(this);
    }

    componentDidMount() {
        this.consultaPersonagens(0, "name");
    }

    consultaPersonagens(offset, ordem){
        this.props.consultarPersonagens(offset, ordem).then((result) => {
            this.setState({ quantidadeListada: offset + result.data.data.count });
        });
    }

    buscaPersonagens(name, offset, ordem){
        this.props.buscaPersonagens(name, offset, ordem).then((result) => {
            this.setState({ quantidadeListada: offset + result.data.data.count });
        });
    }

    handleOrdem(valor, ordem) {
        if(!isEmpty(valor)){
            this.buscaPersonagens(valor, 0, ordem);
        }
        else {
            this.consultaPersonagens(0, ordem);
        }
    }

    handleBusca(valor, ordem) {
        if(!isEmpty(valor)){
            this.buscaPersonagens(valor, 0, ordem);
        }
        else {
            this.consultaPersonagens(0, ordem);
        }
    }

    handlePaginacao(e, direcao){
        e.preventDefault();

        let contexto = this.props.personagensState.contextoBusca;

        let offset = 0;

        if(direcao === "next"){
            offset = this.state.quantidadeListada;
        }
        else if(direcao === "previous"){
            offset = this.state.quantidadeListada - 24;
        }

        if(isEmpty(contexto)){
            this.consultaPersonagens(offset, this.props.personagensState.ordem);
        }
        else {
            this.buscaPersonagens(contexto, offset, this.props.personagensState.ordem);
        }
    }

    render() {
        return (
            <Box titulo="Characters">
                <Busca placeholder="Characters"
                       handleBusca={ this.handleBusca }
                       handleOrdem={ this.handleOrdem }
                       value={ this.props.personagensState.contextoBusca }
                       ordem={ this.props.personagensState.ordem } />
                {
                    this.props.personagensState.loading ? 
                    <Loading /> :
                    <ListaPersonagens data={ this.props.personagensState.dataSource.data ? this.props.personagensState.dataSource.data.results : [] } />
                }
                
                <div>
                    <Paginacao quantidadeItens={ this.props.personagensState.dataSource.data ? this.props.personagensState.dataSource.data.total : 0 }
                               quantidadePagina={12}
                               quantidadeListada={ this.state.quantidadeListada }
                               handlePaginacao={this.handlePaginacao} />
                </div>
            </Box>
        );
    }
}

const mapStateToProps = state => {
    return {
        personagensState: state.ListaPersonagens
    };
};

export default connect(mapStateToProps, { 
    consultarPersonagens,
    buscaPersonagens
})(ListaPersonagensContainer);
