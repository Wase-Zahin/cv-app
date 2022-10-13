import React, { Component } from "react";

class ProjectsTemplate extends Component {
    render() {
        const {firstName, lastName, title, phoneNo, email, address} = this.props;

        return (
            <div className="projects">
                <p className="headerProjects">Projects</p><div className="hr"></div>
                <div className="projectWorks">
                    <li>list your projects</li>
                    <li>more projects</li>
                </div>
            </div>

        )
    }
}

export default ProjectsTemplate;