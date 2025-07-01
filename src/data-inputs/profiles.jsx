
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Textinput from "./text-input";
import "./profiles.css"
import { ImProfile } from "react-icons/im";
function Profiles({onchange}){
    return (
        
        <div className="profile-container">
            
            <h3><ImProfile className="basic-icon"/> Profiles</h3>
            
            <div className="Networks">
            <div className="linkedin">
                <h4><FaLinkedin /> LinkedIn</h4>
                <Textinput Label={"Username"} onchange={(e)=>{onchange(e,null,"profiles","username",0)}}/>
                <Textinput Label={"Url"} onchange={(e)=>{onchange(e,null,"profiles","website",0)}}/>
            </div>

            <div className="github">
                <h4><FaGithub /> Github</h4>
                <Textinput Label={"Username"} onchange={(e)=>{onchange(e,null,"profiles","username",1)}}/>
                <Textinput Label={"Url"} onchange={(e)=>{onchange(e,null,"profiles","website",1)}}/>
            </div>
            </div>
        </div>
    )
}

export default Profiles;