import React from 'react';
import { connect } from 'react-redux';
import { createToken } from '../../actions';
import TokenForm from './TokenForm';


class TokenCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createToken(formValues);
    }

    render () {
        return (
            <div>
                <h3>Create a token</h3>
                <TokenForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}


export default connect(null, {createToken})(TokenCreate);