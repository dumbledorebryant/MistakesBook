import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Layout/>,
    document.getElementById('root'));
registerServiceWorker();

