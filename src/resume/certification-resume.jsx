

function CertificationResume({basicdata}){
    return (<div className="certification-resume-container">
        <h4 className="heading">Certifications</h4>
        {basicdata.map((ob,index) => (<div key={index} className="certification-data">
            

            <div className="name-issuer">
                <h4 className="name">{ob.name}</h4>
                <h5 className="issuer">{ob.issuer}</h5>
            </div>
            <div className="date-website">
                <p className="date">{ob.date}</p>
                <a href={ob.website} target="_blank">Website</a>
            </div>
            <div className="summary-exp">
                <p className="summary">{ob.summary}</p>
            </div>
            </div>
        )
            
        )}
    </div>)
}

export default CertificationResume;