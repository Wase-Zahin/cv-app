import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
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
        <PDFDownloadLink  
          trigger={() => {
            return <button type="button" className="addBtn">Generate PDF</button>;
          }}
          content={() => this.componentRef}
        ></PDFDownloadLink>
        <button type="button" className="delBtn" onClick={reset}>Reset</button>
      </div>
    );
  }
}

export default Template;


