import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import TokenCreate from './tokens/TokenCreate';
import TokenShow from './tokens/TokenShow';
import TokenEdit from './tokens/TokenEdit';
import TokenDelete from './tokens/TokenDelete';
import TokenList from './tokens/TokenList';
import Header from './Header';
import history from '../history';


const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={TokenList} />
                        <Route path="/tokens/new" exact component={TokenCreate} />
                        <Route path="/tokens/edit/:id" exact component={TokenEdit} />
                        <Route path="/tokens/delete/:id" exact component={TokenDelete} />
                        <Route path="/tokens/:id" exact component={TokenShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
