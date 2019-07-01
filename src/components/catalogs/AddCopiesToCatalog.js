import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {Link} from "react-router-dom";
import CatalogForm from "./CatalogForm";
import {fetchCatalog, editCatalog} from "../../actions";
import {connect} from "react-redux";
import _ from "lodash";

class AddCopiesToCatalog extends React.Component {

    componentDidMount() {
        this.props.fetchCatalog(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editCatalog(this.props.match.params.id, formValues);
    };

    renderAction() {
        return (
            <React.Fragment>
                <Link to={`/catalogs/${this.props.match.params.id}`} className="ui button negative">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        return (
            <CatalogForm
                isAddCopies
                onSubmit={this.onSubmit}
                initialValues={_.pick(this.props.catalog,'title', 'author','edition','price')}
            />
        );
    }

    render() {
        return (
            <Modal
                title={`Add Copies to Catalog ${this.props.match.params.id}`}
                content={this.renderContent()}
                actions={this.renderAction()}
                onDismiss={() => history.push(`/catalogs/${this.props.match.params.id}`)}
            />
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { catalog: state.catalogs[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {fetchCatalog, editCatalog})(AddCopiesToCatalog);