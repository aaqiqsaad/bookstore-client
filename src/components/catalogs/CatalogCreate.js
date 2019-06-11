import React from 'react';
import { connect } from 'react-redux';
import { createCatalog } from '../../actions';
import CatalogForm from './CatalogForm';


class CatalogCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createCatalog(formValues);
    };

    render () {
        return (
            <div>
                <h3>Create a catalog</h3>
                <CatalogForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}


export default connect(null, {createCatalog})(CatalogCreate);