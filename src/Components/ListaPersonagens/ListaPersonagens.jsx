import React from 'react';


const ListaPersonagens = ({ data }) => {
    return (
        <div className="container">
            <div className="row">
                {
                    data.map((result, index) => {
                        return <PersonagemItem data={result} key={index} />;
                    })
                }
            </div>
        </div>
    )
}

const PersonagemItem = ({ data }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="heroi">
                <div className="titulo-heroi">
                    <img alt={ data.name } src={`${ data.thumbnail.path }/portrait_small.${ data.thumbnail.extension }`} className="img-heroi" />
                    <p className="nome">{ data.name }</p>
                    <hr />
                    <p className="descricao">{ data.description.length > 50 ? `${data.description.substring(0, 65)}...` : data.description }</p>
                </div>
            </div>
        </div>
    );
}

export default ListaPersonagens;