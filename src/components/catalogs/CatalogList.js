import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCatalogs } from '../../actions';



class CatalogList extends React.Component {

    componentDidMount() {
        this.props.fetchCatalogs();
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
        return this.props.streams.map(catalog => {
            return (
                <div className="item" key={catalog.id}>
                    {this.renderAdmin(catalog)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/catalogs/${catalog.id}`} className="header" >
                            {catalog.ticker}
                        </Link>
                        <div className="description">
                            {catalog.supply}
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

    render () {
        return (
            <div>
                <h2>Catalogs</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.catalogs),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchCatalogs })(CatalogList);