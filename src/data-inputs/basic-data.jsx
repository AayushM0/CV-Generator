import Textinput from "./text-input";

import "./basic-data.css";
import { CgProfile } from "react-icons/cg";
function BasicData({ onchange }) {
  return (
    <div className="basic-data-input-div">
      
      <h3> <CgProfile className="basic-icon"/> Basic Information</h3>
      
      <div className="input-row">
        <Textinput 
          Label="Full Name" 
          type="text" 
          onchange={(e) => onchange(e, "fullName","basic")} 
        />
        <Textinput 
          Label="Phone" 
          type="number" 
          onchange={(e) => onchange(e, "phoneNumber","basic")} 
        />
      </div>

      <div className="input-row">
        <Textinput 
          Label="Email" 
          type="email" 
          onchange={(e) => onchange(e, "email","basic")} 
        />
        <Textinput 
          Label="Address" 
          type="text" 
          onchange={(e) => onchange(e, "location","basic")} 
        />
        
      </div>
      
    </div>
  );
}

export default BasicData;