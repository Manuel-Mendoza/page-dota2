import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


/* Pages */
import Index from '../Pages/index';
import Profile from '../Pages/profile';
/* Componentes */


function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Index} />
                <Route exact path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;