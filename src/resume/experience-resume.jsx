


function ExperienceResume({basicdata}){

    return (
        <div className="experience-resume-container">
            <h3 className="experience">Experience</h3>
            {basicdata.map((exp,index) => (
                <div className="comp1">

            <div className="company-date">
                <h4 className="company">{exp.company}</h4>
                <h5 className="date">{exp.date}</h5>
            </div>
            <div className="position-location">
                <p className="position">{exp.position}</p>
                <p className="location">{exp.location}</p>
            </div>
            <div className="summary-exp">
                <p className="summary-p">{exp.summary}</p>
            </div>
            </div>
            ))}
            


        </div>
    )



}


export default ExperienceResume;