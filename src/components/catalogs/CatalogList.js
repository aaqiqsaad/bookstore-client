import React from 'react';
import Pagination from 'semantic-ui-react-button-pagination';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    fetchCatalogs,
    setCatalogOffset,
    setCatalogPageSize,
    addCatalogSortingCriteriaSortBy,
    addCatalogSortingCriteriaSortType,
    setCatalogSearchKeyword
} from '../../actions';
import SortAndSearchBar from '../SortAndSearchBar';
import { Table } from 'semantic-ui-react'



class CatalogList extends React.Component {

    componentDidMount() {
        this.props.fetchCatalogs(this.props.catalogOffset, this.props.catalogPageSize, this.props.catalogSortBy, this.props.catalogAscOrDesc, this.props.catalogSearch);
    }

    renderAdmin(catalog) {
        if(catalog.createdBy === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/catalogs/edit/${catalog.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/catalogs/delete/${catalog.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderList() {

            const head = (
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Catalog Number</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Author</Table.HeaderCell>
                        <Table.HeaderCell>Edition</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            );

            const table_element = this.props.catalogs.map(catalog => {
                return (
                    <Table.Row key={catalog.id}>
                        <Table.Cell singleLine>
                            <Link to={`/catalogs/${catalog.id}`}>
                                {catalog.id}
                            </Link>
                        </Table.Cell>
                        <Table.Cell singleLine>
                            <Link to={`/catalogs/${catalog.id}`}>
                                {catalog.title}
                            </Link>
                        </Table.Cell>
                        <Table.Cell>{catalog.author}</Table.Cell>
                        <Table.Cell>{catalog.edition}</Table.Cell>
                        <Table.Cell>{catalog.price}</Table.Cell>
                        <Table.Cell>{this.renderAdmin(catalog)}</Table.Cell>
                    </Table.Row>
                );
            });

        return (

            <div>
                <Table celled padded>
                    {head}
                    <Table.Body>
                        {table_element}
                    </Table.Body>
                </Table>
            </div>
        );

    }

    renderCreate() {
        if(this.props.isSignedIn) {
            return (
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='7' singleLine>
                                <Link
                                    to={`/catalogs/new`}
                                    className="ui green plus button"
                                    style={{ marginLeft: '20px'}}
                                >
                                    <i className="plus icon"/>
                                    Add Catalog
                                </Link>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                </Table>
            );
        }
    }

    handleClick(catalogOffset) {
        this.props.setCatalogOffset(catalogOffset);
        this.props.fetchCatalogs(catalogOffset, this.props.catalogPageSize, this.props.catalogSortBy, this.props.catalogAscOrDesc, this.props.catalogSearch);
    }

    render () {
        return (
            <div>
                <SortAndSearchBar
                    barType='catalog'
                    addSortingCriteriaSortBy={this.props.addCatalogSortingCriteriaSortBy}
                    addSortingCriteriaSortType={this.props.addCatalogSortingCriteriaSortType}
                    setPageSize={this.props.setCatalogPageSize}
                    setSearchKeyword={this.props.setCatalogSearchKeyword}
                    fetchElements={this.props.fetchCatalogs}
                    offset={this.props.catalogOffset}
                    pageSize={this.props.catalogPageSize}
                    sortBy={this.props.catalogSortBy}
                    sortType={this.props.catalogAscOrDesc}
                    search={this.props.catalogSearch}
                />
                {this.renderCreate()}
                <div className="ui celled list">
                    {this.renderList()}
                </div>


                <Pagination
                    offset={this.props.catalogOffset}
                    limit={1}
                    total={this.props.catalogTotalPages}
                    onClick={(e, props, catalogOffset) => this.handleClick(catalogOffset)}
                />

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        catalogs: Object.values(state.catalogs),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
        catalogTotalPages: state.paging.catalogTotalPages,
        catalogOffset: state.paging.catalogOffset,
        catalogPageSize: state.paging.catalogPageSize,
        catalogSortBy: state.paging.catalogSortBy,
        catalogAscOrDesc: state.paging.catalogAscOrDesc,
        catalogSearch: state.paging.catalogSearch
    };
};

export default connect(mapStateToProps, {
    fetchCatalogs,
    setCatalogOffset,
    setCatalogPageSize,
    addCatalogSortingCriteriaSortBy,
    addCatalogSortingCriteriaSortType,
    setCatalogSearchKeyword
})(CatalogList);