import React from 'react';
import { connect } from 'react-redux';
import { fetchCatalog } from '../../actions';
import {Table} from "semantic-ui-react";
import {Link} from "react-router-dom";


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

        const courseElements = this.props.catalog.courseSet.map(course => {
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
        });

        const renderActionOnCopy = (catalogCopy) => {
            if(catalogCopy.copyStatus.includes("SHELF")) {
                return (
                    <Link to={`/catalogs/${this.props.catalog.id}/assigncopytopatron/${catalogCopy.copyId}/`} className="ui right labeled icon button teal">
                        <i className="check icon"/>
                        Assign
                    </Link>
                );
            } else {
                return (
                    <Link to={`/returncopytoshelf/${this.props.catalog.id}/${catalogCopy.copyId}/`} className="ui right labeled icon button yellow">
                        <i className="check icon"/>
                        Return
                    </Link>
                );
            }
        };

        const copiesElements = this.props.catalog.catalogCopySet.map(catalogCopy => {
           return <Table.Row key={catalogCopy.copyId}>
               <Table.Cell>{catalogCopy.copyNum}</Table.Cell>
               <Table.Cell>{catalogCopy.copyStatus}</Table.Cell>
               <Table.Cell>
                   {catalogCopy.patron != null ? (catalogCopy.patron.firstName + ' ' + catalogCopy.patron.lastName + ' - id: ' + catalogCopy.patron.idNum) : '-'}
               </Table.Cell>
               <Table.Cell>
                   {renderActionOnCopy(catalogCopy)}
               </Table.Cell>
           </Table.Row> ;
        });

        return (
            <div>

                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='9' singleLine>
                                <h3 className="left">
                                    {`${this.props.catalog.title} - 
                                    ${this.props.catalog.author}, 
                                    ${this.props.catalog.edition}th edition`}
                                </h3>
                                <Link to={`/catalogs/edit/${this.props.catalog.id}`} className="ui button primary">
                                    <i className="edit icon"/> Edit or Add Copies
                                </Link>
                                <Link to={`/catalogs/delete/${this.props.catalog.id}`} className="ui button negative">
                                    <i className="trash icon"/> Delete this catalog
                                </Link>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine>Catalog Number</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Author</Table.HeaderCell>
                            <Table.HeaderCell>Edition</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Created By</Table.HeaderCell>
                            <Table.HeaderCell>
                                Shelf Copies
                                <Link
                                    to={`/catalogs/${this.props.catalog.id}/addcopies`}
                                    className="ui green plus button"
                                >
                                    <i className="plus icon"/>
                                    Add
                                </Link>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                    Unavailable Copies
                            </Table.HeaderCell>
                            <Table.HeaderCell>Date Added</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell singleLine>
                                <Link to={`/catalogs/${this.props.catalog.id}`}>
                                    {this.props.catalog.id}
                                </Link>
                            </Table.Cell>
                            <Table.Cell singleLine>
                                <Link to={`/catalogs/${this.props.catalog.id}`}>
                                    {this.props.catalog.title}
                                </Link>
                            </Table.Cell>
                            <Table.Cell>{this.props.catalog.author}</Table.Cell>
                            <Table.Cell>{this.props.catalog.edition}</Table.Cell>
                            <Table.Cell>{this.props.catalog.price}</Table.Cell>
                            <Table.Cell>{this.props.catalog.createdBy}</Table.Cell>
                            <Table.Cell>{this.props.catalog.numCopies}</Table.Cell>
                            <Table.Cell>{this.props.catalog.unavailableCopies}</Table.Cell>
                            <Table.Cell>{this.props.catalog.dateAdded}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='5' singleLine>
                                Courses Associated
                                <Link
                                    to={`/catalogs/${this.props.catalog.id}/addcourse`}
                                    className="ui green plus button"
                                    style={{ marginLeft: '20px'}}
                                >
                                    <i className="plus icon"/>
                                    Add Course
                                </Link>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Course ID</Table.HeaderCell>
                            <Table.HeaderCell>Course Code</Table.HeaderCell>
                            <Table.HeaderCell>Term</Table.HeaderCell>
                            <Table.HeaderCell>Year</Table.HeaderCell>
                            <Table.HeaderCell>Delete Course</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {courseElements}
                    </Table.Body>
                </Table>

                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4' singleLine>
                                Catalog Copies
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Copy id</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Patron</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {copiesElements}
                    </Table.Body>
                </Table>

            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { catalog: state.catalogs[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {fetchCatalog})(CatalogShow);