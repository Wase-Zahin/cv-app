import React from 'react';
import ReactToPrint from 'react-to-print';
import TemplateItem from './templateItem';
class Template extends React.PureComponent {
  render() {
    const {university, experience, personalInfo, skills, interests, projects, reset} = this.props;
    
    return (        
      <div id='template'>
        <TemplateItem 
        university={university}
        experience={experience}
        personalInfo={personalInfo}
        skills={skills}
        interests={interests}
        projects={projects}
        ref={el => (this.componentRef = el)} />
        <ReactToPrint 
          trigger={() => {
            return <button type="button" className="addBtn">Generate PDF</button>;
          }}
          content={() => this.componentRef}
        />
        <button type="button" className="delBtn" onClick={reset}>Reset</button>
      </div>
    );
  }
}

export default Template;


