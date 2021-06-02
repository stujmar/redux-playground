import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
    state = {
        course: {
            title: ""
        }
    };

    handleChange = (event) => { // State 3 class field? arrow functions inherit bind this scope.
        const course = {...this.state.course, title: event.target.value};
        this.setState({ course }); // Object shorthand syntax
        // this.setState({ course: course });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // alert(this.state.course.title);
        this.props.dispatch(courseActions.createCourse(this.state.course));
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
                <input type="submit" value="Save" />
            </form>
        )
    }
}

function mapStateToProps(state){
    return {
        courses: state.courses
    };
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(CoursesPage);