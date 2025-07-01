import "./education.css"
import Textinput from "./text-input"
import { FaBook } from "react-icons/fa";

function Education({onchange}){
    return (
        <div className="education-container">
            <h3><FaBook /> Education</h3>
             <div className="edu1">
            <div className="input-row">
            <Textinput Label={"Institution"} type="text" onchange={(e)=>{onchange(e,null,"education","institution",0)}}></Textinput>
            <Textinput Label={"Date"} type="text" onchange={(e)=>{onchange(e,null,"education","date",0)}}></Textinput>
            </div>
            <div className="input-row">
            <Textinput Label={"Study"} type="text" onchange={(e)=>{onchange(e,null,"education","study",0)}}></Textinput>
            <Textinput Label={"Type"} type="text" onchange={(e)=>{onchange(e,null,"education","type",0)}}></Textinput>
            </div>
            <div className="input-row">
            <Textinput Label={"Score"} type="text" onchange={(e)=>{onchange(e,null,"education","score",0)}}></Textinput>
            </div>
        </div>
        </div>
    )
}

export default Education;