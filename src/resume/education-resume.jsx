

function EducationResume({basicdata}){
    return (
        <div className="education-resume-container">
            <h3 className="education">Education</h3>
            <div className="edu1">

            <div className="institution-date">
                <h4 className="institution">{basicdata[0].institution}</h4>
                <h5 className="date">{basicdata[0].date}</h5>
            </div>
            <div className="study-type">
                <p className="study">{basicdata[0].study}</p>
                <p className="type">{basicdata[0].type}</p>
            </div>
            <div className="score-exp">
                <p className="score">{basicdata[0].score}</p>
            </div>
            </div>
        </div>
    )
}

export default EducationResume