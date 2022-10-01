import './App.css';
import React, {Component} from 'react';
import Template from './components/template';
import Maker from './components/maker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formVal: {},
      showMaker: true,
      showTemplate: false,
      //image: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onClickMaker = this.onClickMaker.bind(this);
    this.onClickTemplate = this.onClickTemplate.bind(this);
    //this.onImageChange = this.onImageChange.bind(this);
  }
// onsubmitForm template should read
  handleChange = (e) => {
    let formVal = this.state.formVal;
    let name = e.target.name;
    let val = e.target.value;

    formVal[name] = val;
    this.setState({formVal})
  }

  onSubmitForm(e) {
    e.preventDefault();
    console.log(this.state.formVal);
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

  /*onImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };*/

  render() {
    return (
      <div>
        <header className="header">
          Curriculum Vitae!
        </header>
        <nav className="nav">
          <a className='ddd' onClick={this.onClickMaker}>Maker</a>
          <div className='vl'></div>
          <a onClick={this.onClickTemplate}>Preview</a>
        </nav>
        <div>
          {this.state.showMaker ? <Maker onSubmitForm={this.onSubmitForm} handleChange={this.handleChange}/> : null}
          {this.state.showTemplate ? <Template onSubmitForm={this.onSubmitForm}
          firstName={this.state.formVal.firstName}
          lastName={this.state.formVal.lastName}
          title={this.state.formVal.title}
          phoneNo={this.state.formVal.phoneNo}
          email={this.state.formVal.email}
          address={this.state.formVal.address}/> : null}
        </div>
      </div>
    );
  }
}

export default App;
