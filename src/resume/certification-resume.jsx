import "./certification-resume.css"

function CertificationResume({basicdata}){
    return (<div className="certification-resume-container">
        <h4 className="certifications-resume">Certifications</h4>
        {basicdata.map((ob,index) => (<div key={index} className="certification-data">
            

            <div className="name-issuer">
                <h4 className="name-cer">{ob.name}</h4>
                <h5 className="issuer-cer">{ob.issuer}</h5>
            </div>
            <div className="date-website">
                <p className="date-cer">{ob.date}</p>
                <a className="link-cer" href={ob.website} target="_blank">Website</a>
            </div>
            <div className="summary-exp">
                <p className="summary-cer">{ob.summary}</p>
            </div>
            </div>
        )
            
        )}
    </div>)
}

export default CertificationResume;