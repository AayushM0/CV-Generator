


function ProjectResume({basicdata}){
    return (<div className="project-resume-container">
            <h3 className="project">Projects</h3>
            {basicdata.map((project,index)=>(
                <div className="project1">

            <div className="name-description">
                <h4 className="name">{project.name}</h4>
                <h5 className="description">{project.description}</h5>
            </div>
            <div className="date-website">
                <p className="date">{project.date}</p>
                <a href={project.website} target="_blank" rel="noopener noreferrer">Website</a>
            </div>
            <div className="summary-exp">
                <p className="summary">{project.summary}</p>
            </div>
            </div>
            ))}
        </div>)
}


export default ProjectResume