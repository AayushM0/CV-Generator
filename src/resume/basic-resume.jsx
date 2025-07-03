import "./basic-resume.css"


function BasicResume({basicdata}){
    return (
        <div className="basic">
        <div className="fullname"> <h2>{basicdata.fullName} </h2>
        <div className="otherData">
            <h4>{basicdata.phoneNumber}</h4>
            <h4>{basicdata.location}</h4>
            <h4>{basicdata.email}</h4>
        </div>
        </div>
        
        </div>
    )


}

export default BasicResume;