import React from 'react';
import './Box.css';

class Box extends React.Component {
    render() {
        return (
            <div className="container box">
                <div className="col-md-12"> 
                    <p>{ this.props.titulo }</p>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        { this.props.children } 
                    </div>
                </div>
            </div>
        )
    }
}

export default Box;