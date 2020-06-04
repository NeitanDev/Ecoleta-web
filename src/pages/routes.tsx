import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './Home/index';
import CreatePoit from './CreatePoint/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoit} path="/cadastro" />
        </BrowserRouter>
    );
}

export default Routes;