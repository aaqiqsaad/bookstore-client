import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import CatalogCreate from './catalogs/CatalogCreate';
import CatalogShow from './catalogs/CatalogShow';
import CatalogEdit from './catalogs/CatalogEdit';
import CatalogDelete from './catalogs/CatalogDelete';
import CatalogList from './catalogs/CatalogList';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={CatalogList} />
                        <Route path="/catalogs/new" exact component={CatalogCreate} />
                        <Route path="/catalogs/edit/:id" exact component={CatalogEdit} />
                        <Route path="/catalogs/delete/:id" exact component={CatalogDelete} />
                        <Route path="/catalogs/:id" exact component={CatalogShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
