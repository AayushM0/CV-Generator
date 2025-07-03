
import "./skills-resume.css"

function SkillsResume({basicdata}){
    return (<div className="skills-resume-container">
        <h4 className="skills-resume">Skills</h4>
        <div className="all">
            {basicdata.map((skill,index) => (
                <div  key={index}  className="skill">{skill}</div>
            ))}
        </div>
    </div>)
}

export default SkillsResume