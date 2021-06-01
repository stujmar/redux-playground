import React from 'react';

class CoursesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: {
                title: ""
            }
        };
    }
    render() {
        return <h2>Courses Page</h2>
    }
}

export default CoursesPage;