import React, { Component } from "react";
import ProjectsItem from "./projectsItem";

class Projects extends Component {
    render() {
        const {projects} = this.props;
        const projectsItems = projects.map((projectsItem) => {
            return (
                <ProjectsItem
                key={projectsItem.id}
                id={projectsItem.id}
                projectsItem={projectsItem}
                ></ProjectsItem>
            )
        })

        return (
            <div className="projects">
                <p className="headerProjects">Projects</p>
                <div className="hr"></div>
                {projectsItems}
            </div>

        )
    }
}

export default Projects;