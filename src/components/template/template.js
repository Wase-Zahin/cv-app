import React from 'react';
import ReactToPrint from 'react-to-print';
import TemplateItem from './templateItem';
class Template extends React.PureComponent {
  render() {
    const {university, experience, personalInfo, skills, interests, projects} = this.props;
    
    return (        
      <div>
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
      </div>
    );
  }
}

export default Template;