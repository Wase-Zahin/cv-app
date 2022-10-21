import React, { Component } from "react";

class ProjectsItem extends Component {
    render() {
        const {projectsItem} = this.props;

        return (
            <div className="projectWorks">
                <li>
                    {projectsItem.project || 'Your Projects'}
                </li>
            </div>
        )
    }
}

export default ProjectsItem;