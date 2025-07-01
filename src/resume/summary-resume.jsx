import "./summary-resume.css"


function SummaryResume({basicdata}){
    return (
        <div className="summary-container-resume">
            <h3 className="summary">Summary</h3>
            <div className="data-container">
                <p>{basicdata}</p>
            </div>
        </div>
    )
}

export default SummaryResume;