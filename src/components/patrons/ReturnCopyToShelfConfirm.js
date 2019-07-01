import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { returnCopyToShelf } from "../../actions";

class ReturnCopyToShelfConfirm extends React.Component {

    componentDidMount() {

    }

    handleClickConfirm =() => {
        this.props.returnCopyToShelf(this.props.match.params.catalogId, this.props.match.params.copyId);
    };

    renderAction() {
        return (
            <React.Fragment>
                <button className="ui button yellow" onClick={this.handleClickConfirm}>Return Copy to shelf</button>
                <Link to={`/catalogs/${this.props.match.params.catalogId}`} className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        return (
            <div>
                {`Do you confirm returning course ${this.props.match.params.copyId} to shelf?`}
            </div>
        );
    }

    render() {
        return (
            <Modal
                title={`Returning copy ${this.props.match.params.copyId} to shelf`}
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

export default connect(mapStateToProps, {returnCopyToShelf})(ReturnCopyToShelfConfirm);