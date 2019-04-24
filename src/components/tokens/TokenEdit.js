import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchToken, editToken } from "../../actions";
import TokenForm from './TokenForm';

class TokenEdit extends React.Component {

    componentDidMount() {
        this.props.fetchToken(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editToken(this.props.match.params.id, formValues);
    };

    render(){
        if(!this.props.token) {
            return (
                <div>
                      Loading ...
                </div>
            );
        }
        return (
            <div>
                <h3>Edit a token</h3>
                <TokenForm
                    initialValues={_.pick(this.props.token, 'ticker', 'supply')}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }

};

const mapStateToProps = (state, ownProps) => {
    return { token: state.tokens[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {fetchToken, editToken})(TokenEdit);