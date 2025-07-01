import "./experience.css"
import Textinput from "./text-input";
import { FaClock } from "react-icons/fa";

function Experience({onchange,basicdata,addEx,removeSkill}){


    return (<div className="experience-container">
        <h3 className="experience"><FaClock className="icon" /> Experience</h3>
        {basicdata.map((exp,index)=> (<div key={index} className="exp-div">
            <div className="compNumb">
            <h4>{`Employment ${index+1}`}</h4>
            <button className="remove" onClick={(e)=>{removeSkill(index,"experience")}}>-</button>
            </div>
            <div className="input-row">
            <Textinput Label={"Company"} type="text" onchange={(e)=>{onchange(e,null,"experience","company",index)}}></Textinput>
            <Textinput Label={"Date"} type="text" onchange={(e)=>{onchange(e,null,"experience","date",index)}}></Textinput>
            </div>
            <div className="input-row">
            <Textinput Label={"Position"} type="text" onchange={(e)=>{onchange(e,null,"experience","position",index)}}></Textinput>
            <Textinput Label={"Location"} type="text" onchange={(e)=>{onchange(e,null,"experience","location",index)}}></Textinput>
            </div>
            <Textinput Label={"Summary"} type="textarea" onchange={(e)=>{onchange(e,null,"experience","summary",index)}}></Textinput>
        </div>))}
        <button className="add" onClick={(e)=>{addEx("experience")}}>Add</button>
        
    </div>)


}


export default Experience;