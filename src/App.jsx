
import BasicData from "./data-inputs/basic-data";
import BasicResume from "./resume/basic-resume";
import "./App.css"
import Profileresume from "./resume/profile-resume";
import Profiles from "./data-inputs/profiles";
import useComponents from "./usable-components/useComponents";
import Summary from "./data-inputs/summary";
import SummaryResume from "./resume/summary-resume";
import ExperienceResume from "./resume/experience-resume";
import Experience from "./data-inputs/experience";
import EducationResume from "./resume/education-resume";
import Education from "./data-inputs/education";
import ProjectResume from "./resume/project-resume";
import Projects from "./data-inputs/projects";
import SkillsResume from "./resume/skills-resume";
import Skills from "./data-inputs/skills";
import CertificationResume from "./resume/certification-resume";
import Certification from "./data-inputs/certification";
function App(){

  const {formData,onchange,addSkill,removeSkill,addEx}=useComponents();


    return (<div className="main">

    <div className="input">
        <BasicData onchange={onchange}></BasicData>
        <Profiles onchange={onchange}/>
        <Summary onchange={onchange}/>
        <Experience onchange={onchange} basicdata={formData.experience} addEx={addEx} removeSkill={removeSkill}/>
        <Education onchange={onchange} />
        <Projects onchange={onchange} addEx={addEx} basicdata={formData.projects} removeSkill={removeSkill}/>
        <Skills onchange={onchange} basicdata={formData.skills} addSkill={addSkill} removeSkill={removeSkill}/>
        <Certification onchange={onchange} basicdata={formData.certifications} addEx={addEx} removeSkill={removeSkill}/>
    </div>
    

    <div className="resume-container">
      <div className="page-container">
      <BasicResume basicdata={formData.basic}/>
      <Profileresume basicdata={formData.profiles}/>
      <SummaryResume basicdata={formData.summary}/>
      <ExperienceResume basicdata={formData.experience}/>
      <EducationResume basicdata={formData.education}/>
      <ProjectResume basicdata={formData.projects}/>
      <SkillsResume basicdata={formData.skills}/>
      <CertificationResume basicdata={formData.certifications}/>
      </div>
    </div></div>)
}

export default App;