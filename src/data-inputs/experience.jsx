import "./experience.css"
import Textinput from "./text-input";
import { FaClock } from "react-icons/fa";

function Experience({onchange,basicdata,addEx,removeSkill}){


    return (<div className="experience-container">
        <h3 className="experience"><FaClock />Experience</h3>
        {basicdata.map((exp,index)=> (<div key={index} className="exp-div">
            <button onClick={(e)=>{removeSkill(index,"experience")}}>-</button>
            <Textinput Label={"Company"} type="text" onchange={(e)=>{onchange(e,null,"experience","company",index)}}></Textinput>
            <Textinput Label={"date"} type="text" onchange={(e)=>{onchange(e,null,"experience","date",index)}}></Textinput>
            <Textinput Label={"position"} type="text" onchange={(e)=>{onchange(e,null,"experience","position",index)}}></Textinput>
            <Textinput Label={"location"} type="text" onchange={(e)=>{onchange(e,null,"experience","location",index)}}></Textinput>
            <Textinput Label={"summary"} type="textarea" onchange={(e)=>{onchange(e,null,"experience","summary",index)}}></Textinput>
        </div>))}
        <button onClick={(e)=>{addEx("experience")}}>Add</button>
        
    </div>)


}


export default Experience;