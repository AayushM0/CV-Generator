import Textinput from "./text-input";
import "./summary.css"
import { FaEnvelopeOpenText } from "react-icons/fa";

function Summary({ onchange }){
    return (
        <div className="summary-container">
            <h3><FaEnvelopeOpenText /> Summary</h3>
            <Textinput 
                type="textarea"  // Consider using textarea for longer text
                onchange={(e) => onchange(e, null, "summary")}
                Label="Professional Summary"
            />
        </div>
    )
}

export default Summary;