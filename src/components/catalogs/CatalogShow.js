import React from 'react';
import { connect } from 'react-redux';
import { fetchCatalog } from '../../actions';


class CatalogShow extends React.Component {

    componentDidMount() {
        this.props.fetchCatalog(this.props.match.params.id);
    }

    render() {
        if(!this.props.catalog){
            return (
                <div>
                    Loading ...
                </div>
            );
        }
        return (
            <div>
                <h5>{this.props.catalog.title}</h5>
                <h5>{this.props.catalog.author}</h5>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { catalog: state.catalogs[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {fetchCatalog})(CatalogShow);