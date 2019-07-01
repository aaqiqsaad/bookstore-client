import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import CourseList from '../courses/CourseList';
import {Link} from "react-router-dom";

class AddCourseToCatalog extends React.Component {

    componentDidMount() {

    }

    renderAction() {
        return (
            <React.Fragment>
                <Link to={`/catalogs/${this.props.match.params.id}`} className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        return (
          <CourseList isEmbedded embeddedCatalog={this.props.match.params.id}/>
        );
    }

    render() {
        return (
            <Modal
                title={`Add Course to Catalog ${this.props.match.params.id}`}
                content={this.renderContent()}
                actions={this.renderAction()}
                onDismiss={() => history.push(`/catalogs/${this.props.match.params.id}`)}
            />
        );
    }

}


export default AddCourseToCatalog;