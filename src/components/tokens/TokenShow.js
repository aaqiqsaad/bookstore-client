import React from 'react';
import { connect } from 'react-redux';
import { fetchToken } from '../../actions';


class TokenShow extends React.Component {

    componentDidMount() {
        this.props.fetchToken(this.props.match.params.id);
    }

    render() {
        if(!this.props.token){
            return (
              <div>
                  Loading ...
              </div>
            );
        }
        return (
            <div>
                <h1>{this.props.token.ticker}</h1>
                <h5>{this.props.token.supply}</h5>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
  return { token: state.tokens[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {fetchToken})(TokenShow);