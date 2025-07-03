import { FaFileDownload } from "react-icons/fa"; 
import "./navbar.css"
import DownloadButton from "./DownloadButton";
function NavBar(){
    return (
        <div className="nav-container">
            <h2 className="head-container">CV-Generator</h2>
            <DownloadButton className="Download" />
        </div>
    )
}

export default NavBar;