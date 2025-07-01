import "./skills.css"
import Textinput from "./text-input"
import useComponents from "../usable-components/useComponents"
import { GiSkills } from "react-icons/gi";
function Skills({onchange,basicdata,addSkill,removeSkill}){
   
    return (
        <div className="skills-container">
            <h3 className="heading"><GiSkills /> Skills</h3>
            <div className="skill-input-container">
                {basicdata.map((skill,index)=>(
                    <div key={index} className="input-line">
                    <Textinput value={skill} remove={(e)=>{removeSkill(index,"skills")}} type="text" onchange={(e)=>{onchange(e,null,"skills",null,index)}}/>
                    <button className="remove2" onClick={(e)=>{removeSkill(index,"skills")}}>-</button>
                    </div>
                ))}
            </div>
            <button className="add" onClick={addSkill}>Add</button>
        </div>
    )
}

export default Skills