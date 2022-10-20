import './App.css';
import React, {Component} from 'react';
import Template from './components/template';
import Maker from './components/maker';
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

      showMaker: true,
      showTemplate: false,
    };

    this.handleUniChange = this.handleUniChange.bind(this);
    this.handleCompChange = this.handleCompChange.bind(this);
    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    this.onClickMaker = this.onClickMaker.bind(this);
    this.onClickTemplate = this.onClickTemplate.bind(this);
    this.addUniFn = this.addUniFn.bind(this);
    this.addCompFn = this.addCompFn.bind(this);
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
    const {showMaker, showTemplate, university, personalInfo, experience} = this.state;

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
          handlePersonalInfoChange={this.handlePersonalInfoChange} 
          onCompChange={this.handleCompChange}
          onChange={this.handleUniChange}
          addUniFn={this.addUniFn}
          addCompFn={this.addCompFn}
          onSubmitForm={this.onSubmitForm} 
          /> : null}

          {showTemplate ? <Template 
          personalInfo={personalInfo}
          university={university}
          experience={experience}
          /> : null}
        </div>
      </div>
    );
  }
}

export default App;
