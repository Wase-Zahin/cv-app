import './App.css';
import React, {Component} from 'react';
import Template from './components/template';
import Maker from './components/maker';
import UniMaker from './components/uni';
import UniTemplate from './components/uniTemplate';
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formVal: {},
      showMaker: true,
      showTemplate: false,
      uniMakerArr: [], 
      uniTemplateArr: [],
      uniCnt: 0,
      addExp: 0,
      //image: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onClickMaker = this.onClickMaker.bind(this);
    this.onClickTemplate = this.onClickTemplate.bind(this);
    this.addUniFn = this.addUniFn.bind(this);
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

  addUniFn(e) {
    const {uniMakerArr, uniCnt, uniTemplateArr} = this.state;
    uniMakerArr.push(<UniMaker key={uniqid()} number={uniCnt} />);
    uniTemplateArr.push(<UniTemplate key={uniqid()} number={uniCnt} />)

    this.setState({
      uniCnt: uniCnt + 1,
      uniMakerArr, uniTemplateArr
    })
    console.log(this.state.uniCnt, this.state.uniTemplateArr);

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
    const {firstName, lastName, title, phoneNo, email,
           address, university, uniCity, degree, sub,
           uniFrom, uniTo, position, company, expCity,
           expFrom, expTo} = this.state.formVal; 
    const {showMaker, showTemplate, uniMakerArr, uniTemplateArr} = this.state;
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
          {showMaker ? <Maker onSubmitForm={this.onSubmitForm} 
          handleChange={this.handleChange} add={this.addUniFn} 
          uniMakerState={uniMakerArr} firstName={firstName}/> : null}

          {showTemplate ? <Template onSubmitForm={this.onSubmitForm}
          uniTemplateState={uniTemplateArr}
          //state value for object "formVal"
          firstName={firstName} lastName={lastName} title={title}
          phoneNo={phoneNo} email={email} address={address}
          university={university} uniCity={uniCity} degree={degree}
          sub={sub} uniFrom={uniFrom} uniTo={uniTo} position={position}
          company={company} expCity={expCity} expFrom={expFrom} expTo={expTo}/> : null}
        </div>
      </div>
    );
  }
}

export default App;
