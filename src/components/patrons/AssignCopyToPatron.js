import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import PatronList from './PatronList';
import {Link} from "react-router-dom";

class AssignCopyToPatron extends React.Component {

    componentDidMount() {

    }

    renderAction() {
        return (
            <React.Fragment>
                <Link to={`/catalogs/${this.props.match.params.catalogId}`} className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        return (
            <PatronList isEmbedded embeddedCatalogId={this.props.match.params.catalogId} embeddedCopy={this.props.match.params.copyId}/>
        );
    }

    render() {
        return (
            <Modal
                title={`Assign catalog copy to patron`}
                content={this.renderContent()}
                actions={this.renderAction()}
                onDismiss={() => history.push(`/catalogs/${this.props.match.params.catalogId}`)}
            />
        );
    }

}

export default AssignCopyToPatron;