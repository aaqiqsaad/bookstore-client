import React from 'react';
import { Router, Route, Switch } from "react-router-dom";

import Home from './Home';

import CatalogCreate from './catalogs/CatalogCreate';
import CatalogShow from './catalogs/CatalogShow';
import CatalogEdit from './catalogs/CatalogEdit';
import CatalogDelete from './catalogs/CatalogDelete';
import CatalogList from './catalogs/CatalogList';

import CourseList from './courses/CourseList';
import CourseShow from './courses/CourseShow';

import PatronList from './patrons/PatronList';
import PatronShow from './patrons/PatronShow';
import AssignCopyToPatron from './patrons/AssignCopyToPatron';
import AssignCopyToPatronConfirm from "./patrons/AssignCopyToPatronConfirm";
import ReturnCopyToShelfConfirm from "./patrons/ReturnCopyToShelfConfirm";

import Header from './Header';
import history from '../history';
import AddCourseToCatalog from "./catalogs/AddCourseToCatalog";
import AddCourseToCatalogConfirm from "./catalogs/AddCourseToCatalogConfirm";
import RemoveCourseFromCatalogConfirm from "./catalogs/RemoveCourseFromCatalogConfirm";
import AddCopiesToCatalog from "./catalogs/AddCopiesToCatalog";

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/catalogs" exact component={CatalogList} />
                        <Route path="/catalogs/new" exact component={CatalogCreate} />
                        <Route path="/catalogs/edit/:id" exact component={CatalogEdit} />
                        <Route path="/catalogs/delete/:id" exact component={CatalogDelete} />
                        <Route path="/catalogs/:id" exact component={CatalogShow} />
                        <Route path="/catalogs/:id/addcourse" exact component={AddCourseToCatalog} />
                        <Route path="/catalogs/:catalogId/addcourseconfirm/:crsId" exact component={AddCourseToCatalogConfirm} />
                        <Route path="/catalogs/:catalogId/removecourseconfirm/:crsId" exact component={RemoveCourseFromCatalogConfirm} />
                        <Route path="/catalogs/:id/addcopies" exact component={AddCopiesToCatalog} />

                        <Route path="/patrons" exact component={PatronList} />
                        <Route path="/patrons/:idNum" exact component={PatronShow} />
                        <Route path="/catalogs/:catalogId/assigncopytopatron/:copyId/" exact component={AssignCopyToPatron} />
                        <Route path="/catalogs/:catalogId/assigncopytopatronconfirm/:copyId/:patronId" exact component={AssignCopyToPatronConfirm} />
                        <Route path="/returncopytoshelf/:catalogId/:copyId" exact component={ReturnCopyToShelfConfirm} />

                        <Route path="/courses" exact component={CourseList} />
                        <Route path="/courses/:id" exact component={CourseShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
