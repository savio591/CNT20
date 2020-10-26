import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import landing from './pages/landing';
import cntMaps from './pages/CNTMap';

import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/formulario';
import formularioMarker from './pages/formularioMarker';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={landing} />
                <Route path="/dashboard" component={cntMaps} />                
                <Route path="/formulario" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
                <Route path="/formularioMarker" component={formularioMarker} />

            </Switch>
        </BrowserRouter>
    );
}
export default Routes;