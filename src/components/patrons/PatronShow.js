import React from 'react';
import { connect } from 'react-redux';
import { fetchPatron } from '../../actions';
import {Table} from "semantic-ui-react";
import {Link} from "react-router-dom";


class PatronShow extends React.Component {

    componentDidMount() {
        this.props.fetchPatron(this.props.match.params.idNum);
    }

    render() {
        if(!this.props.patron){
            return (
                <div>
                    Loading ...
                </div>
            );
        }

        /*const copiesInCirculation = this.props.catalog.courseSet.map(course => {
            return (
                <Table.Row key={course.id}>
                    <Table.Cell>{course.id}</Table.Cell>
                    <Table.Cell>{course.crsCde}</Table.Cell>
                    <Table.Cell>{course.trmCde}</Table.Cell>
                    <Table.Cell>{course.yrCde}</Table.Cell>
                    <Table.Cell>
                        <Link to={`/catalogs/${this.props.catalog.id}/removecourseconfirm/${course.id}`} className="ui red button">
                            <i className="trash icon"/>
                        </Link>
                    </Table.Cell>
                </Table.Row>
            );
        });*/

        return (
            <div>

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
                        <Table.Row>
                            <Table.Cell singleLine>
                                <Link to={`/patrons/${this.props.patron.idNum}`}>
                                    {this.props.patron.idNum}
                                </Link>
                            </Table.Cell>
                            <Table.Cell singleLine>
                                <Link to={`/patrons/${this.props.patron.idNum}`}>
                                    {this.props.patron.firstName}
                                </Link>
                            </Table.Cell>
                            <Table.Cell>{this.props.patron.lastName}</Table.Cell>
                            <Table.Cell>{this.props.patron.studMstrEmploy}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='7' singleLine>
                                Copies Bought
                                <Link
                                    to={`/patrons`}
                                    className="ui green plus button"
                                    style={{ marginLeft: '20px'}}
                                >
                                    <i className="plus icon"/>
                                    Add Catalog Copy
                                </Link>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                </Table>

                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Copy number</Table.HeaderCell>
                            <Table.HeaderCell>Course Code</Table.HeaderCell>
                            <Table.HeaderCell>Term</Table.HeaderCell>
                            <Table.HeaderCell>Year</Table.HeaderCell>
                            <Table.HeaderCell>Delete Course</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {}
                    </Table.Body>
                </Table>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { patron: state.patrons[ownProps.match.params.idNum] };
};

export default connect(mapStateToProps, {fetchPatron})(PatronShow);