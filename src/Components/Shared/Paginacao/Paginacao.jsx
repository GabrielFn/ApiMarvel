import React from 'react';
import './Paginacao.css';

class Paginacao extends React.Component {
    render() {
        let quantidadePaginas = Math.floor(this.props.quantidadeItens / this.props.quantidadePagina)
        let paginaAtual = Math.floor(this.props.quantidadeListada / this.props.quantidadePagina)

        quantidadePaginas = (quantidadePaginas === 0 && this.props.quantidadeItens > 0) ? 1 : quantidadePaginas;
        paginaAtual = (paginaAtual === 0 && this.props.quantidadeListada > 0) ? 1 : paginaAtual;

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${(paginaAtual === 1) ? "disabled" : ""}`}>
                        <a className="page-link" aria-label="Previous" onClick={e => this.props.handlePaginacao(e, "previous")}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Anterior</span>
                        </a>
                    </li>
                    <li className="page-description">{paginaAtual} de {quantidadePaginas}</li>
                    <li className={`page-item ${(paginaAtual === quantidadePaginas) ? "disabled" : ""}` }>
                        <a className="page-link" aria-label="Next" onClick={e => this.props.handlePaginacao(e, "next")}>
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Próximo</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Paginacao;