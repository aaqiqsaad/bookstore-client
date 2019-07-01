import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';
import * as Msal from 'msal';

class MicrosoftAuth extends React.Component {

    componentDidMount() {
        this.msalConfig = {
            auth: {
                clientId: "6e575e76-c11a-4461-b107-b2b078df2e61",
                authority: "https://login.microsoftonline.com/7025e04c-70ca-48bf-ab7b-73954cb846ad"
            },
            cache: {
                cacheLocation: "localStorage",
                storeAuthStateInCookie: true
            }
        };
        this.myMSALObj = new Msal.UserAgentApplication(this.msalConfig);
        this.myMSALObj.handleRedirectCallbacks(
            () => {}, (error) => { console.log(error) }
        );
        this.onAuthChange();
    }

    onAuthChange = () => {
        if (this.myMSALObj.getAccount()!=null) {
            this.props.signIn(this.myMSALObj.getAccount().accountIdentifier);
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.myMSALObj.loginPopup({scopes: ["user.read"], prompt: "select_account"})
            .then(() => {
                this.myMSALObj.acquireTokenSilent({scopes: ["user.read"]})
                    .then(
                        accessTokenResponse => {}
                    ).catch(function (error) {
                    console.log(error);
                });
                this.onAuthChange();
            });
    };

    onSignOutClick = () => {
        this.myMSALObj.logout();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui blue microsoft button">
                    <i className="microsoft icon"/>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui blue microsoft button">
                    <i className="microsoft icon"/>
                    Sign In with AD
                </button>
            );
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }

}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {signIn, signOut})(MicrosoftAuth);
