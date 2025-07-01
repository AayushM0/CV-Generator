import "./basic-resume.css"

function Profileresume({basicdata}) {
  return (
    <div className="profiles">
      <h1>Profile</h1>
      <div className="linkedin">
        <h3>LinkedIn</h3>
        <p>Username: {basicdata[0].username}</p>
        <a href={basicdata[0].website} target="_blank" rel="noopener noreferrer">
          Visit Profile
        </a>
      </div>
      <div className="github">
        <h3>GitHub</h3>
        <p>Username: {basicdata[1].username}</p>
        <a href={basicdata[1].website} target="_blank" rel="noopener noreferrer">
          Visit Profile
        </a>
      </div>
    </div>
  )
}

export default Profileresume;