
import "./projects.css"
import Textinput from "./text-input"
import { FaProjectDiagram } from "react-icons/fa";
function Projects({onchange,addEx,basicdata,removeSkill}){
    return (
        <div className="projects-container">
            <h3><FaProjectDiagram />Projects</h3>
             {basicdata.map((project,index) =>(
                <div key={index} className="Project1">
                    <button onClick={(e)=>{removeSkill(index,"projects")}}>-</button>
            <Textinput Label={"Name"} type="text" onchange={(e)=>{onchange(e,null,"projects","name",index)}}></Textinput>
            <Textinput Label={"Description"} type="text" onchange={(e)=>{onchange(e,null,"projects","description",index)}}></Textinput>
            <Textinput Label={"Date"} type="text" onchange={(e)=>{onchange(e,null,"projects","date",index)}}></Textinput>
            <Textinput Label={"Website"} type="text" onchange={(e)=>{onchange(e,null,"projects","website",index)}}></Textinput>
            <Textinput Label={"Summary"} type="textarea" onchange={(e)=>{onchange(e,null,"projects","summary",index)}}></Textinput>
        </div>
             ))}
        <button onClick={(e)=>{addEx("projects")}}>Add</button>
        </div>
    )
}

export default Projects;