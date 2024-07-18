import logo from "../assets/ylogo2.jpg";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-4 w-40" src={logo} alt="logo"/>
            <div className="m-12 flex items-center justify-center gap-4 text-2xl">                
                <FaGithub/>
                <FaLinkedin/>
                <FaInstagram/>

            </div>

        </div>
    </nav>
};

export default Navbar; 