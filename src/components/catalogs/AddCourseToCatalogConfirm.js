import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addCourseToCatalog } from "../../actions";

class AddCourseToCatalog extends React.Component {

    componentDidMount() {

    }

    confirmAddCourseToCatalog =() => {
        this.props.addCourseToCatalog(this.props.match.params.crsId,this.props.match.params.catalogId);
        history.push(`/catalogs/${this.props.match.params.catalogId}/addcourse`);
    };

    renderAction() {
        return (
            <React.Fragment>
                <button className="ui button" onClick={this.confirmAddCourseToCatalog}>Confirm</button>
                <Link to={`/catalogs/${this.props.match.params.catalogId}/addcourse`} className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        return (
            <div>
                {`Do you confirm adding course ${this.props.match.params.crsId} to catalog ${this.props.match.params.catalogId}?`}
            </div>
        );
    }

    render() {
        return (
            <Modal
                title={`Add Course to Catalog ${this.props.match.params.id}`}
                content={this.renderContent()}
                actions={this.renderAction()}
                onDismiss={() => history.push(`/catalogs/${this.props.match.params.catalogId}/addcourse`)}
            />
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {}
};

export default connect(mapStateToProps, {addCourseToCatalog})(AddCourseToCatalog);