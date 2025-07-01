

import "./certification.css"
import Textinput from "./text-input"
import { PiCertificateBold } from "react-icons/pi";
function Certification({onchange,basicdata,addEx,removeSkill}){

    

    return (
        <div className="certification-container">
            <h3><PiCertificateBold className="icon" /> Certifications</h3>
             {basicdata.map((ob,index) => (<div key={index} className="edu1">
                <div className="cerbutt">
                <h4 className="certification-number">{`Certification ${index+1}`}</h4>
                <button className="remove" onClick={(e)=>{removeSkill(index,"certifications")}}>-</button>
                </div>
            <div className="input-row">
            <Textinput Label={"Name"} type="text" onchange={(e)=>{onchange(e,null,"certifications","name",index)}}></Textinput>
            <Textinput Label={"Issuer"} type="text" onchange={(e)=>{onchange(e,null,"certifications","issuer",index)}}></Textinput>
            </div>
            <div className="input-row">
            <Textinput Label={"Date"} type="text" onchange={(e)=>{onchange(e,null,"certifications","date",index)}}></Textinput>
            <Textinput Label={"Website"} type="text" onchange={(e)=>{onchange(e,null,"certifications","website",index)}}></Textinput>
            </div><div className="input-row">
            <Textinput Label={"Summary"} type="textarea" onchange={(e)=>{onchange(e,null,"certifications","summary",index)}}></Textinput>
            </div>
        </div>))}

        <button className="add" onClick={(e)=>{addEx("certifications")}}>Add</button>
        </div>
    )
}

export default Certification;