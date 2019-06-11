import React from 'react';
import { Dropdown, Input } from 'semantic-ui-react';
import { sortingOptions, sortingTypes, elementsPerPage } from '../DropDownData.js';


class SortAndSearchBar extends React.Component {

    onChangeSortBy = (e, data) => {
        this.props.addSortingCriteriaSortBy(data.value);
        this.props.fetchCatalogs(this.props.offset, this.props.pageSize, data.value, this.props.sortType, this.props.search);
    };

    onChangeSortingType = (e, data) => {
        this.props.addSortingCriteriaSortType(data.value);
        this.props.fetchCatalogs(this.props.offset, this.props.pageSize, this.props.sortBy, data.value, this.props.search);
    };

    onChangePageSize = (e, data) => {
        this.props.setPageSize(data.value);
        this.props.fetchCatalogs(this.props.offset, data.value, this.props.sortBy, this.props.sortType, this.props.search);
    };

    onChangeSearchBar = (e, data) => {
        this.props.setSearchKeyword(data.value);
        this.props.fetchCatalogs(this.props.offset, this.props.pageSize, this.props.sortBy, this.props.sortType, data.value);
    };

    render () {
        return (
            <div>

                <div className="ui secondary pointing menu">
                    <Dropdown
                        placeholder='Sorting Criteria'
                        fluid
                        selection
                        options={sortingOptions}
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
                    <Input placeholder='Search...' onChange={this.onChangeSearchBar} />
                </div>

            </div>
        );
    }

}

export default SortAndSearchBar;