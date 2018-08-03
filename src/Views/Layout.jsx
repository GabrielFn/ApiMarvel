import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div>
                Testando
                { this.props.children }
            </div>
        );
    }
}

export default Layout;