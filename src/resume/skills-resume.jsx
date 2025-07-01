


function SkillsResume({basicdata}){
    return (<div className="skills-resume-container">
        <h4 className="skills">Skills</h4>
        <div className="all">
            {basicdata.map((skill,index) => (
                <p  key={index}  className="skill">{skill}</p>
            ))}
        </div>
    </div>)
}

export default SkillsResume