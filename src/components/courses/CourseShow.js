import React from 'react';
import { connect } from 'react-redux';
import { fetchCourse } from '../../actions';
import {Table} from "semantic-ui-react";
import {Link} from "react-router-dom";


class CourseShow extends React.Component {

    componentDidMount() {
        this.props.fetchCourse(this.props.match.params.id);
    }

    render() {
        if(!this.props.course){
            return (
                <div>
                    Loading ...
                </div>
            );
        }

        const patronElements = this.props.course.patronSet.map(patron => {
            return (
                <Table.Row>
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
            <div>
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine>Course id</Table.HeaderCell>
                            <Table.HeaderCell>Course Code</Table.HeaderCell>
                            <Table.HeaderCell>Term Code</Table.HeaderCell>
                            <Table.HeaderCell>Year Code</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell singleLine>{this.props.course.id}</Table.Cell>
                            <Table.Cell>{this.props.course.crsCde}</Table.Cell>
                            <Table.Cell>{this.props.course.trmCde}</Table.Cell>
                            <Table.Cell>{this.props.course.yrCde}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='7' singleLine>
                                Students Associated
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                </Table>

                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine>Patron id</Table.HeaderCell>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {patronElements}
                    </Table.Body>
                </Table>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { course: state.courses[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {fetchCourse})(CourseShow);