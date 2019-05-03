import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCatalog, editCatalog } from "../../actions";
import CatalogForm from './CatalogForm';

class CatalogEdit extends React.Component {

    componentDidMount() {
        this.props.fetchCatalog(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editCatalog(this.props.match.params.id, formValues);
    };

    render(){
        if(!this.props.catalog) {
            return (
                <div>
                    Loading ...
                </div>
            );
        }
        return (
            <div>
                <h3>Edit a catalog</h3>
                <CatalogForm
                    initialValues={_.pick(this.props.catalog, 'ticker', 'supply')}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }

};

const mapStateToProps = (state, ownProps) => {
    return { catalog: state.catalogs[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {fetchCatalog, editCatalog})(CatalogEdit);