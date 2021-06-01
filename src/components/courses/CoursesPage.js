import React from 'react';

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
    }

    render() {
        return (
            <form>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
                <input type="submit" value="Save" />
            </form>
        )
    }
}

export default CoursesPage;