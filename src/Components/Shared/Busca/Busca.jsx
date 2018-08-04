import React from 'react';
import debounce from 'lodash/debounce';
import './Busca.css'

import arrowUp from '../../../Assets/media/arrow-up.svg';
import arrowDown from '../../../Assets/media/arrow-down.svg';

class Busca extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            ordem: props.ordem
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOrdem = this.handleOrdem.bind(this);
        this.changed = debounce(this.props.handleBusca, 1000);
        this.ordem = this.props.handleOrdem;
    }

    handleChange(e){
        const val = e.target.value;
        this.setState({ value: val }, () => {
            this.changed(val, this.state.ordem);
        });
    }

    handleOrdem() {
        let ordem = "";

        if(this.state.ordem === "name"){
            ordem = "-name";
        }
        else {
            ordem = "name";
        }

        this.setState({ ordem: ordem }, () => {
            this.ordem(this.state.value, ordem);
        });
    }

    render(){
        return (
            <div className="container busca">
                <div className="row">
                    <div className="col-lg-5 col-md-8 col-sm-9">
                        <input type="text" placeholder={ this.props.placeholder } onChange={ this.handleChange } />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-3">
                        <div className="ordenacao">
                            <a onClick={ this.handleOrdem }>
                                <span>A-Z</span>
                                <img src={ this.state.ordem === "name" ? arrowDown : arrowUp} alt="ordenar" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Busca;