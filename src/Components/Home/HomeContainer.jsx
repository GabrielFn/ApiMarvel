import React from 'react';
import { connect } from 'react-redux';

import { consultarPersonagens } from './Redux';
import './Home.css';

class HomeContainer extends React.Component {
    componentDidMount(){
        this.props.consultarPersonagens().then((e) => {
            console.log(e.data);
        });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      homeState: state.Home
    };
  };

export default connect(mapStateToProps, {
    consultarPersonagens
})(HomeContainer)