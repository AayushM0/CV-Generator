import "./profiles-resume.css"

function Profileresume({basicdata}) {
  return (
    <div className="profiles">
      <h4 className="profile">Profile</h4>
      <div className="lingit">
      <div className="linkedin-resume">
        <p className="profile-head">{basicdata[0].username}</p>
        <a className="profile-link" href={basicdata[0].website} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <div className="github-resume">
        <p className="profile-head">{basicdata[1].username}</p>
        <a className="profile-link" href={basicdata[1].website} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      </div>
    </div>
  )
}

export default Profileresume;