import React from 'react';
import Pagination from 'semantic-ui-react-button-pagination';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    fetchPatrons,
    setPatronOffset,
    setPatronPageSize,
    addPatronSortingCriteriaSortBy,
    addPatronSortingCriteriaSortType,
    setPatronSearchKeyword
} from '../../actions';
import SortAndSearchBar from '../SortAndSearchBar';
import { Table } from 'semantic-ui-react'


class PatronList extends React.Component {

    componentDidMount() {
        if(this.props.isEmbedded) {
            this.props.setPatronPageSize(5);
            this.props.fetchPatrons(this.props.patronOffset, 5, this.props.patronSortBy, this.props.patronAscOrDesc, this.props.patronSearch);
        } else {
            this.props.fetchPatrons(this.props.patronOffset, this.props.patronPageSize, this.props.patronSortBy, this.props.patronAscOrDesc, this.props.patronSearch);
        }
    }

    renderList() {

            const head = (
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>Patron id</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            );

            const table_element = this.props.patrons.map(patron => {
                return (
                    <Table.Row key={patron.idNum}>
                        <Table.Cell singleLine>
                            <Link to={`/patrons/${patron.idNum}`}>
                                {patron.idNum}
                            </Link>
                        </Table.Cell>
                        <Table.Cell singleLine>
                            <Link to={`/patrons/${patron.idNum}`}>
                                {patron.firstName}
                            </Link>
                        </Table.Cell>
                        <Table.Cell>{patron.lastName}</Table.Cell>
                        <Table.Cell>{patron.studMstrEmploy}</Table.Cell>
                    </Table.Row>
                );
            });

        return (
            <Table celled padded>
                {head}
                <Table.Body>
                    {table_element}
                </Table.Body>
            </Table>
        );

    }

    renderEmbeddedList() {
        const head = (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>
                        Assign
                    </Table.HeaderCell>
                    <Table.HeaderCell>Patron id</Table.HeaderCell>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        );

        const table_element = this.props.patrons.map(patron => {
            return (
                <Table.Row key={patron.idNum}>
                    <Table.Cell>
                        <Link to={`/catalogs/${this.props.embeddedCatalogId}/assigncopytopatronconfirm/${this.props.embeddedCopy}/${patron.idNum}`} className="ui teal button">
                            <i className="plus icon"/>
                        </Link>
                    </Table.Cell>
                    <Table.Cell singleLine>
                        <Link to={`/patrons/${patron.idNum}`}>
                            {patron.idNum}
                        </Link>
                    </Table.Cell>
                    <Table.Cell singleLine>
                        <Link to={`/patrons/${patron.idNum}`}>
                            {patron.firstName}
                        </Link>
                    </Table.Cell>
                    <Table.Cell>{patron.lastName}</Table.Cell>
                    <Table.Cell>{patron.studMstrEmploy}</Table.Cell>
                </Table.Row>
            );
        });

        return (
            <Table celled padded>
                {head}
                <Table.Body>
                    {table_element}
                </Table.Body>
            </Table>
        );
    }

    handleClick(patronOffset) {
        this.props.setPatronOffset(patronOffset);
        this.props.fetchPatrons(patronOffset, this.props.patronPageSize, this.props.patronSortBy, this.props.patronAscOrDesc, this.props.patronSearch);
    }

    render () {
        return (
            <div>
                <SortAndSearchBar
                    barType='patron'
                    addSortingCriteriaSortBy={this.props.addPatronSortingCriteriaSortBy}
                    addSortingCriteriaSortType={this.props.addPatronSortingCriteriaSortType}
                    setPageSize={this.props.setPatronPageSize}
                    setSearchKeyword={this.props.setPatronSearchKeyword}
                    fetchElements={this.props.fetchPatrons}
                    offset={this.props.patronOffset}
                    pageSize={this.props.patronPageSize}
                    sortBy={this.props.patronSortBy}
                    sortType={this.props.patronAscOrDesc}
                    search={this.props.patronSearch}
                />
                <div className="ui celled list">
                    {this.props.isEmbedded ? this.renderEmbeddedList() : this.renderList()}
                </div>
                <Pagination
                    offset={this.props.patronOffset}
                    limit={1}
                    total={this.props.patronTotalPages}
                    onClick={(e, props, patronOffset) => this.handleClick(patronOffset)}
                />

            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        patrons: Object.values(state.patrons),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
        patronTotalPages: state.paging.patronTotalPages,
        patronOffset: state.paging.patronOffset,
        patronPageSize: state.paging.patronPageSize,
        patronSortBy: state.paging.patronSortBy,
        patronAscOrDesc: state.paging.patronAscOrDesc,
        patronSearch: state.paging.patronSearch,
    };
};

export default connect(mapStateToProps, {
    fetchPatrons,
    setPatronOffset,
    setPatronPageSize,
    addPatronSortingCriteriaSortBy,
    addPatronSortingCriteriaSortType,
    setPatronSearchKeyword
})(PatronList);