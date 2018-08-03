import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { consultarPersonagens } from "./Redux";
import "./Home.css";

class HomeContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            quantidadeListada: 0
        }
    }

    componentDidMount() {
        this.consultaPersonagens(10, 0);
    }

    consultaPersonagens(limit, offset){
        this.props.consultarPersonagens(limit, offset).then((result) => {
            this.setState({ quantidadeListada: this.state.quantidadeListada + result.data.data.count });
        });
    }

    render() {
        return (
            <div className="App">
                {
                    this.props.homeState.dataSource.data ? 
                    this.props.homeState.dataSource.data.results.map((result, index) => {
                        return <div>{result.name}</div>;
                    }) : null
                }

                <button onClick={ () => this.consultaPersonagens(10, this.state.quantidadeListada) }>teste</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        homeState: state.Home
    };
};

export default connect(mapStateToProps, { 
    consultarPersonagens 
})(HomeContainer);
