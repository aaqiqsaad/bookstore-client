import React from 'react';
import {Dropdown} from "semantic-ui-react";
import {menuOptions} from "./DropDownData";


const DropDownMenu = () => {
    return (
        <div className="right menu">
            <Dropdown
                placeholder='Menu'
                selection
                options={menuOptions}
            />
        </div>
    );
};

export default DropDownMenu;