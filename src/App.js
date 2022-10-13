import './App.css';
import React, {Component} from 'react';
import Template from './components/template';
import Maker from './components/maker';
import University from './components/university';
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {},
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
      experience: [],
      showMaker: true,
      showTemplate: false,
      //image: null,
    };

    this.handleUniChange = this.handleUniChange.bind(this);
    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onClickMaker = this.onClickMaker.bind(this);
    this.onClickTemplate = this.onClickTemplate.bind(this);
    this.addUniFn = this.addUniFn.bind(this);
    //this.onImageChange = this.onImageChange.bind(this);
  }
// onsubmitForm template should read
  handlePersonalInfoChange = (e) => {
    let personalInfo = this.state.personalInfo;
    let name = e.target.name;
    let val = e.target.value;
    
    personalInfo[name] = val;
    this.setState({personalInfo})
  }

  handleUniChange = (e) => {
    
  }

  addUniFn(e, id) {
    const {university} = this.state;
    const {name, val} = e.target

    const newElements = university.map(elem => {
      if (elem.id == id) return elem;
    })
    
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

  onSubmitForm(e) {
    e.preventDefault();
    console.log(this.state.university);
  }
  /*onImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };*/

  render() {
    const {firstName, lastName, title, phoneNo, email,
           address, position} = this.state.personalInfo; 
    const {name, city, degree, sub, from, to} = this.state.university;
    const {company, expCity, expFrom, expTo} = this.state.experience;
    
    const {showMaker, showTemplate, university, personalInfo} = this.state;

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
          handlePersonalInfoChange={this.handlePersonalInfoChange} 
          handleUniChange={this.handleUniChange}
          addUniFn={this.addUniFn}
          onSubmitForm={this.onSubmitForm} 

          name={name} city={city} degree={degree}
          sub={sub} from={from} to={to}
          /> : null}

          {showTemplate ? <Template 
          personalInfo={personalInfo}
          onSubmitForm={this.onSubmitForm}
          university={university}
          //state value for object "personalInfo"
          firstName={firstName} 
          lastName={lastName}
          title={title}
          phoneNo={phoneNo} 
          email={email} 
          address={address} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
