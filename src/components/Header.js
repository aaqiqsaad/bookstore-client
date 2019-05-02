import React from 'react';
import { Link } from 'react-router-dom';
import MicrosoftAuth from './MicrosoftAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Tokens
                </Link>
                <MicrosoftAuth />
            </div>
        </div>
    );
};

export default Header;