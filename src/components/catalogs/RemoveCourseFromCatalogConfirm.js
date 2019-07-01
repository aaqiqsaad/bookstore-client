import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { removeCourseFromCatalog } from "../../actions";

class RemoveCourseFromCatalogConfirm extends React.Component {

    componentDidMount() {

    }

    confirmRemoveCourseFromCatalog =() => {
        this.props.removeCourseFromCatalog(this.props.match.params.crsId,this.props.match.params.catalogId);
        history.push(`/catalogs/${this.props.match.params.catalogId}`);
    };

    renderAction() {
        return (
            <React.Fragment>
                <button className="ui button negative" onClick={this.confirmRemoveCourseFromCatalog}>Delete</button>
                <Link to={`/catalogs/${this.props.match.params.catalogId}`} className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        return (
            <div>
                {`Do you confirm removing course ${this.props.match.params.crsId} from catalog ${this.props.match.params.catalogId}?`}
            </div>
        );
    }

    render() {
        return (
            <Modal
                title={`Remove course ${this.props.match.params.crsId}  from catalog ${this.props.match.params.catalogId}`}
                content={this.renderContent()}
                actions={this.renderAction()}
                onDismiss={() => history.push(`/catalogs/${this.props.match.params.catalogId}`)}
            />
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {}
};

export default connect(mapStateToProps, {removeCourseFromCatalog})(RemoveCourseFromCatalogConfirm);