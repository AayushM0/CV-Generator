import "./education-resume.css"

function EducationResume({basicdata}){
    return (
        <div className="education-resume-container">
            <h3 className="education-resume">Education</h3>
            <div className="edu1">

            <div className="institution-date">
                <h4 className="institution-edu">{basicdata[0].institution}</h4>
                <h5 className="date-edu">{basicdata[0].date}</h5>
            </div>
            <div className="study-type">
                <p className="study-edu">{basicdata[0].study}</p>
                <p className="type-edu">{basicdata[0].type}</p>
            </div>
            <div className="score-exp">
                <p className="score-edu">{basicdata[0].score}</p>
            </div>
            </div>
        </div>
    )
}

export default EducationResume