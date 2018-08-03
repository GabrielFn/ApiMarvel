import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MainApp from './MainApp';

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
