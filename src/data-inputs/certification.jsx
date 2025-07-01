

import "./certification.css"
import Textinput from "./text-input"
import { PiCertificateBold } from "react-icons/pi";
function Certification({onchange,basicdata,addEx,removeSkill}){

    

    return (
        <div className="certification-container">
            <h3><PiCertificateBold />Certifications</h3>
             {basicdata.map((ob,index) => (<div key={index} className="edu1">
                <h5 className="certification-number">{`Certification ${index+1}`}</h5>
                <button onClick={(e)=>{removeSkill(index,"certifications")}}>-</button>
            <Textinput Label={"Name"} type="text" onchange={(e)=>{onchange(e,null,"certifications","name",index)}}></Textinput>
            <Textinput Label={"Issuer"} type="text" onchange={(e)=>{onchange(e,null,"certifications","issuer",index)}}></Textinput>
            <Textinput Label={"Date"} type="text" onchange={(e)=>{onchange(e,null,"certifications","date",index)}}></Textinput>
            <Textinput Label={"Website"} type="text" onchange={(e)=>{onchange(e,null,"certifications","website",index)}}></Textinput>
            <Textinput Label={"Summary"} type="textarea" onchange={(e)=>{onchange(e,null,"certifications","summary",index)}}></Textinput>
        </div>))}
        <button onClick={(e)=>{addEx("certifications")}}>Add</button>
        </div>
    )
}

export default Certification;