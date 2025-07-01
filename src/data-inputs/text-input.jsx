import "./text-input.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Textinput({ Label,value, type = "text", onchange , remove}) {
    return (
        <div className="input-area">
            <h1>{Label}</h1>
            {type === "textarea" ? (
                <textarea onChange={onchange} rows={4} />
            ) : (
                
                <input value={value} type={type} onChange={onchange} />
                
                
            )}
        </div>
    )
}

export default Textinput;