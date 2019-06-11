import React from 'react';
import Pagination from 'semantic-ui-react-button-pagination';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCatalogs, setOffset, setPageSize, addSortingCriteriaSortBy, addSortingCriteriaSortType, setSearchKeyword } from '../../actions';
import SortAndSearchBar from './SortAndSearchBar';


class CatalogList extends React.Component {

    componentDidMount() {
        this.props.fetchCatalogs(this.props.offset, this.props.pageSize, this.props.sortBy, this.props.sortType, this.props.search);
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
        return this.props.catalogs.map(catalog => {
            return (
                <div className="item" key={catalog.id}>
                    {this.renderAdmin(catalog)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/catalogs/${catalog.id}`} className="header" >
                            {catalog.title}
                        </Link>
                        <div className="description">
                            {catalog.author}
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
                    <Link to="/catalogs/new" className="ui button primary">
                        Create Catalog
                    </Link>
                </div>
            );
        }
    }

    handleClick(offset) {
        this.props.setOffset(offset);
        this.props.fetchCatalogs(offset, this.props.pageSize, this.props.sortBy, this.props.sortType, this.props.search);
    }

    render () {
        return (
            <div>
                <SortAndSearchBar
                    addSortingCriteriaSortBy={this.props.addSortingCriteriaSortBy}
                    addSortingCriteriaSortType={this.props.addSortingCriteriaSortType}
                    setPageSize={this.props.setPageSize}
                    setSearchKeyword={this.props.setSearchKeyword}
                    fetchCatalogs={this.props.fetchCatalogs}
                    offset={this.props.offset}
                    pageSize={this.props.pageSize}
                    sortBy={this.props.sortBy}
                    sortType={this.props.sortType}
                    search={this.props.search}
                />
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}

                <Pagination
                    offset={this.props.offset}
                    limit={1}
                    total={this.props.totalPages}
                    onClick={(e, props, offset) => this.handleClick(offset)}
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
        totalPages: state.paging.totalPages,
        offset: state.paging.offset,
        pageSize: state.paging.pageSize,
        sortBy: state.paging.sortBy,
        sortType: state.paging.ascOrDesc,
        search: state.paging.search
    };
};

export default connect(mapStateToProps, {
    fetchCatalogs,
    setOffset,
    setPageSize,
    addSortingCriteriaSortBy,
    addSortingCriteriaSortType,
    setSearchKeyword
})(CatalogList);