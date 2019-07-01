import React from 'react';
import { Dropdown, Input } from 'semantic-ui-react';
import { catalogSortingOptions, courseSortingOptions, patronSortingOptions, sortingTypes, elementsPerPage } from './DropDownData.js';


class SortAndSearchBar extends React.Component {

    barType = this.props.barType;

    elementsOptions = () => {
        switch(this.barType){
            case 'catalog':
                return catalogSortingOptions;
            case 'course':
                return courseSortingOptions;
            case 'patron':
                return patronSortingOptions;
            default:
                return null;
        }
    };

    onChangeSortBy = (e, data) => {
        this.props.addSortingCriteriaSortBy(data.value);
        this.props.fetchElements(this.props.offset, this.props.pageSize, data.value, this.props.sortType, this.props.search);
    };

    onChangeSortingType = (e, data) => {
        this.props.addSortingCriteriaSortType(data.value);
        this.props.fetchElements(this.props.offset, this.props.pageSize, this.props.sortBy, data.value, this.props.search);
    };

    onChangePageSize = (e, data) => {
        this.props.setPageSize(data.value);
        this.props.fetchElements(this.props.offset, data.value, this.props.sortBy, this.props.sortType, this.props.search);
    };

    onChangeSearchBar = (e, data) => {
        this.props.setSearchKeyword(data.value);
        this.props.fetchElements(this.props.offset, this.props.pageSize, this.props.sortBy, this.props.sortType, data.value);
    };


    render () {

        return (
            <div>

                <div className="ui secondary pointing menu">
                    <Dropdown
                        placeholder='Sorting Criteria'
                        fluid
                        selection
                        options={this.elementsOptions()}
                        onChange={this.onChangeSortBy}
                    />
                    <Dropdown
                        placeholder='Sorting Type'
                        fluid
                        selection
                        options={sortingTypes}
                        onChange={this.onChangeSortingType}
                    />
                    <Dropdown
                        placeholder='Elements per page'
                        fluid
                        selection
                        options={elementsPerPage}
                        onChange={this.onChangePageSize}
                    />
                    <Input placeholder='Search...' onChange={this.onChangeSearchBar} defaultValue={this.props.search} />
                </div>

            </div>
        );
    }

}

export default SortAndSearchBar;