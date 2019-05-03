import React from 'react';
import { Link } from 'react-router-dom';
import MicrosoftAuth from './MicrosoftAuth';

import logo from './images/logo.png';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/">
                <img className="ui small image left img-responsive" src={logo} alt="Logo" />
            </Link>
            <div className="right menu">
                <MicrosoftAuth />
            </div>
        </div>
    );
};

export default Header;