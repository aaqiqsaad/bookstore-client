import React from 'react';
import {Dropdown} from "semantic-ui-react";
import {menuOptions} from "./DropDownData";
import history from '../history';


class DropDownMenu extends React.Component {

    handleClick = (e, data) => {

        if(data.value==="Catalogs"){
            history.push("/catalogs");
        } else if (data.value==="Patrons") {
            history.push("/patrons");
        } else if (data.value==="Courses") {
            history.push("/courses");
        }

    };

    render (){
        return (
            <div className="right menu">
                <Dropdown
                    placeholder='Menu'
                    selection
                    options={menuOptions}
                    onChange={this.handleClick}
                />
            </div>
        );
    }

}

export default DropDownMenu;