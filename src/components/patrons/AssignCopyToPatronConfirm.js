import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { assignCopyToPatron } from "../../actions";

class AddCourseToCatalog extends React.Component {

    componentDidMount() {

    }

    confirmAssignCopyToPatron =() => {
        this.props.assignCopyToPatron(this.props.match.params.catalogId, this.props.match.params.copyId, this.props.match.params.patronId);
    };

    renderAction() {
        return (
            <React.Fragment>
                <button className="ui button" onClick={this.confirmAssignCopyToPatron}>Confirm</button>
                <Link to={`/catalogs/${this.props.match.params.catalogId}/assigncopytopatron/${this.props.match.params.copyId}`} className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        return (
            <div>
                {`Do you confirm to assign the copy ${this.props.match.params.copyId} to the patron ${`to fill later`}?`}
            </div>
        );
    }

    render() {
        return (
            <Modal
                title={`Assign copy ${this.props.match.params.copyId} to patron ${`to fill later`}`}
                content={this.renderContent()}
                actions={this.renderAction()}
                onDismiss={() => history.push(`/catalogs/${this.props.match.params.catalogId}/assigncopytopatron/${this.props.match.params.copyId}`)}
            />
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {}
};

export default connect(mapStateToProps, {assignCopyToPatron})(AddCourseToCatalog);