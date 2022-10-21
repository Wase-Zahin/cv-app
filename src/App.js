import './App.css';
import React, {Component} from 'react';
import Template from './components/template/template';
import Maker from './components/maker/maker';
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: 
        {
          id: uniqid(),
          firstName: '',
          lastName: '',
          title: '',
          email: '',
          address: '',
          phoneNo: '',
        },

      university: [
        {
          id: uniqid(),
          name: '',
          degree: '',
          sub: '',
          city: '',
          from: '',
          to: '',
        }
      ], 

      experience: [
        {
          id: uniqid(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        }
      ],

      skills: [
        {
          id: uniqid(),
          skill: '',
        }
      ],

      projects: [
        {
          id: uniqid(),
          project: '',
        }
      ],

      interests: [
        {
          id: uniqid(),
          interest: '',
        }
      ],

      showMaker: true,
      showTemplate: false,
    };

    this.handleUniChange = this.handleUniChange.bind(this);
    this.handleCompChange = this.handleCompChange.bind(this);
    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    this.handleSkillsChange = this.handleSkillsChange.bind(this);
    this.handleProjectsChange = this.handleProjectsChange.bind(this);
    this.handleInterestsChange = this.handleInterestsChange.bind(this);
    this.onClickMaker = this.onClickMaker.bind(this);
    this.onClickTemplate = this.onClickTemplate.bind(this);
    this.addUniFn = this.addUniFn.bind(this);
    this.addCompFn = this.addCompFn.bind(this);
    this.addSkillsFn = this.addSkillsFn.bind(this);
    this.addProjectsFn = this.addProjectsFn.bind(this);
    this.addInterestsFn = this.addInterestsFn.bind(this);
  }

  handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }))
  }

  handleUniChange = (e, id) => {
    const { name, value } = e.target
    this.setState((prevState) => {
      const newEducation = prevState.university.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value }
        }
        return educationItem
      })
      return { ...prevState, university: [...newEducation] }
    })
  }

  handleCompChange = (e, id) => {
    const { name, value } = e.target
    this.setState((prevState) => {
      const newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value }
        }
        return experienceItem
      })
      return { ...prevState, experience: [...newExperience] }
    })
  }

  handleSkillsChange = (e, id) => {
    const { name, value } = e.target
    this.setState((prevState) => {
      const newSkills = prevState.skills.map((skillsItem) => {
        if (skillsItem.id === id) {
          return { ...skillsItem, [name]: value }
        }
        return skillsItem
      })
      return { ...prevState, skills: [...newSkills] }
    })
  }

  handleProjectsChange = (e, id) => {
    const { name, value } = e.target
    this.setState((prevState) => {
      const newProjects = prevState.projects.map((projectsItem) => {
        if (projectsItem.id === id) {
          return { ...projectsItem, [name]: value }
        }
        return projectsItem
      })
      return { ...prevState, projects: [...newProjects] }
    })
  }

  handleInterestsChange = (e, id) => {
    const { name, value } = e.target
    this.setState((prevState) => {
      const newInterests = prevState.interests.map((interestsItem) => {
        if (interestsItem.id === id) {
          return { ...interestsItem, [name]: value }
        }
        return interestsItem
      })
      return { ...prevState, interests: [...newInterests] }
    })
  }

  addUniFn() {
    this.setState(prevState => ({
      university: [...prevState.university, 
        {
          id: uniqid(),
          name: '',
          degree: '',
          sub: '',
          city: '',
          from: '',
          to: '',
        }
      ]
    }))
  }

  addCompFn() {
    this.setState(prevState => ({
      experience: [...prevState.experience,
        {
          id: uniqid(),
          position: '',
          company: '',
          city: '',
          from: '',
          to: '',
        }
      ],
    }))
  }

  addSkillsFn() {
    this.setState(prevState => ({
      skills: [...prevState.skills,
        {
          id: uniqid(),
          skill: '',
        }
      ],
    }))
  }

  addProjectsFn() {
    this.setState(prevState => ({
      projects: [...prevState.projects,
        {
          id: uniqid(),
          project: '',
        }
      ],
    }))
  }

  addInterestsFn() {
    this.setState(prevState => ({
      interests: [...prevState.interests,
        {
          id: uniqid(),
          interest: '',
        }
      ],
    }))
  }

  onClickMaker(e) {
    this.setState({
      showMaker: true,
      showTemplate: false,
    })
  }

  onClickTemplate(e) {
    this.setState({
      showMaker: false,
      showTemplate: true,
    })
  }

  render() {
    const {showMaker, showTemplate, university, personalInfo, 
      experience, skills, projects, interests} = this.state;

    return (
      <div>
        <header className="header">
          Curriculum Vitae!
        </header>

        <nav className="nav">
          <a onClick={this.onClickMaker}>Maker</a>
          <div className='vl'></div>
          <a onClick={this.onClickTemplate}>Preview</a>
        </nav>

        <div>
          {showMaker ? 
          <Maker
          university={university}
          experience={experience}
          personalInfo={personalInfo}
          skills={skills}
          projects={projects}
          interests={interests}
          handlePersonalInfoChange={this.handlePersonalInfoChange}
          onInterestsChange={this.handleInterestsChange} 
          onCompChange={this.handleCompChange}
          onSkillsChange={this.handleSkillsChange}
          onProjectsChange={this.handleProjectsChange}
          onChange={this.handleUniChange}
          addUniFn={this.addUniFn}
          addCompFn={this.addCompFn}
          addSkillsFn={this.addSkillsFn}
          addProjectsFn={this.addProjectsFn}
          addInterestsFn={this.addInterestsFn}
          /> : null}

          {showTemplate ? <Template 
          personalInfo={personalInfo}
          university={university}
          experience={experience}
          skills={skills}
          projects={projects}
          interests={interests}
          /> : null}
        </div>
      </div>
    );
  }
}

export default App;
