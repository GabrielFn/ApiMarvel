import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Layout.css";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <div className="base-header"></div>
                <div className="content-wrapper">
                    { this.props.children }
                </div>
                <div className="bottom">
                    <div className="texto">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;