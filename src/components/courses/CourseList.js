import React from 'react';
import Pagination from 'semantic-ui-react-button-pagination';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    fetchCourses,
    setCourseOffset,
    setCoursePageSize,
    addCourseSortingCriteriaSortBy,
    addCourseSortingCriteriaSortType,
    setCourseSearchKeyword
} from '../../actions';
import SortAndSearchBar from '../SortAndSearchBar';
import { Table } from 'semantic-ui-react'



class CourseList extends React.Component {

    isEmbedded = this.props.isEmbedded;
    embeddedCatalog = this.props.embeddedCatalog;

    componentDidMount() {
        if(this.isEmbedded) {
            this.props.setCoursePageSize(5);
            this.props.fetchCourses(this.props.courseOffset, 5, this.props.courseSortBy, this.props.courseAscOrDesc, this.props.courseSearch);
        } else {
            this.props.fetchCourses(this.props.courseOffset, this.props.coursePageSize, this.props.courseSortBy, this.props.courseAscOrDesc, this.props.courseSearch);
        }
    }

    renderList() {
        const head = (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Course id</Table.HeaderCell>
                    <Table.HeaderCell>Course Code</Table.HeaderCell>
                    <Table.HeaderCell>Term Code</Table.HeaderCell>
                    <Table.HeaderCell>Year Code</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        );
        const table_element = this.props.courses.map(course => {
            return (
                <Table.Row key={course.id}>
                    <Table.Cell singleLine>
                        <Link to={`/courses/${course.id}`}>
                            {course.id}
                        </Link>
                    </Table.Cell>
                    <Table.Cell>{course.crsCde}</Table.Cell>
                    <Table.Cell>{course.trmCde}</Table.Cell>
                    <Table.Cell>{course.yrCde}</Table.Cell>
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
                    <Table.HeaderCell>Add</Table.HeaderCell>
                    <Table.HeaderCell>Course id</Table.HeaderCell>
                    <Table.HeaderCell>Course Code</Table.HeaderCell>
                    <Table.HeaderCell>Term Code</Table.HeaderCell>
                    <Table.HeaderCell>Year Code</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        );
        const table_element = this.props.courses.map(course => {
            return (
                <Table.Row key={course.id}>
                    <Table.Cell>
                        <Link to={`/catalogs/${this.embeddedCatalog}/addcourseconfirm/${course.id}`} className="ui green button">
                            <i className="plus icon"/>
                        </Link>
                    </Table.Cell>
                    <Table.Cell>{course.id}</Table.Cell>
                    <Table.Cell>{course.crsCde}</Table.Cell>
                    <Table.Cell>{course.trmCde}</Table.Cell>
                    <Table.Cell>{course.yrCde}</Table.Cell>
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

    handleClick(courseOffset) {
        this.props.setCourseOffset(courseOffset);
        this.props.fetchCourses(courseOffset, this.props.coursePageSize, this.props.courseSortBy, this.props.courseAscOrDesc, this.props.courseSearch);
    }

    render () {
        return (
            <div>
                <SortAndSearchBar
                    barType='course'
                    addSortingCriteriaSortBy={this.props.addCourseSortingCriteriaSortBy}
                    addSortingCriteriaSortType={this.props.addCourseSortingCriteriaSortType}
                    setPageSize={this.props.setCoursePageSize}
                    setSearchKeyword={this.props.setCourseSearchKeyword}
                    fetchElements={this.props.fetchCourses}
                    offset={this.props.courseOffset}
                    pageSize={this.props.coursePageSize}
                    sortBy={this.props.courseSortBy}
                    sortType={this.props.courseAscOrDesc}
                    search={this.props.courseSearch}
                />
                <div className="ui celled list">
                    {this.isEmbedded ? this.renderEmbeddedList() : this.renderList()}
                </div>
                <Pagination
                    offset={this.props.courseOffset}
                    limit={1}
                    total={this.props.courseTotalPages}
                    onClick={(e, props, courseOffset) => this.handleClick(courseOffset)}
                />

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        courses: Object.values(state.courses),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
        courseTotalPages: state.paging.courseTotalPages,
        courseOffset: state.paging.courseOffset,
        coursePageSize: state.paging.coursePageSize,
        courseSortBy: state.paging.courseSortBy,
        courseAscOrDesc: state.paging.courseAscOrDesc,
        courseSearch: state.paging.courseSearch
    };
};

export default connect(mapStateToProps, {
    fetchCourses,
    setCourseOffset,
    setCoursePageSize,
    addCourseSortingCriteriaSortBy,
    addCourseSortingCriteriaSortType,
    setCourseSearchKeyword
})(CourseList);