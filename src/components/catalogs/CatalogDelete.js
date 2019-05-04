import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import {fetchCatalog, deleteCatalog} from "../../actions";

class CatalogDelete extends React.Component {

    componentDidMount() {
        this.props.fetchCatalog(this.props.match.params.id);
    }

    renderAction() {
        /*
            Here const {id} = this.props.match.params is equivalent to const id = this.props.match.params.id
            this uses ES2015 syntax
         */
        const {id} = this.props.match.params;

        return (
            <React.Fragment>
                <button onClick={ () => this.props.deleteCatalog(id) } className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.catalog) {
            return 'Are you sure you want to delete this catalog?';
        }
        return `Are you sure you want to delete this catalog: ${this.props.catalog.title}?`;
    }

    render() {
        return (
            <Modal
                title="Delete Catalog"
                content={this.renderContent()}
                actions={this.renderAction()}
                onDismiss={() => history.push('/')}
            />
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {catalog: state.catalogs[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchCatalog, deleteCatalog})(CatalogDelete);