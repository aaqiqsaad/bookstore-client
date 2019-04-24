import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTokens } from '../../actions';



class TokenList extends React.Component {

    componentDidMount() {
        this.props.fetchTokens();
    }

    renderAdmin(token) {
        if(token.createdBy === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/tokens/edit/${token.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/tokens/delete/${token.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(token => {
            return (
                <div className="item" key={token.id}>
                    {this.renderAdmin(token)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/tokens/${token.id}`} className="header" >
                            {token.ticker}
                        </Link>
                        <div className="description">
                            {token.supply}
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        if(this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/tokens/new" className="ui button primary">
                        Create Token
                    </Link>
                </div>
            );
        }
    }

    render () {
        return (
            <div>
                <h2>Tokens</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.tokens),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchTokens })(TokenList);